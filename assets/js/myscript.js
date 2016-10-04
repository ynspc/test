$(document).ready(function(){
   $(".mobile-menu").click(function(){
      $("nav").toggleClass("dropdown-menu");
       if($(".header > .inner-nav> nav").hasClass("dropdown-menu"))
        {
            $(".header > .inner-nav > nav.dropdown-menu > ul").css({
                "background-color": "gray",
                "transition": "all 2s"   
            });
            $(".header > .inner-nav > nav.dropdown-menu > ul > li").css({ 
                "text-align": "center"
            });
        }
        else
        {
            $(".header > .inner-nav > nav > ul").css({
                "background-color": "transparent", 
                "transition": "none"   
            });
        }


   });
    
	$(".header > .inner-nav > nav > ul > li").
	    on("click", function(){
	         $(".header > .inner-nav > nav > ul > li").each(function(){
	            if($(this).hasClass("active")){
	                $(this).removeClass("active");
	            }
	    });
        $(this).addClass("active");
    });
});

$(window).resize(function(){
    var viewportwidth = $(window).width();
    if(viewportwidth > 1024)
        $(".header > .inner-nav > nav > ul").css({
                "background-color": "transparent", 
                "transition": "none"   
            });
    if(viewportwidth <= 1023)
         $(".header > .inner-nav > nav > ul").css({
                "background-color": "gray", 
                "transition": "none"   
            });
});