$(document).ready(function() {
   
    /* For the new jquery / waypoints sticky navigation (WORKS -- HARSH TRANSITION) */
    /*
    var waypoint = new Waypoint({
      element: document.getElementById('js--section-features'),
      handler: function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
      }
    }) */
    
    
    var waypoints = $('#js--section-features').waypoint({
      handler: function() {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
      },
      context: '#section-header',
      offset: '50%'
    })
    
    /* For the sticky navigation (DEPRECATED 1.1.x)
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    }); */
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-achieves').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-achieves').offset().top}, 1000); 
    });
    
     $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
});