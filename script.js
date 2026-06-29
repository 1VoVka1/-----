document.addEventListener('DOMContentLoaded', () => {

    const profileContainer = document.querySelector('.profile-container');
    const linkButtons = document.querySelectorAll('.link-button');

    //1
    setTimeout(() => {
        profileContainer.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        profileContainer.style.opacity = '1';
        profileContainer.style.transform = 'translateY(0)';
    }, 100); 

    //2
    linkButtons.forEach((button, index) => {
        setTimeout(() => {
            button.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });

    //3
    linkButtons.forEach(button => {
        
        button.addEventListener('mouseenter', () => {
            requestAnimationFrame(() => {
                button.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                button.style.transform = 'scale(1.05)';
            });
        });

        button.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                button.style.transition = 'transform 0.3s ease-out';
                button.style.transform = 'scale(1)';
            });
        });

    });

});

//4
const typewriterElement = document.getElementById('typewriter');
const names = ['vovka31', '_Sirin_', 'StarkDragon', '_VoVka_']; 
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentName = names[nameIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentName.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentName.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentName.length) {
        typeSpeed = 10000; 
        isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

setTimeout(typeEffect, 1500);
