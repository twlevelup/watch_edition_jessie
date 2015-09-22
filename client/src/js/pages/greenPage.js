'use strict';

var PageView = require('../framework/page');

var greenScreen = PageView.extend({

  id: 'green',

  template: require('../../templates/pages/green.hbs'),

  buttonEvents: {
    right: ' ',
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToHomePage'
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = greenScreen;
