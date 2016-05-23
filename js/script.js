/**
  @author agonza05
  
  ToC
  
  1. Preloader
  2. Mobile menu
  3. Smooth menu scrolling
  4. Scrollfire
  5. Load localize file
  
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
	$(".dropdown-button").dropdown({ hover: false });
	
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
	/*  4. Load localize file  */
	/* ----------------------- */
	
	var language = "es";
	loadJSON(language);
	
	/* ----------------------- */
	/*     5. Scrollfire       */
	/* ----------------------- */
	
	var options = [
			{selector: '#loc_discovery', offset: 150, callback: function() {
			Materialize.fadeInImage("#loc_discovery");
			} },
			{selector: '#loc_discovery_description', offset: 200, callback: function() {
			Materialize.fadeInImage("#loc_discovery_description");
			} },
			{selector: '#loc_design', offset: 150, callback: function() {
			Materialize.fadeInImage("#loc_design");
			} },
			{selector: '#loc_design_description', offset: 200, callback: function() {
			Materialize.fadeInImage("#loc_design_description");
			} },
			{selector: '#loc_development', offset: 150, callback: function() {
			Materialize.fadeInImage("#loc_development");
			} },
			{selector: '#loc_development_description', offset: 200, callback: function() {
			Materialize.fadeInImage("#loc_development_description");
			} },
			{selector: '#loc_we_build', offset: 80, callback: function() {
			Materialize.fadeInImage("#loc_we_build");
			} },
			{selector: '#show8', offset: 200, callback: function() {
			Materialize.fadeInImage("#show8");
			} },
			{selector: '#show9', offset: 200, callback: function() {
			Materialize.fadeInImage("#show9");
			} },
			{selector: '#show10', offset: 200, callback: function() {
			Materialize.fadeInImage("#show10");
			} },
			{selector: '#show11', offset: 200, callback: function() {
			Materialize.fadeInImage("#show11");
			} },
			{selector: '#show12', offset: 200, callback: function() {
			Materialize.fadeInImage("#show12");
			} },
			{selector: '#show13', offset: 200, callback: function() {
			Materialize.fadeInImage("#show13");
			} },
			{selector: '#show14', offset: 200, callback: function() {
			Materialize.fadeInImage("#show14");
			} },
			{selector: '#show15', offset: 200, callback: function() {
			Materialize.fadeInImage("#show15");
			} },
			{selector: '#loc_previous_work', offset: 80, callback: function() {
			Materialize.fadeInImage("#loc_previous_work");
			} },
			{selector: '#loc_work_together', offset: 100, callback: function() {
			Materialize.fadeInImage("#loc_work_together");
			} },
			{selector: '#loc_look_work', offset: 80, callback: function() {
			Materialize.fadeInImage("#loc_look_work");
			} },
			{selector: '#loc_thanks_contact', offset: 100, callback: function() {
			Materialize.fadeInImage("#loc_thanks_contact");
			} },
			{selector: '#loc_after_contact', offset: 100, callback: function() {
			Materialize.fadeInImage("#loc_after_contact");
			} },
			{selector: '#contact_form', offset: 200, callback: function() {
			Materialize.fadeInImage("#contact_form");
			} }
			];
	Materialize.scrollFire(options);

});

function loadJSON(lan){
		$.getJSON("localize/" + lan + ".json").done(function(text){
			i18n.translator.add(text);
		});
	};

function changeLanguage(){
	var localize = $(".localize");
	for (var i = 0; i < localize.size(); i++ ){
		$(localize[i]).text(i18n($(localize[i]).attr("id").substring(4)));
	};
};