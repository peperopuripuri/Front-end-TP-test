const aside = document.querySelector('aside');
const button = document.querySelector('button');
const p = document.querySelector('p');

const movePTagUnderButton = () => {
    if (window.innerWidth <= 400) {
        if (!button.contains(p)) {
            button.parentNode.insertBefore(p, button.nextSibling);
        }
    } else if (p.previousSibling === button) {
        aside.insertBefore(p, button);
    }
};

movePTagUnderButton();
window.addEventListener('resize', movePTagUnderButton);
