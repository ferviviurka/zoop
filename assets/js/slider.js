

     function currentSlide(event) {
        activatedEvent = document.getElementById('flexCarousel');
        switch (event) {
            case 1:
                activatedEvent.children[1].classList.remove('activeHover');
                activatedEvent.children[2].classList.remove('activeHover');
                activatedEvent.children[3].classList.remove('activeHover');
                activatedEvent.children[0].classList.add('activeHover');
                break;
            case 2:
                activatedEvent.children[0].classList.remove('activeHover');
                activatedEvent.children[2].classList.remove('activeHover');
                activatedEvent.children[3].classList.remove('activeHover');
                activatedEvent.children[1].classList.add('activeHover');
                break;
            case 3:
                activatedEvent.children[0].classList.remove('activeHover');
                activatedEvent.children[1].classList.remove('activeHover');
                activatedEvent.children[3].classList.remove('activeHover');
                activatedEvent.children[2].classList.add('activeHover');
                break;
            case 4:
                activatedEvent.children[0].classList.remove('activeHover');
                activatedEvent.children[1].classList.remove('activeHover');
                activatedEvent.children[2].classList.remove('activeHover');
                activatedEvent.children[3].classList.add('activeHover');
                break;
            default:
                break;
        }
    }


 function setCarousel() {
        var settings = {
            firstSlide: function() {
                element = document.querySelector("#flexCarousel .flexcarousel__item:nth-child(1)");
                element.classList.add('activeHover');
            },
            slide: function() {
                element = document.querySelector(".activeHover");
                if (element.nextElementSibling) {
                    element.nextElementSibling.classList.add('activeHover');
                    element.classList.remove('activeHover');
                } else {
                    element.classList.remove('activeHover');
                    settings.firstSlide();
                }
            },
            nextSlide: function() {
                clearInterval(interval);
                element = document.querySelector(".activeHover");
                if (element.nextElementSibling) {
                    element.nextElementSibling.classList.add('.activeHover');
                    console.log(element);
                    element.classList.remove('activeHover');
                } else {
                    element.classList.remove('activeHover');
                }
                interval = setInterval(settings.slide, 4000);
            },

            previousSlide: function() {
                clearInterval(interval);
                element = document.querySelector(".activeHover");
                if (element.previousElementSibling) {
                    element.previousElementSibling.classList.remove('.activeHover');
                    element.classList.add('activeHover');
                } else {
                    element.classList.remove('activeHover');
                    elemento = document.querySelector(".flexcarousel__item:last-child");
                    elemento.classList.add("ativo");
                }
                interval = setInterval(settings.slide, 4000);

            }
        }

        settings.firstSlide();

        document.getElementById("next").addEventListener("click", settings.nextSlide, false);
        document.getElementById("prev").addEventListener("click", settings.previousSlide, false);

        var interval = setInterval(settings.slide, 4000);

    }


    window.addEventListener("load", setCarousel, false);
    // const btnTutor = document.getElementById('tutor');
    // const getCarousel = document.getElementById('homeCarousel');
    // btnTutor.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     getCarousel.classList.add("online");
    // });
    
