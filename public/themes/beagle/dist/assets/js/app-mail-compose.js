/*!
 * Termoservis-beagle v1.0.0
 * https://termoservis.hr
 *
 * Copyright (c) 2018 Termoservis
 * Licensed under the https://raw.githubusercontent.com/Termoservis/termoservis.app/master/LICENSE.txt license
 */

var App = (function () {
  'use strict';

  App.mailCompose = function( ){

    //Select2 Tags
    $(".tags").select2({tags: 0,width: '100%'});

   //Summernote
    $('#email-editor').summernote({
      height: 200
    });
    
  };

  return App;
})(App || {});
