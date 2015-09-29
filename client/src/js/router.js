'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  GreenPage = require('./pages/greenPage'),
  ConfirmPage = require('./pages/confirmPage'),

  MessagePage = require('./pages/messagePage'),
  InboxPage = require('./pages/inboxPage'),

  homePage = new HomePage(),
  greenPage = new GreenPage(),
  confirmPage = new ConfirmPage(),

  contactsPage = new ContactsPage(),
  inboxPage = new InboxPage(),


  messagePage = new MessagePage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    green: 'green',
    contacts: 'contacts',
    confirm: 'confirm',
    inbox: 'inbox',
    message: 'message'
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
  }

});

module.exports = AppRouter;
