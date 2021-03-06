'use strict';

var Page = require('../framework/page');

var MessageActionPage = Page.extend({

  id: 'messageaction-page',
  selectedPage: 0,
  selectablePages: ['rsvpSelect', 'discardconfirm'],

  template: require('../../templates/pages/messageActionPage.hbs'),

  buttonEvents: {
    right: 'goToSelectedPage',
    left: 'goToMessage',
    top: 'scrollUp',
    bottom: 'scrollDown',
    face: ''
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  },

  goToSelectedPage: function() {
    global.App.navigate(this.selectablePages[this.selectedPage]);
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
  },

  goToMessage: function() {
    global.App.navigate('message');
  }

  /*goToRsvpSelect: function() {
    global.App.navigate('rsvpSelect');
  },*/

});

module.exports = MessageActionPage;
