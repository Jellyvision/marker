define([

  'lateralus'

  ,'marker.component.container'

], function (

  Lateralus

  ,MarkerContainer

) {
  'use strict';

  /**
   * @param {Element} el
   * @constuctor
   */
  var Marker = Lateralus.beget(function () {
    Lateralus.apply(this, arguments);

    this.addComponent(MarkerContainer, { el: this.el });
  });

  return Marker;
});
