'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  GreenPage = require('./pages/greenPage'),
  ConfirmPage = require('./pages/confirmPage'),
  MessagePage = require('./pages/messagePage'),
  InboxPage = require('./pages/inboxPage'),
  RsvpPage = require('./pages/rsvpPage'),
  RsvpSelectPage = require('./pages/rsvpSelectPage'),
  MessageActionPage = require('./pages/messageActionPage'),
  DiscardConfirmPage = require('./pages/discardconfirmPage'),
  homePage = new HomePage(),
  greenPage = new GreenPage(),
  confirmPage = new ConfirmPage(),
  contactsPage = new ContactsPage(),
  inboxPage = new InboxPage(),
  rsvpSelectPage = new RsvpSelectPage(),
  messageActionPage = new MessageActionPage(),
  messagePage = new MessagePage(),
  discardconfirmPage = new DiscardConfirmPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    green: 'green',
    contacts: 'contacts',
    confirm: 'confirm',
    inbox: 'inbox',
    rsvpSelect: 'rsvpSelect',
    messageAction: 'messageAction',
    message: 'message',
    discardconfirm: 'discardconfirm'
  },

  green: function() {
    this.renderView(greenPage);
  },

  confirm: function() {
   this.renderView(confirmPage);
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  inbox: function() {
    this.renderView(inboxPage);
  },

  message: function() {
    this.renderView(messagePage);
  },

  discardconfirm: function() {
    this.renderView(discardconfirmPage);
  },

  rsvpSelect: function() {
    this.renderView(rsvpSelectPage);
  },

  messageAction: function() {
    this.renderView(messageActionPage);
  }
});

module.exports = AppRouter;
