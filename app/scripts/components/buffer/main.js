define([

  'lateralus'

  ,'./view'
  ,'text!./template.mustache'

], function (

  Lateralus

  ,View
  ,template

) {
  'use strict';

  var BufferComponent = Lateralus.Component.extend({
    name: 'buffer'
    ,View: View
    ,template: template
  });

  return BufferComponent;
});
