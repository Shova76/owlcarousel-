$('.owl-carousel').owlCarousel({
  
   
        loop:true,
        margin:20,
        items:1,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        slideBy:2,
        nav:true,
        dots:true,
        autoplay:true,
    
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
               
            },
            425:{
                items:2,
            },
            600:{
                items:3
            },
            1000:{
                items:5,
                nav:false
              
            }
        }
       
    })
   