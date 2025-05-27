

//	Open the menu.
document.querySelector('a[href="#menu"]')
    .addEventListener('click', (evnt) => {
        menu.open();

        //	Don't forget to "preventDefault" and to "stopPropagation".
        evnt.preventDefault();
        evnt.stopPropagation();
    });

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
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});