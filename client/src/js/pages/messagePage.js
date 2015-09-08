'use strict';

var Page = require('../framework/page');

var MessagePage = Page.extend({

  id: 'message-page',

  template: require('../../templates/pages/messagePage.hbs'),

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

module.exports = MessagePage;
