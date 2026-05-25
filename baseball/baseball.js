document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#match-list tr');
    const leagueRadios = document.querySelectorAll('input[name="league"]');
    const teamSelect = document.getElementById('team-select');
    const teamTagsContainer = document.getElementById('team-tags');
    const countDisplay = document.getElementById('match-count-display');

    // リーグごとの球団データ定義
    const teamData = {
        'セ・リーグ': ['阪神', 'DeNA', '巨人', '中日', 'カープ', 'ヤクルト'],
        'パ・リーグ': ['ソフトバンク', '日ハム', 'オリックス', '楽天', '西武', 'ロッテ']
    };

    let selectedTeams = [];

    // === 1. リーグの選択に応じてチームのプルダウンを制御する関数 ===
    function updateTeamSelectOptions() {
        const activeLeague = document.querySelector('input[name="league"]:checked').value;
        teamSelect.innerHTML = '';

        if (activeLeague === 'all' || activeLeague === '交流戦') {
            document.getElementById('team-filter-row').style.display = 'none';
            selectedTeams = []; 
            renderTags();
            filterMatches();
            return;
        } else {
            document.getElementById('team-filter-row').style.display = 'flex';
        }

        const teams = teamData[activeLeague];
        
        const defaultOpt = document.createElement('option');
        defaultOpt.text = '選択してください...';
        defaultOpt.disabled = true;
        defaultOpt.selected = true;
        teamSelect.appendChild(defaultOpt);

        teams.forEach(team => {
            const opt = document.createElement('option');
            opt.value = team;
            opt.text = team;
            if (selectedTeams.includes(team)) {
                opt.disabled = true;
            }
            teamSelect.appendChild(opt);
        });
    }

    // === 2. 選ばれたチームのタグ（青バッジ）を描画する関数 ===
    function renderTags() {
        teamTagsContainer.innerHTML = '';

        selectedTeams.forEach(team => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = team;

            const closeBtn = document.createElement('span');
            closeBtn.className = 'tag-close';
            closeBtn.textContent = '×';
            
            closeBtn.addEventListener('click', () => {
                selectedTeams = selectedTeams.filter(t => t !== team);
                renderTags();
                updateTeamSelectOptions();
                filterMatches();
            });

            tag.appendChild(closeBtn);
            teamTagsContainer.appendChild(tag);
        });
    }

    // 各種イベントリスナーの設定
    teamSelect.addEventListener('change', () => {
        const val = teamSelect.value;
        if (val && !selectedTeams.includes(val)) {
            selectedTeams.push(val);
            renderTags();
            updateTeamSelectOptions();
            filterMatches();
        }
    });

    leagueRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            selectedTeams = []; 
            updateTeamSelectOptions();
            filterMatches();
        });
    });

    document.querySelectorAll('#year-checkboxes input, #result-checkboxes input').forEach(cb => {
        cb.addEventListener('change', filterMatches);
    });

    // ★追加★ 「年」の全選択ボタンの処理
    document.getElementById('all-years-btn').addEventListener('click', () => {
        document.querySelectorAll('#year-checkboxes input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
        });
        filterMatches(); // 表を更新
    });

    // ★追加★ 「結果」の全選択ボタンの処理
    document.getElementById('all-results-btn').addEventListener('click', () => {
        document.querySelectorAll('#result-checkboxes input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
        });
        filterMatches(); // 表を更新
    });


    // === 3. 表の絞り込みコアロジック ===
    function filterMatches() {
        const checkedYears = Array.from(document.querySelectorAll('#year-checkboxes input:checked')).map(cb => cb.value);
        const checkedResults = Array.from(document.querySelectorAll('#result-checkboxes input:checked')).map(cb => cb.value);
        const activeLeague = document.querySelector('input[name="league"]:checked').value;

        let totalCount = rows.length; 
        let visibleCount = 0;         

        rows.forEach(row => {
            const matchYear = row.getAttribute('data-year');
            const matchResult = row.getAttribute('data-result');
            const matchLeague = row.getAttribute('data-league');
            const matchTeams = row.getAttribute('data-teams').split(',');

            const yearMatch = checkedYears.includes(matchYear);
            const resultMatch = checkedResults.includes(matchResult);

            let teamOrLeagueMatch = false;
            if (activeLeague === 'all') {
                teamOrLeagueMatch = true; 
            } else {
                const leagueMatch = (matchLeague === activeLeague);
                let teamMatch = true;
                if (selectedTeams.length > 0) {
                    teamMatch = matchTeams.some(team => selectedTeams.includes(team));
                }
                teamOrLeagueMatch = leagueMatch && teamMatch;
            }

            if (yearMatch && resultMatch && teamOrLeagueMatch) {
                row.style.display = '';
                visibleCount++; 
            } else {
                row.style.display = 'none';
            }
        });

        countDisplay.textContent = `全 ${totalCount} 件中 ${visibleCount} 件を表示`;
    }

    // 初期起動時のリフレッシュ
    updateTeamSelectOptions();
    filterMatches();
});