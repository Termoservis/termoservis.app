/*!
 * Termoservis-beagle v1.0.0
 * https://termoservis.hr
 *
 * Copyright (c) 2018 Termoservis
 */

var App = (function () {
  'use strict';

  App.ajaxLoader = function( ){

    var mprogress = new Mprogress();
    mprogress.start();
    setTimeout(function(){mprogress.end()}, 3000);

    $('.toggle-loader').click(function(){
    	mprogress.start();
    	setTimeout(function(){mprogress.inc()}, 1000);
    	setTimeout(function(){mprogress.end()}, 3000);
    });
    
  };

  return App;
})(App || {});