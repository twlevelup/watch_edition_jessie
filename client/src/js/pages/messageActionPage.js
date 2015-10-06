'use strict';

var Page = require('../framework/page');

var MessageactionPage = Page.extend({

  id: 'messageaction-page',

  template: require('../../templates/pages/messageactionPage.hbs'),

  buttonEvents: {
    right: 'goToRsvpSelect',
    left: 'goToMessage',
    top: '',
    bottom: '',
    face: ''
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  },

  goToMessage: function() {
    global.App.navigate('message');
  },

  goToRsvpSelect: function() {
    global.App.navigate('rsvpSelect');
  },

});

module.exports = MessageactionPage;
