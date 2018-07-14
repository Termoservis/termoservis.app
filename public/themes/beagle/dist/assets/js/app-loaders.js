/*!
 * Termoservis-beagle v1.0.0
 * https://termoservis.hr
 *
 * Copyright (c) 2018 Termoservis
 * Licensed under the https://raw.githubusercontent.com/Termoservis/termoservis.app/master/LICENSE.txt license
 */

var App = (function () {
  'use strict';
  
  App.loaders = function( ){

    //Show loading class toggle
    function toggleLoader(){
      $('.toggle-loading').on('click',function(){
        var parent = $(this).parents('.widget, .card');

        if( parent.length ){
          parent.addClass('be-loading-active');

          setTimeout(function(){
            parent.removeClass('be-loading-active');
          }, 3000);
        }
      });
    }


    //Loader show
    toggleLoader();

  };

  return App;
})(App || {});
