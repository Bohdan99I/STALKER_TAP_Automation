// Зупиняємо попередній таймер, якщо він був запущений, щоб уникнути конфліктів і подвійних кліків
if (window.tapTimer) {
    clearTimeout(window.tapTimer);
}

console.log("Запущено розумний автоклікер: Пріоритет - Мутант, Резерв - Аномалія");

function autoClick() {
    // 1. Шукаємо елементи безпосередньо перед кожним кліком (перевірка актуального DOM)
    const mutantContainer = document.querySelector('#mutant');
    const anomaly = document.querySelector('#anomaly');
    
    let targetToClick = null;

    // 2. Перевіряємо, чи існує контейнер мутанта і чи НЕ має він класу 'hidden'
    if (mutantContainer && !mutantContainer.classList.contains('hidden')) {
        targetToClick = mutantContainer; // Пріоритетна ціль: Мутант
    } 
    // 3. Якщо мутант прихований, перевіряємо, чи є на екрані аномалія
    else if (anomaly) {
        targetToClick = anomaly; // Резервна ціль: Аномалія
    }

    // 4. Якщо знайдено валідну ціль — виконуємо PointerEvent
    if (targetToClick) {
        const eventOpts = { bubbles: true, cancelable: true, pointerId: 1, isPrimary: true };
        targetToClick.dispatchEvent(new PointerEvent('pointerdown', eventOpts));
        targetToClick.dispatchEvent(new PointerEvent('pointerup', eventOpts));
    }

    // 5. Рандомізація інтервалу та планування наступної ітерації
    const randomDelay = Math.floor(Math.random() * 100) + 100; 
    window.tapTimer = setTimeout(autoClick, randomDelay);
}

// Первинний запуск процесу
autoClick();
