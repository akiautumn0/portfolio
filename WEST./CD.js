document.addEventListener('DOMContentLoaded', () => {
    const yearCheckboxes = document.querySelectorAll('.year');
    const typeCheckboxes = document.querySelectorAll('.type');
    const sections = document.querySelectorAll('.year-section');
    const selectAllBtn = document.getElementById('selectAll');
    const clearAllBtn = document.getElementById('clearAll');

    function filterReleases() {
        // 現在チェックされている値を取得
        const selectedYears = Array.from(yearCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
        const selectedTypes = Array.from(typeCheckboxes).filter(cb => cb.checked).map(cb => cb.value);

        sections.forEach(section => {
            const sectionYear = section.getAttribute('data-year');
            // 年が選択されているか
            const isYearMatch = selectedYears.includes(sectionYear);
            
            if (isYearMatch) {
                const rows = section.querySelectorAll('tbody tr, tr'); // trを確実に取得
                let visibleRowsCount = 0;

                rows.forEach(row => {
                    // クラス名に基づいた判定
                    const isSingle = row.classList.contains('single');
                    const isAlbum = row.classList.contains('album');
                    const isDigital = row.classList.contains('digital');
                    
                    const showRow = (isSingle && selectedTypes.includes('single')) || 
                                    (isAlbum && selectedTypes.includes('album')) ||
                                    (isDigital && selectedTypes.includes('digital'));
                    
                    row.style.display = showRow ? 'table-row' : 'none';
                    if (showRow) visibleRowsCount++;
                });

                // 表示すべき行がある場合のみ、年ごとのセクションを表示
                section.style.display = (visibleRowsCount > 0) ? 'block' : 'none';
            } else {
                // 年自体がチェックされていない場合は非表示
                section.style.display = 'none';
            }
        });
    }

    // イベント登録
    [...yearCheckboxes, ...typeCheckboxes].forEach(cb => {
        cb.addEventListener('change', filterReleases);
    });

    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', () => {
            [...yearCheckboxes, ...typeCheckboxes].forEach(cb => cb.checked = true);
            filterReleases();
        });
    }

    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            [...yearCheckboxes, ...typeCheckboxes].forEach(cb => cb.checked = false);
            filterReleases();
        });
    }

    // 初回実行
    filterReleases();
});