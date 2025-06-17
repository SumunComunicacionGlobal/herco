$("#open-filters").click(function (e) {
  e.stopPropagation();
  $("#sh-products-subcategory").toggleClass("is-open");
  if ($(window).width() < 769) {
    $("body").addClass("mm--open");
  }
});

$('#close-aside-mobile').click(function (e) {
  if ($("#sh-products-subcategory").toggleClass('is-open')) {
    $("#sh-products-subcategory").removeClass("is-open");
    $("body").removeClass("mm--open");
  }
});

//add to cart buttom 
$('.add-to-cart-btn').click(function (){
  $(this).addClass('added');
});

//read more dropdown testimonial 
$('.readmore').on('click', function(){
  $(this).toggleClass('closed').siblings('.showmore-content').slideToggle(300);
  if ($(this).hasClass('closed')) {
    $(this).text('Leer menos');
  }
  else if ($(this)) {
    $(this).text('Leer más');
  }
});

//progress bar cart & checkout
setTimeout(function(){
  $('.checkout #step2').addClass('active');
  $('.thanks #step3').addClass('active');
}, 600);
$('.thanks #step2').addClass('active');


// List & Grid view list products
listButton = $('button.list-view');
gridButton = $('button.grid-view');
wrapper = $('div.sh-products__grid');

listButton.on('click', function () {
  gridButton.removeClass('active');
  listButton.addClass('active');
  wrapper.removeClass('sh-products__grid').addClass('sh-products__list animation');

});

gridButton.on('click', function () {
  listButton.removeClass('active');
  gridButton.addClass('active');
  wrapper.removeClass('sh-products__list').addClass('sh-products__grid');

});

// sh-nav on desktop -> products mega menu
$(".sh-nav-products--categories > li").hover(function() {
  $('.hover').removeClass('hover');
  $(this).addClass("hover");
});

$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('.sh-top-nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
        navbar.addClass("scrollDown");
      }
        else if (c > currentScrollTop && !(a = 0 )) {
        navbar.removeClass("scrollDown");
      }
      c = currentScrollTop;
  });
  
});


// Dropdown

( function( $ ) {
	const dropdownContainer = $( '.dropdown' );

	// Toggles the sub-menu when dropdown toggle button clicked
	dropdownContainer.find( '.dropdown-btn' ).click( function( e ) {
		e.preventDefault();
		$( this ).toggleClass( 'dropdown-open' );

		//$( this ).nextAll( 'div' ).contents().unwrap();
		$( this ).nextAll( '.dropdown-content' ).slideToggle( 300 );

		// jscs:disable
		$( this ).attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false'
			? 'true' : 'false' );
		// jscs:enable
	} );

}( jQuery ) );

//C 
$('#closeSaveCart').click(function (){
  $('.dropdown-content').slideToggle( 300 );
});

$('#sh-nav-trigger').click(function () {
  $('#sh-nav').toggleClass('sh-nav--is-open');
  $('body').toggleClass('no-scroll');
});

$(document).ready(function () {
  // Añade el botón de toggle si no existe
  $('a.sh-nav-has-submenu, span.sh-nav-has-submenu').each(function () {
    var $link = $(this);
    if ($link.next('.submenu-toggle-btn').length === 0) {
      $link.after('<button class="submenu-toggle-btn" aria-expanded="false" aria-label="Abrir submenú" type="button"><i class="icon icon-right-open"></i></button>');
    }
  });

  // Evento para abrir/cerrar el submenú al hacer click en el botón
  $('.submenu-toggle-btn').on('click', function (e) {
    e.preventDefault();
    var $btn = $(this);
    var $parentLi = $btn.closest('li');
    var $submenu = $parentLi.children('ul').first();

    // Alterna la clase para mostrar/ocultar el submenú
    $parentLi.toggleClass('submenu-open');

    // Alterna el aria-expanded
    var expanded = $btn.attr('aria-expanded') === 'true';
    $btn.attr('aria-expanded', !expanded);
    $btn.toggleClass('open');

    // Añade el título solo si no existe ya
    if ($submenu.length && $submenu.find('.back-submenu__toggle').length === 0) {
      // Obtiene el texto del enlace padre
      var label = $parentLi.children('a, span').first().text();
      // Crea el <li> de título
      var $titleLi = $('<li class="back-submenu__toggle">' + label + '</li>');
      // Al hacer click en el título, cierra el submenú y elimina el título
      $titleLi.on('click', function () {
        $parentLi.removeClass('submenu-open');
        setTimeout(function () {
          $titleLi.remove();
        }, 300); // igual que la transición CSS si tienes
      });
      // Inserta el <li> al principio del submenú
      $submenu.prepend($titleLi);
    }
  });
});