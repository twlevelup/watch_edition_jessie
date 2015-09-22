'use strict';

var MsgView = Backbone.View.extend({
  attributes: function() {
    // Return model data
    return {
      class: this.model.className,
      id: this.model.idName
    };
  },

  tagName: 'div',

  templateInfoRead: require('../../templates/views/msg_info_read.hbs'),
  templateInfoUnread: require('../../templates/views/msg_info_unread.hbs'),
  templateEventRead: require('../../templates/views/msg_event_read.hbs'),
  templateEventUnread: require('../../templates/views/msg_event_unread.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    if (this.model.type === 'info') {
      if (this.model.read) {
        this.$el.html(this.templateInfoRead(this.model)); // this.model is a dictionary, for example {subject:'test',date:'test2',rsvp:'sdfsd'}
      }
      else {
        this.$el.html(this.templateInfoUnread(this.model));
      }
    }

    if (this.model.type === 'event') {
      if (this.model.read) {
        this.$el.html(this.templateEventRead(this.model)); // this.model is a dictionary, for example {subject:'test',date:'test2',rsvp:'sdfsd'}
      }
      else {
        this.$el.html(this.templateEventUnread(this.model));
      }
    }

    if (this.model.highlighted) {
      this.$el.addClass('highlighted');
    }

    return this;

  }

});

module.exports = MsgView;
