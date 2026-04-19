// HTML要素の取得
const backToTopButton = document.getElementById('back-to-top');

// スクロール時に実行する関数
function scrollFunction() {
    // ページトップから100px以上スクロールしたらボタンを表示
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('show');
    } else {
        // 100px未満なら非表示
        backToTopButton.classList.remove('show');
    }
}

// ボタンクリック時に実行する関数
function topFunction() {
    // スムーズなスクロールでページトップへ移動
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// スクロールイベントに関数を登録
window.addEventListener('scroll', scrollFunction);

// ボタンクリックイベントに関数を登録
backToTopButton.addEventListener('click', topFunction);

// HTML要素の取得
const genreSelect = document.getElementById('genre-select');

// セレクトボックス変更時に実行する関数
function jumpToSection() {
    const selectedId = genreSelect.value;
    
    // 値が空（"選択してください"）でなければジャンプ処理を実行
    if (selectedId) {
        const targetElement = document.getElementById(selectedId);
        
        if (targetElement) {
            // 対象要素までスムーズにスクロール
            // block: 'start'は要素を画面の一番上に表示するよう調整します
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' 
            });
        }
    }
}

// changeイベントに関数を登録
genreSelect.addEventListener('change', jumpToSection);