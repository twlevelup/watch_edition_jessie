'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  GreenPage = require('./pages/greenPage'),
  ConfirmPage = require('./pages/confirmPage'),
  confirmPage = new ConfirmPage(),
  homePage = new HomePage(),
  greenPage = new GreenPage(),
  InboxPage = require('./pages/inboxPage'),
  contactsPage = new ContactsPage(),
  inboxPage = new InboxPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    green: 'green',
    contacts: 'contacts',
    confirm: 'confirm',
    inbox: 'inbox'
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
  }

});

module.exports = AppRouter;
