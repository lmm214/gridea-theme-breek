(function($){
    "use strict";

    /* All Images Loaded */

	$(window).load(function(){ 

        var rtl = false;
        if( $('body').hasClass('rtl') ){
            rtl = true;
        }
        
        
		if($(document).width() > 767){
            var $grid = $('.enable-masonry .grid-posts div.articles:not(.fullcover)').masonry({
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

        $.viewImage({
            'target' : '.post-content img', //需要使用ViewImage的图片
            'exclude': '',    //要排除的图片
            'delay'  : 300                //延迟时间
        });

        var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
        var location_href = window.location.href.replace(parse_url,'$3');
        $('.post-excerpt a:not(:has(img)),.post-content a:not(:has(img)),.author-name a,#friends a.friend').hover(function() {
            var this_href = $(this).attr('href');
            var replace_href = this_href.replace(parse_url,'$3');
            if ( this_href != replace_href && location_href != replace_href){$(this).attr('target','_blank');}
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

        $('.lightbox').magnificPopup({
            mainClass: 'my-mfp-zoom-in',
            removalDelay: 300,
            closeMarkup: '<i title="%title%" class="mfp-close fa fa-times"></i>',
            fixedContentPos: true
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
        var bt;
        bt = $('#back-to-top');
        if ($(document).width() > 480) {
          $(window).scroll(function() {
            var st;
            st=$(window).scrollTop();
            if (st > 500) {
              return bt.css('display', 'block');
            } else {
              return bt.css('display', 'none');
            }
          });
          return bt.on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 500);
            return false;
          });
        }

	});

})(jQuery);