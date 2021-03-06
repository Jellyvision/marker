define([

  'lateralus'
  ,'underscore'
  ,'bower_components/codemirror/lib/codemirror'

  ,'text!./template.mustache'

  // Markdown mode files do not return anything
  ,'bower_components/codemirror/mode/markdown/markdown'

], function (

  Lateralus
  ,_
  ,CodeMirror

  ,template

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var BufferComponentView = Base.extend({
    template: template

    /**
     * @param {Object} opts
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);

      this.codeMirror = CodeMirror.fromTextArea(this.$input[0], {
        lineNumbers: true
        ,lineWrapping: true
        ,mode: 'markdown'
      });

      this.codeMirror.on('changes', this.onCodeMirrorChanges.bind(this));
    }

    // Wait for app initialization to complete and cause a first-time Markdown
    // render to occur.
    ,deferredInitialize: function () {
      this.updateMarkdown();
    }

    ,onCodeMirrorChanges: _.throttle(function () {
      this.updateMarkdown();
    }, 100)

    ,updateMarkdown: function () {
      // A powerful pattern is to have components emit messages (such as a
      // markdown change, in this case), so that other components in the app
      // can listen for and respond to them.
      //
      // .emit triggers an event on the Object that called it and the central
      // Lateralus subclass instance.  If the calling object is a View, the
      // event is also triggered on the Component to which it belongs.
      this.emit('change:markdown', this.codeMirror.getValue());
    }
  });

  return BufferComponentView;
});
