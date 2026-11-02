// DOM要素の取得
const form = document.getElementById('memo-form');
const typeInput = document.getElementById('type');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const memoInput = document.getElementById('memo');
const memoList = document.getElementById('memo-list');
const totalLendEl = document.getElementById('total-lend');
const totalBorrowEl = document.getElementById('total-borrow');

// データの読み込み（LocalStorageから取得。なければ空の配列）
let items = JSON.parse(localStorage.getItem('money_memos')) || [];

// ページを開いたときに初期描画を実行
render();

// フォームが送信されたときの処理
form.addEventListener('submit', (e) => {
  e.preventDefault(); // ページがリロードされるのを防ぐ

  // 新しいデータのオブジェクトを作成
const newItem = {
    id: Date.now(), // 一意のIDとして現在のタイムスタンプを使用
    type: typeInput.value, // "lend" または "borrow"
    name: nameInput.value.trim(),
    amount: Number(amountInput.value),
    memo: memoInput.value.trim(),
    date: new Date().toLocaleDateString('ja-JP') // 登録日
};

  // 配列に追加
items.push(newItem);

  // 保存＆画面を再描画
saveAndRender();

  // 入力フォームをリセット
form.reset();
});

// データをLocalStorageに保存し、画面を再描画する関数
function saveAndRender() {
    localStorage.setItem('money_memos', JSON.stringify(items));
    render();
}

// 画面を再描画する関数
function render() {
  // リストを一旦リセット
memoList.innerHTML = '';

let totalLend = 0;
let totalBorrow = 0;

  // データが0件の場合
if (items.length === 0) {
    memoList.innerHTML = '<li class="empty-msg">記録はありません</li>';
    totalLendEl.textContent = '￥0';
    totalBorrowEl.textContent = '￥0';
    return;
}

  // データを1件ずつループしてHTMLを組み立てる
items.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list-item', item.type);

    const formattedAmount = item.amount.toLocaleString();
    const typeLabel = item.type === 'lend' ? '貸した' : '借りた';

    li.innerHTML = `
    <div class="item-info">
        <div class="item-top">
        <span class="badge ${item.type}">${typeLabel}</span>
        <span class="item-name">${escapeHTML(item.name)}</span>
        <span class="item-amount">￥${formattedAmount}</span>
        </div>
        ${item.memo ? `<div class="item-memo">メモ: ${escapeHTML(item.memo)}</div>` : ''}
        <div class="item-date">${item.date}</div>
    </div>
    <button class="delete-btn" onclick="deleteItem(${item.id})">精算（削除）</button>
    `;

    memoList.appendChild(li);

    // 合計金額の計算
    if (item.type === 'lend') {
        totalLend += item.amount;
    } else {
        totalBorrow += item.amount;
    }
});

  // 合計金額の表示を更新
totalLendEl.textContent = `￥${totalLend.toLocaleString()}`;
totalBorrowEl.textContent = `￥${totalBorrow.toLocaleString()}`;
}

// 精算（削除）ボタンを押したときの処理
function deleteItem(id) {
    if (confirm('この記録を精算（削除）しますか？')) {
    // 該当するID以外のデータだけを残す
    items = items.filter(item => item.id !== id);
    saveAndRender();
    }
}

// セキュリティ対策（XSS防止用のエスケープ関数）
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, match => {
        const escapeTable = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        };
        return escapeTable[match];
    });
}
