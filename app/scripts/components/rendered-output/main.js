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

  var RenderedOutputComponent = Lateralus.Component.extend({
    name: 'rendered-output'
    ,View: View
    ,template: template
  });

  return RenderedOutputComponent;
});
