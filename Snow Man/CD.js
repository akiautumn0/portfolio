document.addEventListener('DOMContentLoaded', () => {
    const yearCheckboxes = document.querySelectorAll('.year');
    const typeCheckboxes = document.querySelectorAll('.type');
    const sections = document.querySelectorAll('.year-section');
    const selectAllBtn = document.getElementById('selectAll');
    const clearAllBtn = document.getElementById('clearAll');

    function filterReleases() {
        const selectedYears = Array.from(yearCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
        const selectedTypes = Array.from(typeCheckboxes).filter(cb => cb.checked).map(cb => cb.value);

        sections.forEach(section => {
            const sectionYear = section.getAttribute('data-year');
            const isYearMatch = selectedYears.includes(sectionYear);
            
            if (isYearMatch) {
                const rows = section.querySelectorAll('tr');
                let visibleRowsCount = 0;

                rows.forEach(row => {
                    // 各クラスを持っているか判定
                    const isSingle = row.classList.contains('single');
                    const isAlbum = row.classList.contains('album');
                    const isDigital = row.classList.contains('digital'); // 追加
                    
                    // 選択されたタイプに含まれているかチェック
                    const showRow = (isSingle && selectedTypes.includes('single')) || 
                                    (isAlbum && selectedTypes.includes('album')) ||
                                    (isDigital && selectedTypes.includes('digital')); // 追加
                    
                    row.style.display = showRow ? 'table-row' : 'none';
                    if (showRow) visibleRowsCount++;
                });

                // その年に表示する曲が1つ以上あればセクションを表示
                section.style.display = (visibleRowsCount > 0) ? 'block' : 'none';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // イベントリスナーの登録
    yearCheckboxes.forEach(cb => cb.addEventListener('change', filterReleases));
    typeCheckboxes.forEach(cb => cb.addEventListener('change', filterReleases));

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

    filterReleases(); // 初期表示
});