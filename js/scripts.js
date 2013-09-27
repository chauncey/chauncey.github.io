$(document).ready(function(){
  $window = $(window);
  $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object

      $(window).scroll(function() {
          var yPos = -($window.scrollTop() / $bgobj.data('speed'));

          // Put together our final background position
          var coords = '50% '+ yPos + 'px';

          // Move the background
          $bgobj.css({ backgroundPosition: coords });
      });
  });
 /*
	var scrollorama = $.scrollorama({
		blocks:'.curtains',
    enablePin:false
	});

  scrollorama.animate('#intro h1',{
    duration:100, property:'left', end:-1660
  });

  scrollorama.animate('#stuff ul li:nth-child(1)', {
    delay: 780, duration: 60, property:'opacity', start:0
  });

  scrollorama.animate('#stuff ul li:nth-child(2)', {
    delay: 800, duration: 60, property:'opacity', start:0
  });

  scrollorama.animate('#stuff ul li:nth-child(3)', {
    delay: 820, duration: 60, property:'opacity', start:0
  });

  scrollorama.animate('#stuff ul li:nth-child(4)', {
    delay: 840, duration: 60, property:'opacity', start:0
  });
  */

});
