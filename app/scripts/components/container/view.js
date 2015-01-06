define([

  'lateralus'

  ,'text!./template.mustache'

], function (

  Lateralus

  ,template

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var ContainerComponentView = Lateralus.Component.View.extend({
    template: template

    /**
     * @param {Object} opts
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);
    }
  });

  return ContainerComponentView;
});
