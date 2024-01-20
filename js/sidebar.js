window.onload = () => {
    const menu_Button = document.querySelector('.hamburger');
    const mobile_Menu = document.querySelector('.mobile_sidebar_nav')
    menu_Button.addEventListener('click', () => {
        menu_Button.classList.toggle('is-active');
        mobile_Menu.classList.toggle('is-active-sec');
        brightnessHandler.classList.toggle('brightness_toggle')
    })
}