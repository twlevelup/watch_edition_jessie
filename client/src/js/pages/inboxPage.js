'use strict';

var Page = require('../framework/page');

var MsgView = require('../views/msg');

var InboxPage = Page.extend({

  id: 'inbox-page',

  highlightedMessageIndex: 0,

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
    this.initializeMessages();
  },

  showMessage: function() {
    global.App.myMessage = this.messages[this.highlightedMessageIndex];
    global.App.navigate('message');
  },

  scrollUp: function() {
    this.highlightedMessageIndex -= 1;
    if (this.highlightedMessageIndex <= 0) {
      this.highlightedMessageIndex = 0;
    }

    $('#watch-face').animate({scrollTop: '-=90px'});
    this.render();
  },

  scrollDown: function() {
    this.highlightedMessageIndex += 1;
    if (this.highlightedMessageIndex >= this.messages.length) {
      this.highlightedMessageIndex = this.messages.length - 1;
    }

    $('#watch-face').animate({scrollTop: '+=90px'});
    this.render();
  },

  initializeMessages: function() {
    this.messages.push({subject: 'Free Food!', message: 'Come to the USYD quad for free food', date: '15/09/15', rsvp: 'unknown', read: false, type: 'info'});
    this.messages.push({subject: 'Event Mes 1', message: 'Mock Message Mock Message Mock Message Mock Message ', date: '14/09/15', rsvp: 'unknown', read: false, type: 'event'});
    this.messages.push({subject: 'Info Mes 1', message: 'Mock Message Mock Message Mock Message Mock Message', date: '14/09/15', rsvp: 'unknown', read: false, type: 'info'});
    this.messages.push({subject: 'Info Mes 2', message: 'Mock Message Mock Message Mock Message Mock Message', date: '13/09/15', rsvp: 'unknown', read: false, type: 'info'});
    this.messages.push({subject: 'Event Mes 1', message: 'Mock Message Mock Message Mock Message Mock Message', date: '12/09/15', rsvp: 'unknown', read: true, type: 'info'});
    this.messages.push({subject: 'Event Mes 2', message: 'Mock Message Mock Message Mock Message Mock Message', date: '11/09/15', rsvp: 'unknown', read: true, type: 'event'});
    this.messages.push({subject: 'Info Mes 3', message: 'Mock Message Mock Message Mock Message Mock Message', date: '10/09/15', rsvp: 'unknown', read: true, type: 'info'});
    this.messages.push({subject: 'Info Mes 4', message: 'Mock Message Mock Message Mock Message Mock Message', date: '09/09/15', rsvp: 'unknown', read: true, type: 'info'});
    this.messages.push({subject: 'Info Mes 5', message: 'Mock Message Mock Message Mock Message Mock Message', date: '08/09/15', rsvp: 'unknown', read: true, type: 'info'});
    this.messages.push({subject: 'Info Mes 6', message: 'Mock Message Mock Message Mock Message Mock Message', date: '07/09/15', rsvp: 'unknown', read: true, type: 'info'});
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  render: function() {

    this.$el.html(this.template());

    if (this.messages.length === 0) {
      this.$el.html(this.templateEmptyInbox());
      return this;
    }

    var messagesHTML = document.createDocumentFragment();

    for (var i = 0; i < this.messages.length; i += 1) {
      var highlighted = false;
      if (i === this.highlightedMessageIndex) {
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
