(function($) {$(function() {

// jQuery Functions will go here

	$(document).ready(function(){

		$('#slideshow').hide();

		$(window).load(function() {
			$('#slideshow').show().css({'opacity':'0'});
			$('#slideshow').animate({ opacity : "1"}, 1000);
			var intervalID = setInterval(function(){
				slideSwitch();
			}, 12000)
		});


		if (typeof (fancybox) !== "undefined") {
			$('.fancybox-media').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',
				helpers : {
					media : {}
				}
			});			
		}



		// hide section pages
		$('section#pages article').hide();

		// add "x" close button
		$('section#pages article').prepend('<a class="close">X</a>')

		// function for close button to close current section page
		$('a.close').click(function(e){
			e.preventDefault;
			$(this).parent('article').fadeOut('slow').removeClass('active');
			$('ul#main li').removeClass('active');
		})

		// function to scroll to page top
		function top() {
			$('html,body').animate({ scrollTop: '0px'});
			return false;
		}

		$('ul#main li a').click(function(e){
			// prevent default behavior
			e.preventDefault;

			// fetch page ID to slidedown
			var page_id = $(this).attr("href");

			// slide up current page & remove active class
			$('section#pages article.active').fadeOut('slow');
			$('section#pages article.active').removeClass('active');
			$('ul#main li').removeClass('active');

			// slide down page
			$('article' + page_id).delay(400).fadeIn('slow', function() {
				$('nav#main').focus();
			});

			// add classes
			$('article' + page_id).addClass('active');
			$(this).parent().addClass('active');

			return false;
		})


		// hide building block footer
		$('#footer').hide();

		// slide up footer building block on click
		$('div.building-block a').click(function(e){
			e.preventDefault;

			// slideup if button doesn't have down class
			if ( !($(this).hasClass('down')) ) {

			$('.push, #footer-out').animate({'height' : '165px'});

			$('div#main').animate({'margin' : '0 auto -145px'});

			$('#footer').fadeIn('slow');

			$('html,body').animate({ scrollTop: $(document).height() }, 1500);

			$(this).addClass('down');

			return false;

			} else {

			$('#footer').fadeOut('slow');

			$('.push, #footer-out').animate({'height' : '25px'});

			$('div#main').animate({'margin' : '0 auto 0'});

			$(this).removeClass('down');				
			}

			return false;

		})

		$('button#prev').click(function(){
		slideSwitchPrev();
		window.clearInterval(intervalID);
		intervalID = setInterval(function(){
			slideSwitch();
		}, 12000)
		})

		$('button#next').click(function(){
		slideSwitch();
		window.clearInterval(intervalID);
		intervalID = setInterval(function(){
			slideSwitch();
		}, 12000)
		})

		function slideSwitchPrev() {
			var $active = $('#slideshow IMG.active');

		  if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

		  // use this to pull the images in the order they appear in the markup
		  var $next =  $active.prev().length ? $active.prev()
		      : $('#slideshow IMG:last');

		  // uncomment the 3 lines below to pull the images in random order

		  // var $sibs  = $active.siblings();
		  // var rndNum = Math.floor(Math.random() * $sibs.length );
		  // var $next  = $( $sibs[ rndNum ] );

		  $active.addClass('last-active');

		  $next.css({opacity: 0.0})
		      .addClass('active')
		      .animate({opacity: 1.0}, 1000, function() {
		          $active.removeClass('active last-active');
		      });
		}

		function slideSwitch() {
		  var $active = $('#slideshow IMG.active');

		  if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

		  // use this to pull the images in the order they appear in the markup
		  var $next =  $active.next().length ? $active.next()
		      : $('#slideshow IMG:first');

		  // uncomment the 3 lines below to pull the images in random order

		  // var $sibs  = $active.siblings();
		  // var rndNum = Math.floor(Math.random() * $sibs.length );
		  // var $next  = $( $sibs[ rndNum ] );

		  $active.addClass('last-active');

		  $next.css({opacity: 0.0})
		      .addClass('active')
		      .animate({opacity: 1.0}, 1000, function() {
		          $active.removeClass('active last-active');
		      });
		}
	}); // end $(document).ready

});})(jQuery);