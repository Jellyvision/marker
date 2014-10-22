define([

  'lateralus'
  ,'underscore'

  ,'text!./template.mustache'

], function (

  Lateralus
  ,_

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

      // Wait for initialization to complete and cause a first-time render to
      // occur
      _.defer(this.updateMarkdown.bind(this));
    }

    ,onKeyupInput: _.debounce(function () {
      this.updateMarkdown();
    }, 100)

    ,updateMarkdown: function () {
      this.emit('change:markdown', this.$input.val());
    }
  });

  return BufferComponentView;
});
