'use strict';

var Mailbox = Backbone.Collection.extend({
  selectedIndex: 0,

  getSelectedMessage: function() {
    return this.at(this.selectedIndex);
  },

  isEmpty: function() {
    return !this.length;
  },

  selectPrevious: function() {
    this.selectedIndex = this.selectedIndex - 1;
    if (this.selectedIndex < 0) {
      this.selectedIndex = 0;
    }
  },

  selectNext: function() {
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex >= this.length) {
      this.selectedIndex = this.length - 1;
    }
  },

  getMessagesToShowRange: function() {
    var indexStart = this.selectedIndex - 1;
    if (indexStart < 0) {
      indexStart = 0;
    }

    var indexEnd = indexStart + 3;
    if (indexEnd >= this.length) {
      indexEnd = this.length - 1;
      indexStart = this.length - 4;
    }

    if (indexStart < 0) {
      indexStart = 0;
    }

    return [indexStart, indexEnd];
  },

  setRSVP: function(rsvp) {
	var txt = 'Attending!';
	if (!rsvp) {
		txt = 'Not attending :(';
	}
    this.getSelectedMessage().set('rsvp', txt);
  },

  deleteCurrentMessage: function() {
    var msg = this.getSelectedMessage();
    this.remove(msg);
    this.selectedIndex = 0;
  },

  setToRead: function() {
    this.getSelectedMessage().set('read', true);
  }

});

module.exports = Mailbox;
