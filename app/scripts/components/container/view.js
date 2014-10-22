define([

  'lateralus'

  ,'text!./template.mustache'

], function (

  Lateralus

  ,template

) {
  'use strict';

  var ContainerComponentView = Lateralus.Component.View.extend({
    template: template

    /**
     * @param {Object} opts
     */
    ,initialize: function () {
      this._super('initialize', arguments);
    }
  });

  return ContainerComponentView;
});
