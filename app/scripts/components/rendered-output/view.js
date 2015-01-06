define([

  'lateralus'
  ,'marked'

  ,'text!./template.mustache'

], function (

  Lateralus
  ,marked

  ,template

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var RenderedOutputComponentView = Lateralus.Component.View.extend({
    template: template

    /**
     * This component view listens for change:markdown events and renders that
     * Markdown as HTML.
     * @param {Object} opts
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);

      this.listenFor('change:markdown', this.onChangeMarkdown.bind(this));
    }

    /**
     * @param {string} markdown
     */
    ,onChangeMarkdown: function (markdown) {
      this.$renderedMarkdown.html(marked(markdown));
    }
  });

  return RenderedOutputComponentView;
});
