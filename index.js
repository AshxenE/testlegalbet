const fullTextOpener = document.querySelector('.arrow');
const openedText = document.querySelector('.opened-text');

let isActive = false;

fullTextOpener.addEventListener('click', () => {
    isActive = !isActive;
    if (isActive) {
        openedText.style.maxHeight = openedText.scrollHeight + "px";
        fullTextOpener.classList.add('rotate');
    } else {
        openedText.style.maxHeight = null;
        fullTextOpener.classList.remove('rotate');
    };
});
