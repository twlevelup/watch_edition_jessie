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
  },

  showMessage: function() {
    global.App.navigate('message');
  },

  scrollUp: function() {
    global.App.mailbox.selectPrevious();
    this.render();
  },

  scrollDown: function() {
    global.App.mailbox.selectNext();
    this.render();
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  render: function() {

    this.$el.html(this.template());

    if (global.App.mailbox.isEmpty()) {
      this.$el.html(this.templateEmptyInbox());
      return this;
    }

    var messagesHTML = document.createDocumentFragment();

    var messagesToShowRange = global.App.mailbox.getMessagesToShowRange();
    for (var i = messagesToShowRange[0]; i <= messagesToShowRange[1]; i += 1) {
      var highlighted = false;
      if (i === global.App.mailbox.selectedIndex) {
        highlighted = true;
      }

      var msgFragment = this.createMessageHTML(global.App.mailbox.at(i).toJSON(), i, highlighted);
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
