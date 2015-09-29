'use strict';

var Page = require('../framework/page');


var MessagePage = Page.extend({

  template: require('../../templates/pages/messagePage.hbs'),

  buttonEvents: {
    right: '',
    left: 'goToInbox',
    top: '',
    bottom: '',
    face: ''
  },

  initialize: function(){
  },

  goToInbox: function () {
    global.App.navigate('inbox');
  },

  render: function() {
    this.$el.html(this.template(global.App.myMessage));

    return this;

  }

});

module.exports = MessagePage;
