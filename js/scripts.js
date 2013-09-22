$(document).ready(function(){
   $('.curtains').curtain();

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

});
