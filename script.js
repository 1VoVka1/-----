document.addEventListener('DOMContentLoaded', () => {
    
    // Получаем элементы
    const profileContainer = document.querySelector('.profile-container');
    const linkButtons = document.querySelectorAll('.link-button');

    // --- АНИМАЦИЯ 1: Плавное появление всего профиля при загрузке ---
    setTimeout(() => {
        // Плавно меняем opacity и transform для контейнера
        profileContainer.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        profileContainer.style.opacity = '1';
        profileContainer.style.transform = 'translateY(0)';
    }, 100); // Небольшая задержка перед стартом

    // --- АНИМАЦИЯ 2: Каскадное появление кнопок ---
    linkButtons.forEach((button, index) => {
        // Каждая кнопка появляется с задержкой (300мс * индекс)
        setTimeout(() => {
            button.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });

    // --- АНИМАЦИЯ 3: Увеличение кнопок при наведении (JS) ---
    linkButtons.forEach(button => {
        
        // При наведении мыши
        button.addEventListener('mouseenter', () => {
            // Используем requestAnimationFrame для максимальной плавности
            requestAnimationFrame(() => {
                button.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                button.style.transform = 'scale(1.05)';
            });
        });

        // При уходе мыши
        button.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                button.style.transition = 'transform 0.3s ease-out';
                button.style.transform = 'scale(1)';
            });
        });

    });

});
// --- АНИМАЦИЯ 4: Эффект печатной машинки ---

const typewriterElement = document.getElementById('typewriter');
const names = ['vovka31', '_Sirin_', 'StarkDragon', '_VoVka_']; // Ваши никнеймы
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentName = names[nameIndex];

    if (isDeleting) {
        // Стираем символы
        typewriterElement.textContent = currentName.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Печатаем символы
        typewriterElement.textContent = currentName.substring(0, charIndex + 1);
        charIndex++;
    }

    // Скорость печати/стирания
    let typeSpeed = isDeleting ? 50 : 100;

    // Если слово полностью напечатано
    if (!isDeleting && charIndex === currentName.length) {
        // Пауза перед стиранием
        typeSpeed = 10000; 
        isDeleting = true;
    } 
    // Если слово полностью стерт
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // Переходим к следующему имени
        nameIndex = (nameIndex + 1) % names.length; // Циклический переход
        // Небольшая пауза перед печатью нового имени
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Запускаем анимацию после загрузки
setTimeout(typeEffect, 1500); // 1.5 секунды после загрузки страницы
