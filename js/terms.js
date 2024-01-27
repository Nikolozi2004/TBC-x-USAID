const toggleClassz = (element, className) => element.classList.toggle(className);

const termsandConditions = document.querySelector('.terms-and-conditions');
const termsConditions = document.querySelector('.terms-conditions');
termsandConditions.addEventListener('click', () => {
    toggleClassz(termsConditions, 'is-active-third');
});

const back = document.querySelector('.back');
back.addEventListener('click', () => {
    toggleClassz(termsConditions, 'is-active-third');
});
