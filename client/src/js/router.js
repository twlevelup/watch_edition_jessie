'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  GreenPage = require('./pages/greenPage'),
  ConfirmPage = require('./pages/confirmPage'),
  confirmPage = new ConfirmPage(),
  greenPage = new GreenPage(),
  homePage = new HomePage(),
  contactsPage = new ContactsPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    green: 'green',
    contacts: 'contacts',
    confirm: 'confirm'
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
  }

});

module.exports = AppRouter;
