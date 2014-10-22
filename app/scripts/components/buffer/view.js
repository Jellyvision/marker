define([

  'lateralus'
  ,'underscore'
  ,'marked'

  ,'text!./template.mustache'

], function (

  Lateralus
  ,_
  ,marked

  ,template

) {
  'use strict';

  var BufferComponentView = Lateralus.Component.View.extend({
    template: template

    ,events: {
      'keyup .input': 'onKeyupInput'
    }

    /**
     * @param {Object} opts
     */
    ,initialize: function () {
      this._super('initialize', arguments);
      _.defer(this.updateMarkdown.bind(this));
    }

    ,onKeyupInput: _.debounce(function () {
      this.updateMarkdown();
    }, 100)

    ,updateMarkdown: function () {
      var markdown = marked(this.$input.val());
      this.emit('change:markdown', markdown);
    }
  });

  return BufferComponentView;
});
