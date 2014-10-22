define([

  'lateralus'

  ,'marker.component.container'

], function (

  Lateralus

  ,ContainerComponent

) {
  'use strict';

  /**
   * Lateralus, as a framework, requires you to inherit the `Lateralus`
   * constructor with `Lateralus.beget()`.  This class acts as a ringleader for
   * the application and should primarily be concerned with:
   *
   * * Initializing the top-level container component
   * * Providing general-use utilities to rest of the app
   *
   * All Marker Components and their Views have a reference to the instantiated
   * Marker class via `this.lateralus`.
   * @param {Element} el
   * @extends {Lateralus}
   * @constuctor
   */
  var Marker = Lateralus.beget(function () {
    Lateralus.apply(this, arguments);

    // Because the Lateralus constructor was called above, this object has a
    // reference to the application element as `this.el`.
    this.addComponent(ContainerComponent, { el: this.el });
  });

  return Marker;
});
