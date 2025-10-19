/* document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementsByClassName("navbar")[0];
    
    if (!navbar) {
        console.error("❌ Navbar element not found!");
        return;
    }
    
    console.log("✅ Sticky NavBar script loaded. Navbar found:", navbar);

    let lastScrollY = 0;
    let ticking = false;

    function updateNavbar(scrollPosition) {
        console.log("🔄 Processing scroll:", scrollPosition);
        
        if (scrollPosition > lastScrollY && scrollPosition > 50) {
            // Scrolling down
            console.log("⬇️ Scrolling down - hiding navbar");
            navbar.classList.remove('show');
            navbar.classList.add('hide');
        } else if (scrollPosition < lastScrollY) {
            // Scrolling up
            console.log("⬆️ Scrolling up - showing navbar");
            navbar.classList.remove('hide');
            navbar.classList.add('show');
        }
        
        lastScrollY = scrollPosition;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Try multiple ways to get scroll position
                const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
                console.log("🎯 Scroll detected! Position:", scrollY);
                updateNavbar(scrollY);
                ticking = false;
            });
            ticking = true;
        }
    }

    // Initial state
    navbar.classList.add('show');

    // Listen to ALL possible scroll events
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    
    // Also try to detect the actual scrolling element
    setTimeout(() => {
        const scrollableContainers = findScrollableContainers();
        scrollableContainers.forEach(container => {
            console.log(`🎯 Also listening to scroll on:`, container.element);
            container.element.addEventListener('scroll', onScroll, { passive: true });
        });
    }, 1000);

    console.log("✅ All scroll listeners attached");
});

// Helper function to find scrollable containers
function findScrollableContainers() {
    const elements = document.querySelectorAll('*');
    const scrollable = [];
    
    elements.forEach(el => {
        if (el === document || el === window) return;
        
        const style = window.getComputedStyle(el);
        const isScrollable = (
            style.overflowY === 'auto' || 
            style.overflowY === 'scroll' ||
            style.overflow === 'auto' ||
            style.overflow === 'scroll'
        );
        
        if (isScrollable && el.scrollHeight > el.clientHeight) {
            scrollable.push({
                element: el,
                tag: el.tagName,
                class: el.className,
                id: el.id
            });
        }
    });
    
    return scrollable;
} */