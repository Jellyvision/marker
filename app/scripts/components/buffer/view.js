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

      // Wait for app initialization to complete and cause a first-time
      // Markdown render to occur.
      _.defer(this.updateMarkdown.bind(this));
    }

    ,onKeyupInput: _.debounce(function () {
      this.updateMarkdown();
    }, 100)

    ,updateMarkdown: function () {
      // A powerful pattern is to have components emit messages (such as a
      // markdown change, in this case), so that other components in the app
      // can listen for and respond to them.
      //
      // .emit triggers an event on the Object that called it and the central
      // Lateralus subclass instance.  If the calling object is a View, the
      // event is also triggered on the Component to which is belongs.
      this.emit('change:markdown', this.$input.val());
    }
  });

  return BufferComponentView;
});
