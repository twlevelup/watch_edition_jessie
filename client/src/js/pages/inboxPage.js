'use strict';

var Page = require('../framework/page');

var MsgView = require('../views/msg');

var InboxPage = Page.extend({

  id: 'inbox-page',

  template: require('../../templates/pages/inboxPage.hbs'),
  templateEmptyInbox: require('../../templates/pages/inboxPageEmpty.hbs'),

  buttonEvents: {
    right: 'showMessage',
    left: 'goToHomePage',
    top: 'scrollUp',
    bottom: 'scrollDown',
    face: ''
  },

  initialize: function() {
    this.messages = [];
  },

  showMessage: function() {
    global.App.myMessage = this.messages[global.App.myMessageIndex];
    global.App.navigate('message');
  },

  scrollUp: function() {
    global.App.myMessageIndex -= 1;
    if (global.App.myMessageIndex <= 0) {
      global.App.myMessageIndex = 0;
    }

    this.render();
  },

  scrollDown: function() {
    global.App.myMessageIndex += 1;
    if (global.App.myMessageIndex >= this.messages.length) {
      global.App.myMessageIndex = this.messages.length - 1;
    }

    this.render();
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  render: function() {
    this.messages = global.App.mailbox;

    this.$el.html(this.template());

    if (this.messages.length === 0) {
      this.$el.html(this.templateEmptyInbox());
      return this;
    }

    var messagesHTML = document.createDocumentFragment();

    // Select 4 messages around the current highlighted message
    var indexStart = global.App.myMessageIndex - 1;
    if (indexStart < 0) {
      indexStart = 0;
    }

    var indexEnd = indexStart + 3;
    if (indexEnd >= this.messages.length) {
      indexEnd = this.messages.length - 1;
      indexStart = this.messages.length - 4;
    }

    if (indexStart < 0) {
      indexStart = 0;
    }

    for (var i = indexStart; i <= indexEnd; i += 1) {
      var highlighted = false;
      if (i === global.App.myMessageIndex) {
        highlighted = true;
      }

      var msgFragment = this.createMessageHTML(this.messages[i], i, highlighted);

      $(messagesHTML).append(msgFragment);
    }

    this.$el.append(messagesHTML);

    return this;
  },

  createMessageHTML: function(msg, index, highlighted) {
    msg.className = 'msg';
    msg.idName = 'msg' + index;
    msg.highlighted = highlighted;
    var view = new MsgView({
        model: msg
      });
    return view.render().el;
  }

});

module.exports = InboxPage;
