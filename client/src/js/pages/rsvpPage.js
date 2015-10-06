'use strict';

var Page = require('../framework/page');

var RsvpPage = Page.extend({

  id: 'rsvp-page',

  template: require('../../templates/pages/rsvpPage.hbs'),

  buttonEvents: {
    right: '',
    left: '',
    top: '',
    bottom: '',
    face: ''
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = RsvpPage;
