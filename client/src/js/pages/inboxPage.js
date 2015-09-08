'use strict';

var Page = require('../framework/page');

var InboxPage = Page.extend({

  id: 'inbox-page',

  template: require('../../templates/pages/inboxPage.hbs'),

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

module.exports = InboxPage;
