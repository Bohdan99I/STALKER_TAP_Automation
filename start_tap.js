// Знаходимо елемент аномалії за його ID
const clickTarget = document.querySelector('#anomaly'); 

if (clickTarget) {
    console.log("Аномалію знайдено! Починаємо збір хабара...");
    
    // Створюємо функцію для кліку з випадковою затримкою
    function autoClick() {
        const eventOpts = { bubbles: true, cancelable: true, pointerId: 1, isPrimary: true };
        
        // Імітуємо натискання та відпускання пальця/миші
        clickTarget.dispatchEvent(new PointerEvent('pointerdown', eventOpts));
        clickTarget.dispatchEvent(new PointerEvent('pointerup', eventOpts));
        
        // Генеруємо випадковий час від 100 до 200 мс
        const randomDelay = Math.floor(Math.random() * 100) + 100; 
        
        // Плануємо наступний клік
        window.tapTimer = setTimeout(autoClick, randomDelay);
    }
    
    // Запускаємо перший клік
    autoClick(); 
    
} else {
    console.log("Помилка: Елемент аномалії не знайдено на сторінці.");
}