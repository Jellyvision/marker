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

  /**
   * A suggested pattern for Lateralus apps is to have a single container
   * component that contains all other UI components within the application.
   * This component should be concerned with top-level presentation logic.
   */
  var ContainerComponent = Lateralus.Component.extend({
    name: 'container'
    ,View: View
    ,template: template

    // The container component's primary responsibility is to initialize other
    // subcomponents.
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
