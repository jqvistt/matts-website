document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > lastScrollY && window.scrollY > 50) {
                    // Scrolling down
                    navbar.classList.remove('show');
                    navbar.classList.add('hide');
                } else if (window.scrollY < lastScrollY) {
                    // Scrolling up
                    navbar.classList.remove('hide');
                    navbar.classList.add('show');
                }
                lastScrollY = window.scrollY;
                ticking = false;
            });
            ticking = true;
        }
    }

    // Initial state
    navbar.classList.add('show');

    window.addEventListener('scroll', onScroll);
});