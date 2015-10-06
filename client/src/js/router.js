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
  homePage = new HomePage(),
  greenPage = new GreenPage(),
  confirmPage = new ConfirmPage(),
  contactsPage = new ContactsPage(),
  inboxPage = new InboxPage(),
  messagePage = new MessagePage(),
  rsvpPage = new RsvpPage(),
  rsvpSelectPage = new RsvpSelectPage(),
  messageActionPage = new MessageActionPage();


var AppRouter = Router.extend({

  routes: {
    '': 'home',
    green: 'green',
    contacts: 'contacts',
    confirm: 'confirm',
    inbox: 'inbox',
    message: 'message',
    rsvp: 'rsvp',
    rsvpSelect: 'rsvpSelect',
    messageAction: 'messageActionPage'
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

  rsvp: function() {
    this.renderView(rsvpPage);
  },

  rsvpSelect: function() {
    this.renderView(rsvpSelectPage);
  },

  messageAction: function() {
    this.renderView(messageActionPage);
  }
});

module.exports = AppRouter;
