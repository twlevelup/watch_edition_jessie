var Mailbox = Backbone.Collection.extend({
  selectedIndex: 0,

  getSelectedMessage: function() {
    return this.at(this.selectedIndex);
  }

});

module.exports = Mailbox;
