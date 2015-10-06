'use strict';

var Page = require('../framework/page');

var RsvpselectPage = Page.extend({

  id: 'rsvpselect-page',

  template: require('../../templates/pages/rsvpselectPage.hbs'),

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

module.exports = RsvpselectPage;
