'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',
  selectedPage: 0,
  selectablePages: ['confirm', 'inbox'],

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    top: 'scrollUp',
    right: 'goToSelectedPage',
    bottom: 'scrollDown',
    left: 'goToHomePage'
  },

  goToSelectedPage: function() {
    global.App.navigate(this.selectablePages[this.selectedPage]);
  },

  goToContacts: function() {
    global.App.navigate('contacts');
  },

  scrollUp: function() {
    this.selectedPage = 0;
    $('#top').addClass('highlight');
    $('#bottom').removeClass('highlight');
  },

  scrollDown: function() {
    this.selectedPage = 1;
    $('#top').removeClass('highlight');
    $('#bottom').addClass('highlight');
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = homeScreen;
