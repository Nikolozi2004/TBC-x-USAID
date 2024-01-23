window.onload = () => {
    const menu_Button = document.querySelector('.hamburger');
    const mobile_Menu = document.querySelector('.mobile_sidebar_nav')
    menu_Button.addEventListener('click', () => {
        menu_Button.classList.toggle('is-active');
        mobile_Menu.classList.toggle('is-active-sec');
    });
};

// const brightnessHandler = () => {
//     const brightnessDown = document.getElementById('body');
//     if (brightnessDown.length > 0) {
//         brightnessDown[0].classList.toggle('123123');
//     } else {
//         console.log('Error: Element not found');
//     }
// };

// brightnessHandler();
