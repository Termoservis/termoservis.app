/*!
 * Termoservis-beagle v1.0.0
 * https://termoservis.hr
 *
 * Copyright (c) 2018 Termoservis
 * Licensed under the https://raw.githubusercontent.com/Termoservis/termoservis.app/master/LICENSE.txt license
 */

var App = (function () {
  'use strict';

  App.booking = function( ){

    //Js Code
    $(".datetimepicker").datetimepicker({
    	autoclose: true,
    	componentIcon: '.mdi.mdi-calendar',
    	navIcons:{
    		rightIcon: 'mdi mdi-chevron-right',
    		leftIcon: 'mdi mdi-chevron-left'
    	}
    });
    
    //Select2
    $(".select2").select2({
      width: '100%'
    });
    
    //Select2 tags
    $(".tags").select2({tags: true, width: '100%'});

    //Bootstrap Slider
    $('.bslider').bootstrapSlider();
    
  };

  return App;
})(App || {});
