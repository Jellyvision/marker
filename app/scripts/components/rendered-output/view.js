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

  var RenderedOutputComponentView = Lateralus.Component.View.extend({
    template: template

    /**
     * This component view listens for change:markdown events and renders that
     * Markdown as HTML.
     * @param {Object} opts
     */
    ,initialize: function () {
      this._super('initialize', arguments);

      this.listenTo(
        this.lateralus
        ,'change:markdown'
        ,this.onChangeMarkdown.bind(this)
       );
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
