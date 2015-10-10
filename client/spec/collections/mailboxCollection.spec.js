'use strict';

var Mailbox = require('../../src/js/collections/mailbox');

describe('The Mailbox', function() {

  var mailbox;

  beforeEach(function() {
    mailbox = new Mailbox();
  });

  describe('a new mailbox', function() {
    it('should have a selected message index', function() {
      expect(mailbox.selectedIndex).toEqual(0);
    });
  });

  describe('getting messages', function() {

    beforeEach(function() {
      mailbox.push([{a:1}, {b:2}]);
    });

    describe('when the seclected index is 0', function() {
      it('should return the selected message', function() {
        expect(mailbox.getSelectedMessage().toJSON()).toEqual({a:1});
      });
    });

    describe('when the seclected index is 1', function() {
      it('should return the selected message', function() {
        mailbox.selectedIndex = 1;
        expect(mailbox.getSelectedMessage().toJSON()).toEqual({b:2});
      });
    });
  });
});
