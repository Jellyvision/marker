define([

  'lateralus'

  ,'marker.component.container'

], function (

  Lateralus

  ,ContainerComponent

) {
  'use strict';

  /**
   * @param {Element} el
   * @constuctor
   */
  var Marker = Lateralus.beget(function () {
    Lateralus.apply(this, arguments);

    this.addComponent(ContainerComponent, { el: this.el });
  });

  return Marker;
});
