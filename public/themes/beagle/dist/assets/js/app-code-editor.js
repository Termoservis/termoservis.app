/*!
 * Termoservis-beagle v1.0.0
 * https://termoservis.hr
 *
 * Copyright (c) 2018 Termoservis
 * Licensed under the https://raw.githubusercontent.com/Termoservis/termoservis.app/master/LICENSE.txt license
 */

var App = (function () {
  'use strict';

  App.codeEditor = function( ){

    /*Codemirror*/
    var code = $("#code1").html();
    code = code.replace(/&lt;/g, '<');
    code = code.replace(/&gt;/g, '>');
    console.log(code);

    var myCodeMirror = CodeMirror($('#console')[0], {
      lineNumbers: true,
      theme: 'monokai',
      value: code,
      mode:  "text/html",
      tabSize: 2
    });
    
    setTimeout(function(){
      myCodeMirror.refresh();
    },200);
    
  };

  return App;
})(App || {});
