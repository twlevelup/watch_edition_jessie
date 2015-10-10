'use strict';

var Page = require('../framework/page');

var RsvpSelectPage = Page.extend({

  id: 'rsvpselect-page',
  selectedPage: 0,
  selectablePages: ['inbox', 'discard'],

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
  }

});

module.exports = RsvpSelectPage;
