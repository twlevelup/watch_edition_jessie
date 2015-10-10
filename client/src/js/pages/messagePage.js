'use strict';

var Page = require('../framework/page');

var MessagePage = Page.extend({

  template: require('../../templates/pages/messagePage.hbs'),

  buttonEvents: {
    right: 'goToMessageAction',
    left: 'goToInbox',
    top: '',
    bottom: '',
    face: ''
  },

  initialize: function() {
  },

  goToInbox: function() {
    global.App.navigate('inbox');
  },

  goToMessageAction: function() {
    global.App.navigate('messageAction');
  },

  render: function() {
    var msg = global.App.mailbox.getSelectedMessage().toJSON();
    this.$el.html(this.template(msg));
    return this;
  }

});

module.exports = MessagePage;

