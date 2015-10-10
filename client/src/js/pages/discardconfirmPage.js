'use strict';

var Page = require('../framework/page');

var DiscardconfirmPage = Page.extend({

  id: 'discardconfirm',
  selectedPage: 0,
  selectablePages: ['confirmdiscard', 'message'],
  template: require('../../templates/pages/discardconfirmPage.hbs'),

  buttonEvents: {
    top: 'scrollUp',
    right: 'goToSelectedPage',
    bottom: 'scrollDown',
    left: 'goToRSVPPage'
  },

  deleteMessage: function() {
    global.App.mailbox.deleteCurrentMessage();
    global.App.navigate('inbox'); // jumps back to the inbox page
  },

  goToMessagePage: function() {
    global.App.navigate('message');
  },

  goToSelectedPage: function() {
    if(this.selectedPage === 0){
      this.deleteMessage();
    }
    else if(this.selectedPage === 1){
      this.goToMessagePage();
    }
  },

  scrollUp: function() {
    this.selectedPage = 0;
    $('#top').addClass('highlight');
    $('#bottom').removeClass('highlight');
  },

  scrollDown: function() {
    this.selectedPage = 1;
    $('#top').removeClass('highlight');
    $('#bottom').addClass('highlight');
  },

  goToRSVPPage: function() {
    global.App.navigate('rsvp');
  },



  render: function() {
    this.$el.html(this.template());
    return this;
  }//test

});

module.exports = DiscardconfirmPage;
