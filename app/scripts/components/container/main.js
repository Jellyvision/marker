define([

  'lateralus'

  ,'marker.component.buffer'
  ,'marker.component.rendered-output'

  ,'./view'
  ,'text!./template.mustache'

], function (

  Lateralus

  ,BufferComponent
  ,RenderedOutputComponent

  ,View
  ,template

) {
  'use strict';

  var ContainerComponent = Lateralus.Component.extend({
    name: 'container'
    ,View: View
    ,template: template

    ,initialize: function () {
      this.bufferComponent = this.addComponent(BufferComponent, {
        el: this.view.$buffer[0]
      });

      this.renderedOutputComponent = this.addComponent(
          RenderedOutputComponent, {
        el: this.view.$renderedOutput[0]
      });
    }
  });

  return ContainerComponent;
});
