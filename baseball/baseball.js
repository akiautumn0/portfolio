const matchesData = [
    {
        year: "2024",
        date: "3/8(木)",
        homeTeam: "DeNA",
        awayTeam: "日ハム",
        favTeam: "DeNA",
        league: "オープン戦",
        teams:["DeNA", "日ハム"],
        stadium: "横浜スタジアム",
        pitcher: "東 / 北山",
        score: "4-4 -",
        result: "draw",
        url: "https://npb.jp/bis/2024/games/ops2024030800030.html"
    },
    {
        year: "2024",
        date: "4/11(木)",
        homeTeam: "ヤクルト",
        awayTeam: "巨人",
        favTeam: "巨人",
        league: "セ・リーグ",
        teams:["ヤクルト", "巨人"],
        stadium: "明治神宮球場",
        pitcher: "高橋奎 / 菅野",
        score: "0-5 ⚪︎",
        result: "win",
        url: "https://npb.jp/bis/2024/games/s2024041101120.html"
    },
    {
        year: "2024",
        date: "5/10(金)",
        homeTeam: "ヤクルト",
        awayTeam: "巨人",
        favTeam: "巨人",
        league: "セ・リーグ",
        teams:["ヤクルト", "巨人"],
        stadium: "明治神宮球場",
        pitcher: "ヤフーレ / 戸郷",
        score: "1-2 ⚪︎",
        result: "win",
        url: "https://npb.jp/bis/2024/games/s2024051001190.html"
    },
    {
        year: "2024",
        date: "5/29(水)",
        homeTeam: "巨人",
        awayTeam: "ソフトバンク",
        favTeam: "ソフトバンク",
        league: "交流戦",
        teams:["巨人", "ソフトバンク"],
        stadium: "東京ドーム",
        pitcher: "堀田 / 大関",
        score: "1-0 ×",
        result: "lose",
        url: "https://npb.jp/bis/2024/games/s2024052901842.html"
    },
    {
        year: "2024",
        date: "6/1(土)",
        homeTeam: "ロッテ",
        awayTeam: "阪神",
        favTeam: "阪神",
        league: "交流戦",
        teams:["ロッテ", "阪神"],
        stadium: "ZOZOマリンスタジアム",
        pitcher: "田中晴 / ビーズリー",
        score: "3-2 ×",
        result: "lose",
        url: "https://npb.jp/bis/2024/games/s2024060101863.html"
    },
    {
        year: "2024",
        date: "6/23(日)",
        homeTeam: "ヤクルト",
        awayTeam: "巨人",
        favTeam: "巨人",
        league: "セ・リーグ",
        teams:["ヤクルト", "巨人"],
        stadium: "東京ドーム",
        pitcher: "又木 / ヤフーレ",
        score: "4-3 ⚪︎",
        result: "win",
        url: "https://npb.jp/bis/2024/games/s2024062301238.html"
    },
    {
        year: "2024",
        date: "8/7(水)",
        homeTeam: "巨人",
        awayTeam: "広島",
        favTeam: "巨人",
        league: "セ・リーグ",
        teams:["巨人", "広島"],
        stadium: "東京ドーム",
        pitcher: "グリフィン / 床田",
        score: "3-3 -",
        result: "draw",
        url: "https://npb.jp/bis/2024/games/s2024080701338.html"
    },
    {
        year: "2024",
        date: "8/27(火)",
        homeTeam: "ソフトバンク",
        awayTeam: "オリックス",
        favTeam: "ソフトバンク",
        league: "パ・リーグ",
        teams:["ソフトバンク", "オリックス"],
        stadium: "みずほPayPayドーム福岡",
        pitcher: "モイネロ / 田嶋",
        score: "3-1 ⚪︎",
        result: "win",
        url: "https://npb.jp/bis/2024/games/s2024082701753.html"
    },
    {
        year: "2024",
        date: "9/13(金)",
        homeTeam: "ヤクルト",
        awayTeam: "巨人",
        favTeam: "巨人",
        league: "セ・リーグ",
        teams:["ヤクルト", "巨人"],
        stadium: "明治神宮球場",
        pitcher: "山野 / 山崎伊",
        score: "7-2 ×",
        result: "lose",
        url: "https://npb.jp/bis/2024/games/s2024091301433.html"
    },
    {
        year: "2024",
        date: "9/28(土)",
        homeTeam: "ヤクルト",
        awayTeam: "阪神",
        favTeam: "阪神",
        league: "セ・リーグ",
        teams:["ヤクルト", "阪神"],
        stadium: "明治神宮球場",
        pitcher: "山野 / ビーズリー",
        score: "2-7 ⚪︎",
        result: "win",
        url: "https://npb.jp/bis/2024/games/s2024092801954.html"
    },
    {
        year: "2025",
        date: "3/12(水)",
        homeTeam: "西武",
        awayTeam: "阪神",
        favTeam: "阪神",
        league: "オープン戦",
        teams:["西武", "阪神"],
        stadium: "ベルーナドーム",
        pitcher: "今井 / デュプランティエ",
        score: "2-3 ⚪︎",
        result: "win",
        url: "https://npb.jp/bis/2025/games/ops2025031200052.html"
    },
    {
        year: "2025",
        date: "6/11(水)",
        homeTeam: "西武",
        awayTeam: "阪神",
        favTeam: "阪神",
        league: "交流戦",
        teams:["西武", "阪神"],
        stadium: "ベルーナドーム",
        pitcher: "渡邊勇 / 伊藤大",
        score: "3-2 ×",
        result: "lose",
        url: "https://npb.jp/bis/2025/games/s2025061100897.html"
    },
    {
        year: "2025",
        date: "6/28(土)",
        homeTeam: "巨人",
        awayTeam: "DeNA",
        favTeam: "巨人",
        league: "セ・リーグ",
        teams:["巨人", "DeNA"],
        stadium: "東京ドーム",
        pitcher: "グリフィン / バウワー",
        score: "5-0 ⚪︎",
        result: "win",
        url: "https://npb.jp/bis/2025/games/s2025062800270.html"
    },
    {
        year: "2025",
        date: "9/5(金)",
        homeTeam: "西武",
        awayTeam: "ロッテ",
        favTeam: "西武",
        league: "パ・リーグ",
        teams:["西武", "ロッテ"],
        stadium: "ベルーナドーム",
        pitcher: "髙橋光成 / ボス",
        score: "5-3 ⚪︎",
        result: "win",
        url: "https://npb.jp/bis/2025/games/s2025090500793.html"
    },
    {
        year: "2025",
        date: "9/23(火)",
        homeTeam: "ロッテ",
        awayTeam: "西武",
        favTeam: "西武",
        league: "パ・リーグ",
        teams:["ロッテ", "西武"],
        stadium: "ZOZOマリンスタジアム",
        pitcher: "唐川 / 與座",
        score: "1-0 ×",
        result: "lose",
        url: "https://npb.jp/bis/2025/games/s2025092300835.html"
    },
    {
        year: "2025",
        date: "9/24(水)",
        homeTeam: "ロッテ",
        awayTeam: "西武",
        favTeam: "西武",
        league: "パ・リーグ",
        teams:["ロッテ", "西武"],
        stadium: "ZOZOマリンスタジアム",
        pitcher: "木村 / 菅井",
        score: "5-0 ×",
        result: "lose",
        url: "https://npb.jp/bis/2025/games/s2025092400838.html"
    },
    {
        year: "2026",
        date: "4/25(土)",
        homeTeam: "阪神",
        awayTeam: "広島",
        favTeam: "阪神",
        league: "セ・リーグ",
        teams: ["阪神", "広島"],
        stadium: "阪神甲子園球場",
        pitcher: "村上頌 / ターノック",
        score: "2-2 -",
        result: "draw",
        url: "https://npb.jp/scores/2026/0425/t-c-04/"
    },
    {
        year: "2026",
        date: "5/6(水)",
        homeTeam: "巨人",
        awayTeam: "ヤクルト",
        favTeam: "巨人",
        league: "セ・リーグ",
        teams: ["巨人", "ヤクルト"],
        stadium: "東京ドーム",
        pitcher: "竹丸 / 山野",
        score: "0-5 ×",
        result: "lose",
        url: "https://npb.jp/scores/2026/0506/g-s-09/"
    },
    {
        year: "2026",
        date: "5/8(金)",
        homeTeam: "西武",
        awayTeam: "楽天",
        favTeam: "西武",
        league: "パ・リーグ",
        teams: ["西武", "楽天"],
        stadium: "ベルーナドーム",
        pitcher: "隅田 / ウレーニャ",
        score: "4-2 ⚪︎",
        result: "win",
        url: "https://npb.jp/scores/2026/0508/l-e-06/"
    },
    {
        year: "2026",
        date: "5/14(木)",
        homeTeam: "DeNA",
        awayTeam: "中日",
        favTeam: "DeNA",
        league: "セ・リーグ",
        teams: ["DeNA", "中日"],
        stadium: "横浜スタジアム",
        pitcher: "入江 / マラー",
        score: "0-0 -",
        result: "draw",
        url: "https://npb.jp/scores/2026/0514/db-d-08/"
    },
    {
        year: "2026",
        date: "6/4(木)",
        homeTeam: "阪神",
        awayTeam: "西武",
        favTeam: "阪神",
        league: "交流戦",
        teams: ["阪神", "西武"],
        stadium: "阪神甲子園球場",
        pitcher: "西勇 / 平良",
        score: "2-4 ×",
        result: "lose",
        url: "https://npb.jp/scores/2026/0604/t-l-02/"
    },
    {
        year: "2026",
        date: "6/11(木)",
        homeTeam: "ロッテ",
        awayTeam: "中日",
        favTeam: "ロッテ",
        league: "交流戦",
        teams: ["ロッテ", "中日"],
        stadium: "ZOZOマリンスタジアム",
        pitcher: "小島 / 金丸",
        score: "3-2 ⚪︎",
        result: "win",
        url: "https://npb.jp/scores/2026/0611/m-d-03/"
    },
    {
        year: "2026",
        date: "7/16(木)",
        homeTeam: "西武",
        awayTeam: "ロッテ",
        favTeam: "西武",
        league: "パ・リーグ",
        teams: ["西武", "ロッテ"],
        stadium: "ベルーナドーム",
        pitcher: "渡邊勇 / 毛利",
        score: "3-4 ×",
        result: "lose",
        url: "https://npb.jp/scores/2026/0716/l-m-14/roster.html"
    },
    {
        year: "2026",
        date: "8/14(金)",
        homeTeam: "西武",
        awayTeam: "ロッテ",
        favTeam: "西武",
        league: "パ・リーグ",
        teams: ["西武", "ロッテ"],
        stadium: "ベルーナドーム",
        pitcher: "豆田(髙橋光成) / 小島",
        score: "7-0 ⚪︎",
        result: "win",
        url: "https://npb.jp/scores/2026/0814/l-m-17/"
    },
    {
        year: "2026",
        date: "9/17(木)",
        homeTeam: "日ハム",
        awayTeam: "西武",
        favTeam: "西武",
        league: "パ・リーグ",
        teams: ["日ハム", "西武"],
        stadium: "エスコンフィールド",
        pitcher: "達 / 菅井",
        score: "4-2 ×",
        result: "lose",
        url: "https://npb.jp/scores/2026/0917/f-l-25/"
    },
    {
        year: "2026",
        date: "9/28(月)",
        homeTeam: "西武",
        awayTeam: "楽天",
        favTeam: "西武",
        league: "パ・リーグ",
        teams: ["西武", "楽天"],
        stadium: "ベルーナドーム",
        pitcher: "隅田 / 岸",
        score: "2-4 ×",
        result: "lose",
        url: "https://npb.jp/scores/2026/0928/l-e-25/"
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
                optgroup.label = leagueName;

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
            optgroup.label = activeLeague;

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
                const leagueTeams = teamData[activeLeague] || [];
                teamOrLeagueMatch = match.teams && match.teams.some(team => leagueTeams.includes(team));
            }

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

            // 日付の部分にURLリンクを適用
            const dateHtml = match.url 
                ? `<a href="${match.url}" target="_blank" rel="noopener noreferrer">${match.date}</a>` 
                : match.date;

            // 対戦カードの下に表示する先発のHTML（「先発:」の文字を削除）[cite: 7]
            const pitcherHtml = match.pitcher 
                ? `<div style="font-size: 0.85em; color: #666; margin-top: 3px;">${match.pitcher}</div>` 
                : '';

            tr.innerHTML = `
                <td>${match.year}</td>
                <td>${dateHtml}</td>
                <td>${match.league}</td>
                <td>
                    <div>${homeStr} vs ${awayStr}</div>
                    ${pitcherHtml}
                </td>
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