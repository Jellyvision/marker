/*global require*/
'use strict';

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
    name: 'lateralus'
    ,location: 'bower_components/lateralus/scripts'
    ,main: 'lateralus'
  }, {
    name: 'marker'
    ,location: 'scripts'
    ,main: 'marker'
  }, {
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
  window.marker = new Marker(document.getElementById('marker'));
});
