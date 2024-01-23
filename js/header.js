
// მოქმედება Scroll-ის შემდეგ ემატება header-ს კლასი სახელად scroll რა დროსაც ეძლევა background-ს opacity
// scroll კლასის ნახვა შესაძლებელია header.css-ში

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');


    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 5) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });

});



