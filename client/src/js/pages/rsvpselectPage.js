'use strict';

var Page = require('../framework/page');

var RsvpSelectPage = Page.extend({

  id: 'rsvpselect-page',
  selectedPage: 0,
  selectablePages: ['message', 'message'],

  template: require('../../templates/pages/rsvpSelectPage.hbs'),

  buttonEvents: {
    right: 'goToSelectedPage',
    left: '',
    top: 'scrollUp',
    bottom: 'scrollDown',
    face: ''
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  },

  goToSelectedPage: function() {
    global.App.navigate('message');
    if (this.selectedPage === 0) {
      global.App.mailbox.setRSVP(true);
    } else {
      global.App.mailbox.setRSVP(false);
    }
    this.selectedPage = 0;
  },

  scrollUp: function() {
    this.selectedPage = 0;
    $('#top').addClass('highlight2');
    $('#bottom').removeClass('highlight2');
  },

  scrollDown: function() {
    this.selectedPage = 1;
    $('#top').removeClass('highlight2');
    $('#bottom').addClass('highlight2');
  }

});

module.exports = RsvpSelectPage;
