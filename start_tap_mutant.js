if (window.tapTimer) {
    clearTimeout(window.tapTimer);
}

console.log("Запущено розумний автоклікер: Пріоритет - Мутант, Резерв - Аномалія");

function autoClick() {
    const mutantContainer = document.querySelector('#mutant');
    const anomaly = document.querySelector('#anomaly');
    
    let targetToClick = null;
'hidden'
    if (mutantContainer && !mutantContainer.classList.contains('hidden')) {
        targetToClick = mutantContainer;
    } 

    else if (anomaly) {
        targetToClick = anomaly;
    }

    if (targetToClick) {
        const eventOpts = { bubbles: true, cancelable: true, pointerId: 1, isPrimary: true };
        targetToClick.dispatchEvent(new PointerEvent('pointerdown', eventOpts));
        targetToClick.dispatchEvent(new PointerEvent('pointerup', eventOpts));
    }

    const randomDelay = Math.floor(Math.random() * 100) + 100; 
    window.tapTimer = setTimeout(autoClick, randomDelay);
}

autoClick();