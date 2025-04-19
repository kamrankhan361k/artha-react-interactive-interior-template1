(function($){
  "use strict";
  
  // var navigation
  var navicon = jQuery('#nav-icon');
  var menublock = jQuery('#menu-block');
  var dropdwown = jQuery('.dropdown-container');
  var blockmain = jQuery('.block-main');
  var closeblock = jQuery('.block-main, .close-menu-block');
  var navdefault = jQuery( '.navbar-default-white' );
  var initmenu = jQuery('.init-menu');
  var Slink = jQuery('.scroll-link');



      // full block menu
    navicon.on("click", function(e) {
      menublock.toggle('slide', {
              direction: 'right'
          }, 600);
      blockmain.fadeToggle(300);
      initmenu.each(function(i){
          var t = $(this);
          setTimeout(function(){
      t.toggleClass('show-menu');
      }, (i+1) * 150);
        });
         });

    // block-main close block menu
    closeblock.on("click", function(e) {
      blockmain.fadeToggle(300);
    menublock.toggle('slide', {
              direction: 'right'
          }, 600);
      initmenu.each(function(i){
          var t = $(this);
          setTimeout(function(){
      t.toggleClass('show-menu');
      }, (i+1) * 150);
        });
     });

    // set active class if child menu has active
    $('.current-menu-item').closest('ul').siblings('a').addClass('actived');

})(jQuery)