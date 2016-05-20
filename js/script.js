/**
  @author agonza05
  
  ToC
  
  1. Preloader
  2. Mobile menu
  3. Smooth menu scrolling
  
 **/

jQuery(function($){
	
	/* ----------------------- */
	/*      1. Preloader       */
	/* ----------------------- */
	
	jQuery(window).load(function() {	// Ensures the whole site is loaded
      $('.preloader-wrapper').fadeOut();			// Fades out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); 		// Fades out the white DIV that covers the whole website
      $('body').delay(100).css({'overflow':'visible'});	// Shows the website body
   });
   /* End preloader */
  
    /* ----------------------- */
	/*     2. Mobile menu      */
	/* ----------------------- */
  	
  	/* Menu icon appear in mobile view */
	jQuery(".button-collapse").sideNav({closeOnClick: true});
	
	/* ----------------------- */
	/*   3. Menu scrolling     */
	/* ----------------------- */
	
	//Menu scrolling when item selected

	// Cache selectors
	var lastId;
	topMenu = $(".menu-scroll");
	topMenuHeight = topMenu.outerHeight()+13;
	// All list items
	menuItems = topMenu.find("a");
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href");
	  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+15;
	  jQuery('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       {return this;};
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   };
	});
	/* End menu scrolling */
	
	/* ----------------------- */
	/*   4. Contact buttom     */
	/* ----------------------- */

});