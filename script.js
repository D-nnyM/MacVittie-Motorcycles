
const footerContainer = document.querySelector(".footer-container");
const footerText = document.querySelector(".macvittie-motorcycles-text");
const footerWidth = footerContainer.offsetWidth;
const footerContentSize = footerText.offsetWidth;

const footerTextLetterSpacing = footerText.style.letterSpacing.slice(-4);

footerContainer.addEventListener('resize', () => {
    while (footerWidth > footerContentSize) {
        // footerTextLetterSpacing = ;
    }

})


