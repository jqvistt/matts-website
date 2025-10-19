img1Caption = "<ul><li>Speedometer</li><li>2x Front led lights</li><li>horn</li><li>Temperature gauge</li></ul>";
img2Caption = "<ul><li>Ignition with 2x keys</li><li>Low profilelight switch</li><li>Front Blinkers</li></ul>";
img3Caption = "<ul><li>Conntector cabels</li><li>2x Back led lights</li><li>Lisence plate light</li><li>Back brake light</li></ul>";
img4Caption = "<ul><li> Connector cabels </li>";
img5Caption = "<ul><li> Connector cabels </li></ul>";
img6Caption = "<ul><li>Lisence plate light in use</li><li>Back brake light in use</li><li>back blinkers</li></ul>";

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        if (dots[slideIndex-1]) {
            dots[slideIndex-1].className += " active";
        }
        if (captionText && dots[slideIndex-1]) {

            switch(dots[slideIndex-1]) {
                case dots[0]:
                    captionText.innerHTML = img1Caption;
                    break;
                case dots[1]:
                    captionText.innerHTML = img2Caption;
                    break;
                case dots[2]:
                    captionText.innerHTML = img3Caption;
                    break;
                case dots[3]:
                    captionText.innerHTML = img4Caption;
                    break;
                case dots[4]:
                    captionText.innerHTML = img5Caption;
                    break;  
                case dots[5]:
                    captionText.innerHTML = img6Caption;
                    break;
                default:
                    captionText.innerHTML = "No caption available";
                    break;
            }
        }
    }

    window.toggleFullscreen = function(btn) {
        const container = btn.closest('.imgcontainer');
        const visibleSlide = container.querySelector('.mySlides[style*="display: block"]');
        if (visibleSlide) {
            const img = visibleSlide.querySelector('img');
            if (img) {
                if (!document.fullscreenElement) {
                    img.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
            }
        }
    };
});
