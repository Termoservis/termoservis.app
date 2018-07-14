/*!
 * Termoservis-beagle v1.0.0
 * https://termoservis.hr
 *
 * Copyright (c) 2018 Termoservis
 * Licensed under the https://raw.githubusercontent.com/Termoservis/termoservis.app/master/LICENSE.txt license
 */

var App = (function () {
	'use strict';

  App.textEditors = function( ){

    //Summernote
    $('#editor1').summernote({
      height: 300
    });

  }

  return App;
})(App || {});
