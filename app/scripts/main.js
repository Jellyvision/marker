/*global require*/
/**
 * This file is used for configuring RequireJS and initiating the boot process.
 */
'use strict';

// This require.config call specifies the locations for all of the dependency
// files.
require.config({
  baseUrl: '/'
  ,shim: {
    bootstrap: {
      deps: ['jquery']
      ,exports: 'jquery'
    }
  }
  ,paths: {
    text: 'bower_components/requirejs-text/text'
    ,jquery: 'bower_components/jquery/dist/jquery'
    ,backbone: 'bower_components/backbone/backbone'
    ,underscore: 'bower_components/lodash/dist/lodash'
    ,mustache: 'bower_components/mustache/mustache'
    ,marked: 'bower_components/marked/lib/marked'
  }
  ,packages: [{
    // Lataralus is designed to be a loaded as an AMD package.
    name: 'lateralus'
    ,location: 'bower_components/lateralus/scripts'
    ,main: 'lateralus'
  }, {
    name: 'marker'
    ,location: 'scripts'
    ,main: 'marker'
  }, {
    // It is recommended that you load your components as AMD packages to make
    // them easier to reuse in other applications.
    name: 'marker.component.container'
    ,location: 'scripts/components/container'
  }, {
    name: 'marker.component.buffer'
    ,location: 'scripts/components/buffer'
  }, {
    name: 'marker.component.rendered-output'
    ,location: 'scripts/components/rendered-output'
  }]
});

require([

  'marker'

], function (

  Marker

) {
  // The require() callback shouldn't need anything more than this.  All other
  // logic belongs in the Marker constructor.
  //
  // Importantly, the Marker constructor must receive one parameter: The
  // element that contains the entirely of the app's DOM.
  window.marker = new Marker(document.getElementById('marker'));
});
