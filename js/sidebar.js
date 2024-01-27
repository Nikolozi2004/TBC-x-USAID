window.onload = () => {
    const toggleClass = (element, className) => element.classList.toggle(className);

    const menu_Button = document.querySelector('.hamburger');
    const mobile_Menu = document.querySelector('.mobile_sidebar_nav');

    menu_Button.addEventListener('click', () => {
        toggleClass(menu_Button, 'is-active');
        toggleClass(mobile_Menu, 'is-active-sec');
    });

};

