'use strict';

var Page = require('../framework/page');

var ConfirmPage = Page.extend({

  id: 'confirm-page',

  template: require('../../templates/pages/confirmPage.hbs'),

  buttonEvents: {
    right: 'goToGreenPage',
    left: '',
    top: '',
    bottom: '',
    face: ''
  },

  goToGreenPage: function() {
     global.App.navigate('green');
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

module.exports = ConfirmPage;
