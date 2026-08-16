const matchesData = [
    {
        year: "2024",
        date: "3/8(木)",
        homeTeam: "横浜DeNAベイスターズ",
        awayTeam: "北海道日本ハムファイターズ",
        favTeam: "横浜DeNAベイスターズ",
        league: "オープン戦",
        teams:["DeNA", "日ハム"],
        stadium: "横浜スタジアム",
        score: "4-4 -",
        result: "draw"
    },
    {
        year: "2024",
        date: "4/11(木)",
        homeTeam: "東京ヤクルトスワローズ",
        awayTeam: "読売ジャイアンツ",
        favTeam: "読売ジャイアンツ",
        league: "セ・リーグ",
        teams:["ヤクルト", "巨人"],
        stadium: "明治神宮球場",
        score: "0-5 ⚪︎",
        result: "win"
    },
    {
        year: "2024",
        date: "5/10(金)",
        homeTeam: "東京ヤクルトスワローズ",
        awayTeam: "読売ジャイアンツ",
        favTeam: "読売ジャイアンツ",
        league: "セ・リーグ",
        teams:["ヤクルト", "巨人"],
        stadium: "明治神宮球場",
        score: "1-2 ⚪︎",
        result: "win"
    },
    {
        year: "2024",
        date: "5/29(水)",
        homeTeam: "読売ジャイアンツ",
        awayTeam: "福岡ソフトバンクホークス",
        favTeam: "福岡ソフトバンクホークス",
        league: "交流戦",
        teams:["巨人", "ソフトバンク"],
        stadium: "東京ドーム",
        score: "1-0 ×",
        result: "lose"
    },
    {
        year: "2024",
        date: "6/1(土)",
        homeTeam: "千葉ロッテマリーンズ",
        awayTeam: "阪神タイガース",
        favTeam: "阪神タイガース",
        league: "交流戦",
        teams:["ロッテ", "阪神"],
        stadium: "ZOZOマリンスタジアム",
        score: "3-2 ×",
        result: "lose"
    },
    {
        year: "2024",
        date: "6/23(日)",
        homeTeam: "東京ヤクルトスワローズ",
        awayTeam: "読売ジャイアンツ",
        favTeam: "読売ジャイアンツ",
        league: "セ・リーグ",
        teams:["ヤクルト", "巨人"],
        stadium: "東京ドーム",
        score: "4-3 ⚪︎",
        result: "win"
    },
    {
        year: "2024",
        date: "8/7(水)",
        homeTeam: "読売ジャイアンツ",
        awayTeam: "広島東洋カープ",
        favTeam: "読売ジャイアンツ",
        league: "セ・リーグ",
        teams:["巨人", "広島"],
        stadium: "東京ドーム",
        score: "3-3 -",
        result: "draw"
    },
    {
        year: "2024",
        date: "8/27(火)",
        homeTeam: "福岡ソフトバンクホークス",
        awayTeam: "オリックス・バファローズ",
        favTeam: "福岡ソフトバンクホークス",
        league: "パ・リーグ",
        teams:["ソフトバンク", "オリックス"],
        stadium: "みずほPayPayドーム福岡",
        score: "3-1 ⚪︎",
        result: "win"
    },
    {
        year: "2024",
        date: "9/13(金)",
        homeTeam: "東京ヤクルトスワローズ",
        awayTeam: "読売ジャイアンツ",
        favTeam: "読売ジャイアンツ",
        league: "セ・リーグ",
        teams:["ヤクルト", "巨人"],
        stadium: "明治神宮球場",
        score: "7-2 ×",
        result: "lose"
    },
    {
        year: "2024",
        date: "9/28(土)",
        homeTeam: "東京ヤクルトスワローズ",
        awayTeam: "阪神タイガース",
        favTeam: "阪神タイガース",
        league: "セ・リーグ",
        teams:["ヤクルト", "阪神"],
        stadium: "明治神宮球場",
        score: "2-7 ⚪︎",
        result: "win"
    },
    {
        year: "2025",
        date: "3/12(水)",
        homeTeam: "埼玉西武ライオンズ",
        awayTeam: "阪神タイガース",
        favTeam: "阪神タイガース",
        league: "オープン戦",
        teams:["西武", "阪神"],
        stadium: "ベルーナドーム",
        score: "2-3 ⚪︎",
        result: "win"
    },
    {
        year: "2025",
        date: "6/11(水)",
        homeTeam: "埼玉西武ライオンズ",
        awayTeam: "阪神タイガース",
        favTeam: "阪神タイガース",
        league: "交流戦",
        teams:["西武", "阪神"],
        stadium: "ベルーナドーム",
        score: "3-2 ×",
        result: "lose"
    },
    {
        year: "2025",
        date: "6/28(土)",
        homeTeam: "読売ジャイアンツ",
        awayTeam: "横浜DeNAベイスターズ",
        favTeam: "読売ジャイアンツ",
        league: "セ・リーグ",
        teams:["巨人", "DeNA"],
        stadium: "東京ドーム",
        score: "5-0 ⚪︎",
        result: "win"
    },
    {
        year: "2025",
        date: "9/5(金)",
        homeTeam: "埼玉西武ライオンズ",
        awayTeam: "千葉ロッテマリーンズ",
        favTeam: "埼玉西武ライオンズ",
        league: "パ・リーグ",
        teams:["西武", "ロッテ"],
        stadium: "ベルーナドーム",
        score: "5-3 ⚪︎",
        result: "win"
    },
    {
        year: "2025",
        date: "9/23(火)",
        homeTeam: "千葉ロッテマリーンズ",
        awayTeam: "埼玉西武ライオンズ",
        favTeam: "埼玉西武ライオンズ",
        league: "パ・リーグ",
        teams:["ロッテ", "西武"],
        stadium: "ZOZOマリンスタジアム",
        score: "1-0 ×",
        result: "lose"
    },
    {
        year: "2025",
        date: "9/24(水)",
        homeTeam: "千葉ロッテマリーンズ",
        awayTeam: "埼玉西武ライオンズ",
        favTeam: "埼玉西武ライオンズ",
        league: "パ・リーグ",
        teams:["ロッテ", "西武"],
        stadium: "ZOZOマリンスタジアム",
        score: "5-0 ×",
        result: "lose"
    },
    {
        year: "2026",
        date: "4/25(土)",
        homeTeam: "阪神タイガース",
        awayTeam: "広島東洋カープ",
        favTeam: "阪神タイガース",
        league: "セ・リーグ",
        teams: ["阪神", "広島"],
        stadium: "阪神甲子園球場",
        score: "2-2 -",
        result: "draw"
    },
    {
        year: "2026",
        date: "5/6(水)",
        homeTeam: "読売ジャイアンツ",
        awayTeam: "東京ヤクルトスワローズ",
        favTeam: "読売ジャイアンツ",
        league: "セ・リーグ",
        teams: ["巨人", "ヤクルト"],
        stadium: "東京ドーム",
        score: "0-5 ×",
        result: "lose"
    },
    {
        year: "2026",
        date: "5/8(金)",
        homeTeam: "埼玉西武ライオンズ",
        awayTeam: "東北楽天イーグルス",
        favTeam: "埼玉西武ライオンズ",
        league: "パ・リーグ",
        teams: ["西武", "楽天"],
        stadium: "ベルーナドーム",
        score: "4-2 ⚪︎",
        result: "win"
    },
    {
        year: "2026",
        date: "5/14(木)",
        homeTeam: "横浜DeNAベイスターズ",
        awayTeam: "中日ドラゴンズ",
        favTeam: "横浜DeNAベイスターズ",
        league: "セ・リーグ",
        teams: ["DeNA", "中日"],
        stadium: "横浜スタジアム",
        score: "0-0 -",
        result: "draw"
    },
    {
        year: "2026",
        date: "6/4(木)",
        homeTeam: "阪神タイガース",
        awayTeam: "埼玉西武ライオンズ",
        favTeam: "阪神タイガース",
        league: "交流戦",
        teams: ["阪神", "西武"],
        stadium: "阪神甲子園球場",
        score: "2-4 ×",
        result: "lose"
    },
    {
        year: "2026",
        date: "6/11(木)",
        homeTeam: "千葉ロッテマリーンズ",
        awayTeam: "中日ドラゴンズ",
        favTeam: "千葉ロッテマリーンズ",
        league: "交流戦",
        teams: ["ロッテ", "中日"],
        stadium: "ZOZOマリンスタジアム",
        score: "3-2 ⚪︎",
        result: "win"
    },
    {
        year: "2026",
        date: "7/16(木)",
        homeTeam: "埼玉西武ライオンズ",
        awayTeam: "千葉ロッテマリーンズ",
        favTeam: "埼玉西武ライオンズ",
        league: "パ・リーグ",
        teams: ["西武", "ロッテ"],
        stadium: "ベルーナドーム",
        score: "3-4 ×",
        result: "lose"
    },
    {
        year: "2026",
        date: "8/14(金)",
        homeTeam: "埼玉西武ライオンズ",
        awayTeam: "千葉ロッテマリーンズ",
        favTeam: "埼玉西武ライオンズ",
        league: "パ・リーグ",
        teams: ["西武", "ロッテ"],
        stadium: "ベルーナドーム",
        score: "7-0 ⚪︎",
        result: "win"
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const matchList = document.getElementById('match-list');
    const leagueRadios = document.querySelectorAll('input[name="league"]');
    const teamSelect = document.getElementById('team-select');
    const teamTagsContainer = document.getElementById('team-tags');
    const countDisplay = document.getElementById('match-count-display');
    const stadiumSelect = document.getElementById('stadium-select');
    const stadiumTagsContainer = document.getElementById('stadium-tags');

    const teamData = {
        'セ・リーグ': ['阪神', 'DeNA', '巨人', '中日', '広島', 'ヤクルト'],
        'パ・リーグ': ['ソフトバンク', '日ハム', 'オリックス', '楽天', '西武', 'ロッテ'],
        '交流戦': ['阪神', 'DeNA', '巨人', '中日', '広島', 'ヤクルト','ソフトバンク', '日ハム', 'オリックス', '楽天', '西武', 'ロッテ']
    };

    let selectedTeams = [];
    let selectedStadiums = [];

    // 1. チームセレクトボックスの更新
    function updateTeamSelectOptions() {
    const activeLeague = document.querySelector('input[name="league"]:checked').value;
    teamSelect.innerHTML = '';

    if (activeLeague === 'all' || activeLeague === 'オープン戦') {
        document.getElementById('team-filter-row').style.display = 'none';
        selectedTeams = []; 
        renderTags();
        filterAndRenderMatches();
        return;
    } else {
        document.getElementById('team-filter-row').style.display = 'flex';
    }

    // 初期オプション
    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.text = '選択してください...';
    defaultOpt.disabled = true;
    defaultOpt.selected = true;
    teamSelect.appendChild(defaultOpt);

    // 交流戦の場合：セ・リーグとパ・リーグを見出し付き（選択不可）でグループ分け表示
    if (activeLeague === '交流戦') {
        ['セ・リーグ', 'パ・リーグ'].forEach(leagueName => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = leagueName; // 見出しテキスト（選択不可）

            teamData[leagueName].forEach(team => {
                const opt = document.createElement('option');
                opt.value = team;
                opt.text = team;
                if (selectedTeams.includes(team)) {
                    opt.disabled = true;
                }
                optgroup.appendChild(opt);
            });

            teamSelect.appendChild(optgroup);
        });
    } else {
        // セ・リーグ または パ・リーグ単体の場合
        const optgroup = document.createElement('optgroup');
        optgroup.label = activeLeague; // 「セ・リーグ」または「パ・リーグ」の見出し（選択不可）

        const teams = teamData[activeLeague] || [];
        teams.forEach(team => {
            const opt = document.createElement('option');
            opt.value = team;
            opt.text = team;
            if (selectedTeams.includes(team)) {
                opt.disabled = true;
            }
            optgroup.appendChild(opt);
        });

        teamSelect.appendChild(optgroup);
    }
}

    // 2. チームタグ描画
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
                filterAndRenderMatches();
            });

            tag.appendChild(closeBtn);
            teamTagsContainer.appendChild(tag);
        });
    }

    // 3. 球場タグ描画
    function renderStadiumTags() {
        stadiumTagsContainer.innerHTML = '';

        selectedStadiums.forEach(stadium => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = stadium;

            const closeBtn = document.createElement('span');
            closeBtn.className = 'tag-close';
            closeBtn.textContent = '×';
            
            closeBtn.addEventListener('click', () => {
                selectedStadiums = selectedStadiums.filter(s => s !== stadium);
                renderStadiumTags();
                updateStadiumSelectOptions();
                filterAndRenderMatches();
            });

            tag.appendChild(closeBtn);
            stadiumTagsContainer.appendChild(tag);
        });
    }

    // 4. 球場セレクトボックスの制御
    function updateStadiumSelectOptions() {
        Array.from(stadiumSelect.options).forEach(opt => {
            if (selectedStadiums.includes(opt.value)) {
                opt.disabled = true;
            } else if (opt.value !== "") {
                opt.disabled = false;
            }
        });
        stadiumSelect.selectedIndex = 0;
    }

    // 5. データの絞り込みと描画
    function filterAndRenderMatches() {
        const checkedYears = Array.from(document.querySelectorAll('#year-checkboxes input:checked')).map(cb => cb.value);
        const checkedResults = Array.from(document.querySelectorAll('#result-checkboxes input:checked')).map(cb => cb.value);
        const activeLeague = document.querySelector('input[name="league"]:checked').value;

        const stats = { win: 0, lose: 0, draw: 0, nocount: 0 };
        const filteredMatches = [];

        matchesData.forEach(match => {
            const yearMatch = checkedYears.includes(match.year);
            const resultMatch = checkedResults.includes(match.result);

            // 球場判定
            let stadiumMatch = true;
            if (selectedStadiums.length > 0) {
                stadiumMatch = selectedStadiums.includes(match.stadium);
            }

            // リーグ & チーム判定
            let teamOrLeagueMatch = false;

            if (activeLeague === 'all') {
                teamOrLeagueMatch = true;
            } else if (activeLeague === 'オープン戦') {
                teamOrLeagueMatch = (match.league === 'オープン戦');
            } else if (activeLeague === '交流戦'){
                teamOrLeagueMatch = (match.league === '交流戦'); 
            } else {
                // セ・リーグ または パ・リーグ選択時：該当リーグ所属球団が試合に出場していればヒット（公式戦・交流戦・オープン戦問わず）
                const leagueTeams = teamData[activeLeague] || [];
                teamOrLeagueMatch = match.teams && match.teams.some(team => leagueTeams.includes(team));
            }

            // チームタグが選択されている場合は、さらにその球団が出場している試合のみに絞り込む
            if (teamOrLeagueMatch && selectedTeams.length > 0) {
                teamOrLeagueMatch = selectedTeams.some(selectedTeam => match.teams && match.teams.includes(selectedTeam));
            }

            if (yearMatch && resultMatch && teamOrLeagueMatch && stadiumMatch) {
                filteredMatches.push(match);
                if (stats[match.result] !== undefined) {
                    stats[match.result]++;
                }
            }
        });

        // テーブルHTML出力
        matchList.innerHTML = '';
        filteredMatches.forEach(match => {
            const tr = document.createElement('tr');
            
            const homeStr = match.homeTeam === match.favTeam 
                ? `<span class="fav-team">${match.homeTeam}</span>` 
                : match.homeTeam;
                
            const awayStr = match.awayTeam === match.favTeam 
                ? `<span class="fav-team">${match.awayTeam}</span>` 
                : match.awayTeam;

            tr.innerHTML = `
                <td>${match.year}</td>
                <td>${match.date}</td>
                <td>${match.league}</td>
                <td>${homeStr} vs ${awayStr}</td>
                <td>${match.stadium}</td>
                <td><span class="${match.result}">${match.score}</span></td>
            `;
            matchList.appendChild(tr);
        });

        // 件数・結果集計の更新
        countDisplay.textContent = `全 ${matchesData.length} 件中 ${filteredMatches.length} 件を表示`;

        const totalResultDisplay = document.getElementById('total-result-display');
        if (totalResultDisplay) {
            const decGames = stats.win + stats.lose;
            const winRate = decGames > 0 ? (stats.win / decGames).toFixed(3) : '.000';

            totalResultDisplay.innerHTML = `
                <span class="win">${stats.win}勝</span> 
                <span class="lose">${stats.lose}敗</span> 
                <span class="draw">${stats.draw}分</span>
                <span class="rate">(勝率 ${winRate})</span>
            `;
        }
    }

    // イベントリスナー
    teamSelect.addEventListener('change', () => {
        const val = teamSelect.value;
        if (val && !selectedTeams.includes(val)) {
            selectedTeams.push(val);
            renderTags();
            updateTeamSelectOptions();
            filterAndRenderMatches();
        }
    });

    stadiumSelect.addEventListener('change', () => {
        const val = stadiumSelect.value;
        if (val && !selectedStadiums.includes(val)) {
            selectedStadiums.push(val);
            renderStadiumTags();
            updateStadiumSelectOptions();
            filterAndRenderMatches();
        }
    });

    leagueRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            selectedTeams = []; 
            updateTeamSelectOptions();
            filterAndRenderMatches();
        });
    });

    document.querySelectorAll('#year-checkboxes input, #result-checkboxes input').forEach(cb => {
        cb.addEventListener('change', filterAndRenderMatches);
    });

    document.getElementById('all-years-btn').addEventListener('click', () => {
        document.querySelectorAll('#year-checkboxes input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
        });
        filterAndRenderMatches(); 
    });

    document.getElementById('all-results-btn').addEventListener('click', () => {
        document.querySelectorAll('#result-checkboxes input[type="checkbox"]').forEach(cb => {
            cb.checked = true;
        });
        filterAndRenderMatches(); 
    });

    // 初期化
    updateTeamSelectOptions();
    updateStadiumSelectOptions();
    filterAndRenderMatches();
});