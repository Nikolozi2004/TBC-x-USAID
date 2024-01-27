// // Header scrollY effect

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const hamburger = document.querySelector('.hamburger');

    let prevScrollPosition = window.scrollY;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const screenWidth = window.innerWidth;

        scrollPosition > 5 ? header.classList.add('scroll') : header.classList.remove('scroll');

        if (screenWidth < 768 && scrollPosition > 84) {
            if (scrollPosition > prevScrollPosition) {
                header.classList.add('scroll-down');
                hamburger.classList.add('scroll-down');
            } else {
                header.classList.remove('scroll-down');
                hamburger.classList.remove('scroll-down');
            }
        } else if (screenWidth > 768) {
            header.classList.remove('scroll-down');
            hamburger.classList.remove('scroll-down');
        }

        prevScrollPosition = scrollPosition;
    });
});
