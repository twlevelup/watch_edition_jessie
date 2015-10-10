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

  describe('isEmpty', function() {
    describe('when the mailbox is empty', function() {
      it('should return false', function() {
        expect(mailbox.isEmpty()).toBe(true);
      });
    });

    describe('when the mailbox is not empty', function() {
      it('should return true', function() {
        mailbox.push([{a:1}, {b:2}]);
        expect(mailbox.isEmpty()).toBe(false);
      });
    });
  });

  describe('selecting messages', function() {
    beforeEach(function() {
      mailbox.push([{a:1}, {b:2}]);
    });

    describe('selecting next message', function() {
      it('should select next message', function() {
        mailbox.selectedIndex = 0;
        mailbox.selectNext();
        expect(mailbox.getSelectedMessage().toJSON()).toEqual({b:2});
      });

      it('should select the last message when we are already at the last message', function() {
        mailbox.selectedIndex = 1;
        mailbox.selectNext();
        expect(mailbox.getSelectedMessage().toJSON()).toEqual({b:2});
      });
    });

    describe('selecting the previous message', function() {
      it('should select previous message', function() {
        mailbox.selectedIndex = 1;
        mailbox.selectPrevious();
        expect(mailbox.getSelectedMessage().toJSON()).toEqual({a:1});
      });

      it('should select the first message when we are already at the first message', function() {
        mailbox.selectedIndex = 0;
        mailbox.selectPrevious();
        expect(mailbox.getSelectedMessage().toJSON()).toEqual({a:1});
      });
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

  describe('getting messages to show, surrounding the selected message', function() {
    it('should return four messages when the inbox has at least four messages', function() {
      mailbox.push([{a:1}, {b:2}, {c:1}, {d:2}]);
      var range = mailbox.getMessagesToShowRange();
      expect(range[1] - range[0] + 1).toEqual(4);
    });

    it('should return all messages when the inbox has less than four messages', function() {
      mailbox.push([{a:1}, {b:2}, {c:1}]);
      var range = mailbox.getMessagesToShowRange();
      expect(range[1] - range[0] + 1).toEqual(3);
    });
  });

});
