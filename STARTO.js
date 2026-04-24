const members = [
    { group: "WEST.", name: "中間 淳太", birthday: "1987-10-21", joined: "2003-02-10", color: "#FFFF00" },
    { group: "WEST.", name: "濵田 崇裕", birthday: "1988-12-19", joined: "2002-07-13", color: "#800080" },
    { group: "WEST.", name: "桐山 照史", birthday: "1989-08-31", joined: "2002-07-13", color: "#FFA500" },
    { group: "WEST.", name: "重岡 大毅", birthday: "1992-08-26", joined: "2006-10-08", color: "#FF0000" },
    { group: "WEST.", name: "神山 智洋", birthday: "1993-07-01", joined: "2004-02-21", color: "#32cd32" },
    { group: "WEST.", name: "藤井 流星", birthday: "1993-08-18", joined: "2004-10-08", color: "#0000FF" },
    { group: "WEST.", name: "小瀧 望", birthday: "1996-07-30", joined: "2008-07-17", color: "#FF69B4" },
    { group: "Snow Man", name: "深澤 辰哉", birthday: "1992-05-05", joined: "2004-08-12", color: "#800080" },
    { group: "Snow Man", name: "佐久間 大介", birthday: "1992-07-05", joined: "2005-09-25", color: "#FF69B4" },
    { group: "Snow Man", name: "渡辺 翔太", birthday: "1992-11-05", joined: "2005-06-26", color: "#0000FF" },
    { group: "Snow Man", name: "宮舘 涼太", birthday: "1993-03-25", joined: "2005-10-01", color: "#FF0000" },
    { group: "Snow Man", name: "岩本 照", birthday: "1993-05-17", joined: "2006-10-01", color: "#FFFF00" },
    { group: "Snow Man", name: "阿部 亮平", birthday: "1993-11-27", joined: "2004-08-12", color: "#32cd32" },
    { group: "Snow Man", name: "向井 康二", birthday: "1994-06-21", joined: "2006-10-08", color: "#FFA500" },
    { group: "Snow Man", name: "目黒 蓮", birthday: "1997-02-16", joined: "2010-10-30", color: "#333333" },
    { group: "Snow Man", name: "ラウール", birthday: "2003-06-27", joined: "2015-05-02", color: "#ffffff" },
    { group: "SixTONES", name: "髙地 優吾", birthday: "1994-03-08", joined: "2009-05-24", color: "#FFFF00" },
    { group: "SixTONES", name: "京本 大我", birthday: "1994-12-03", joined: "2006-05-04", color: "#FF69B4" },
    { group: "SixTONES", name: "田中 樹", birthday: "1995-06-15", joined: "2008-04-20", color: "#0000FF" },
    { group: "SixTONES", name: "松村 北斗", birthday: "1995-06-18", joined: "2009-02-15", color: "#333333" },
    { group: "SixTONES", name: "ジェシー", birthday: "1996-06-11", joined: "2006-09-11", color: "#FF0000" },
    { group: "SixTONES", name: "森本 慎太郎", birthday: "1997-07-15", joined: "2006-10-01", color: "#008000" }
];

let currentSortMode = 'age';

// 初期化：フィルターの自動生成
function initFilters() {
    const groups = [...new Set(members.map(m => m.group))];
    const groupArea = document.getElementById('groupFilterArea');
    groupArea.innerHTML = groups.map(g => 
        `<label><input type="checkbox" class="group-filter" value="${g}" checked> ${g}</label>`
    ).join('');

    const monthArea = document.getElementById('monthFilterArea');
    monthArea.innerHTML = [...Array(12).keys()].map(i => 
        `<label><input type="checkbox" class="month-filter" value="${i+1}" checked> ${i+1}月</label>`
    ).join('');
}

function calculateAge(birthdayString) {
    const birthDate = new Date(birthdayString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
}

// 輝度計算（背景色に合わせて文字色を白か黒に自動切替）
function getContrastColor(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#ffffff";
}

function changeSort(mode) {
    currentSortMode = mode;
    document.getElementById('listTitle').innerText = mode === 'age' ? "メンバーリスト（年齢順）" : "メンバーリスト（入所順）";
    document.getElementById('monthTitle').innerText = mode === 'age' ? "誕生月:" : "入所月:";
    renderMemberTable();
}

function renderMemberTable() {
    const container = document.getElementById('resultContainer');
    const checkedGroups = Array.from(document.querySelectorAll('.group-filter:checked')).map(cb => cb.value);
    const checkedMonths = Array.from(document.querySelectorAll('.month-filter:checked')).map(cb => parseInt(cb.value));
    
    let filtered = members.filter(m => {
        const targetDate = currentSortMode === 'age' ? m.birthday : m.joined;
        const targetMonth = new Date(targetDate).getMonth() + 1;
        return checkedGroups.includes(m.group) && checkedMonths.includes(targetMonth);
    });

    filtered.sort((a, b) => {
        const dateA = new Date(currentSortMode === 'age' ? a.birthday : a.joined);
        const dateB = new Date(currentSortMode === 'age' ? b.birthday : b.joined);
        return dateA - dateB;
    });

    if (filtered.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px;'>該当するメンバーがいません。</p>";
        return;
    }

    const headers = currentSortMode === 'age' 
        ? ["グループ", "名前", "誕生日", "年齢", "入所日"] 
        : ["グループ", "名前", "入所日", "年齢", "誕生日"];

    let html = `<table><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;

    html += filtered.map(m => {
        const textColor = getContrastColor(m.color);
        const bday = m.birthday.replace(/-/g, '/');
        const joined = m.joined.replace(/-/g, '/');
        const age = `${calculateAge(m.birthday)}歳`;
        
        const cells = currentSortMode === 'age' 
            ? [m.group, m.name, bday, age, joined] 
            : [m.group, m.name, joined, age, bday];

        // 黒色背景などの時に名前を強調するスタイル
        const specialClass = (m.name === "目黒 蓮" || m.name === "松村 北斗") ? "special-border" : "";

        return `<tr class="member-row" style="background-color: ${m.color}; color: ${textColor};">
            ${cells.map(c => `<td class="${specialClass}">${c}</td>`).join('')}
        </tr>`;
    }).join('');

    container.innerHTML = html + `</tbody></table>`;
}

function selectAll(className, status) {
    document.querySelectorAll(className).forEach(cb => cb.checked = status);
    renderMemberTable();
}

document.addEventListener('DOMContentLoaded', () => {
    initFilters();
    document.getElementById('updateButton').addEventListener('click', renderMemberTable);
    renderMemberTable();
});