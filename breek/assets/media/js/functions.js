(function($){
    "use strict";

    /* All Images Loaded */

	$(window).load(function(){ 

        var rtl = false;
        if( $('body').hasClass('rtl') ){
            rtl = true;
        }
        
        
		if($(document).width() > 767){
            var $grid = $('.enable-masonry .grid-posts div.articles:not(.classic)').masonry({
                itemSelector: 'article',
                gutter: 0,
                horizontalOrder: true,
                isOriginLeft: !rtl,
            });

        }
        AOS.init({
            offset: 220,
            duration: 700,
            disable: window.innerWidth < 1024,
            easing: 'ease',
            once: true
        });

    });
    
    /* Dom Loaded */

	$(document).ready(function($){

        $.lately({
            'target' : '.lately'
        });

        var rtl = false;
        if( $('body').hasClass('rtl') ){
            rtl = true;
        }

        // Safari mobile fix
        $('#header nav ul.menu li.menu-item-has-children').attr('onClick', '');

        // Last submenu fix
        $('#header nav ul.menu > li.menu-item-has-children:last').addClass('last-menu-item');

        // Enable HTML5 form validation
        $('#commentform').removeAttr('novalidate');

        // Submenu on Mobile

        if( $(document).width() < 768){
			$('#header li.menu-item-has-children > a').on('click', function(e){
                $(this).parent().toggleClass('menu-open');
                e.preventDefault();
            });
		}
        

		// Counter animation

		$('.count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).data('total')
			}, {
				duration: 1500,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
        });


        // Custom Select and filters

		$('#header div.menu-mobile').on('click', function(){
			$('#header').toggleClass('menu-open');
		});

		$('.filters select').change(function(){
			var url = $(this).val();
			if(url)
				document.location = url;
        });

        // Back to top button

		$('#back-to-top').on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, 500);
			return false;
        });

        // Single Post copy button

        $(".permalink .copy").on('click', function(){
            $("#copy-link").select();
            document.execCommand('copy');
        });

		// Gallery Post Format

        $('.post-format-gallery .slick-slider').each(function(){
            var rtl = false;
            if( parseInt( $(this).data('rtl') ) > 0 ){
                rtl = true;
            }
            $(this).slick({
                cssEase: 'ease',
                fade: true,
                arrows: true,
                infinite: true,
                dots: false,
                autoplay: false,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                rtl: rtl,
            });
        });


        // Module: carousel

		$('.epcl-carousel').each(function(index, el) {
            var slides_to_show = parseInt( $(this).data('show') );
            var rtl = false;
            if( parseInt( $(this).data('rtl') ) > 0 ){
                rtl = true;
            }
			$(this).slick({
				cssEase: 'ease',
				fade: false,
				arrows: true,
				infinite: true,
				dots: false,
				autoplay: false,
                speed: 600,
                rtl: rtl,
				slidesToShow: slides_to_show,
				slidesToScroll: slides_to_show,
                responsive: [,
                    {
                        breakpoint: 1700,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 980,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                ]
			});
		});

		// Global: lightbox

		$('.lightbox').magnificPopup({
			mainClass: 'my-mfp-zoom-in',
			removalDelay: 300,
			closeMarkup: '<i title="%title%" class="mfp-close fa fa-times"></i>',
			fixedContentPos: true
        });

        // Global: related galleries

        $('.epcl-gallery').each(function() {
            var elem = $(this);
            elem.find('ul').magnificPopup({
                type: 'image',
                gallery:{
                    enabled: true,
                    arrowMarkup: '<i class="mfp-arrow mfp-arrow-%dir% fa fa-chevron-%dir%"></i>',
                    tCounter: '%curr% / %total%'
                },
                delegate: 'a',
                mainClass: 'my-mfp-zoom-in',
                removalDelay: 300,
                closeMarkup: '<span title="%title%" class="mfp-close">&times;</span>'
            });
        });

        // Gutenberg Gallery with lightbox
        $('.post-content,.post-excerpt').each(function() {
            var elem = $(this);
            elem.magnificPopup({
                type: 'image',
                gallery:{
                    enabled: true,
                    arrowMarkup: '<i class="mfp-arrow mfp-arrow-%dir% fa fa-chevron-%dir%"></i>',
                    tCounter: '%curr% / %total%'
                },
                delegate: "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']",
                mainClass: 'my-mfp-zoom-in',
                removalDelay: 300,
                closeMarkup: '<span title="%title%" class="mfp-close">&times;</span>'
            });
        });

        // Gutenberg Single Image with lightbox
        $('.wp-block-image').magnificPopup({
            type: 'image',
            gallery:{
                enabled: true,
                arrowMarkup: '<i class="mfp-arrow mfp-arrow-%dir% fa fa-chevron-%dir%"></i>',
                tCounter: '%curr% / %total%'
            },
            delegate: "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']",
            mainClass: 'my-mfp-zoom-in',
            removalDelay: 300,
            closeMarkup: '<span title="%title%" class="mfp-close">&times;</span>'
        });

	});

})(jQuery);