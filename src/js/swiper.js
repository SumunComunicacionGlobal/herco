

//	Open the menu.
//document.querySelector('a[href="#menu"]')
//    .addEventListener('click', (evnt) => {
//        menu.open();
//
//        //	Don't forget to "preventDefault" and to "stopPropagation".
//        evnt.preventDefault();
//        evnt.stopPropagation();
//});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const swiperProducts = new Swiper('.swiper-products', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 16,
    
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        680: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
        },
        1440: {
            slidesPerView: 6,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-products',
        prevEl: '.swiper-button-prev-products',
    }
});


const swiperTestimonials = new Swiper('.swiper-testimonials', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        680: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-testimonials',
        prevEl: '.swiper-button-prev-testimonials',
    }
});