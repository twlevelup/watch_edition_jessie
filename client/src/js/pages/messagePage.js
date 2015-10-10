'use strict';

var Page = require('../framework/page');

var MessagePage = Page.extend({

  template: require('../../templates/pages/messagePage.hbs'),

  buttonEvents: {
    right: 'testTMP',
    left: 'goToInbox',
    top: '',
    bottom: '',
    face: ''
  },

  initialize: function() {
  },

  goToInbox: function() {
    global.App.navigate('inbox');
  },

  testTMP: function() {
    global.App.mailbox.splice(global.App.myMessageIndex, 1);
    global.App.myMessageIndex = global.App.myMessageIndex - 1; // XXX check with PO
    if (global.App.myMessageIndex < 0) {
      global.App.myMessageIndex = 0; // XXX check with PO
    }

    global.App.navigate('inbox');
  },

  render: function() {
    this.$el.html(this.template(global.App.myMessage));

    return this;

  }

});

module.exports = MessagePage;
