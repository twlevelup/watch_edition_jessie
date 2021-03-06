'use strict';

var InboxPage = require('../../src/js/pages/inboxPage.js'),
  Router = require('../../src/js/router'),
  Mailbox = require('../../src/js/collections/mailbox'),
  App = require('../../src/js/app');

global.App = App;

describe('Inbox', function() {

  var inboxPage;

  beforeEach(function() {
    inboxPage = new InboxPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      inboxPage.setButtonEvents();
    });

    describe('left', function() {
      it('should take the user to the home page', function() {
        spyOn(global.App, 'navigate');
        inboxPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('right', function() {

      it('should take the user to the message page', function() {
        spyOn(global.App, 'navigate');
        inboxPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('message');
      });

    });

    describe('top', function() {

      xit('should have tests');

    });

    describe('bottom', function() {

      xit('should have tests');

    });

    describe('face', function() {

      xit('should have tests');

    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      inboxPage.render();
      var html = inboxPage.$el.html();
      expect(html).toContainText('Inbox');
    });

    it('should say that the inbox is empty when there are no messages in the inbox', function() {
      global.App.mailbox = new Mailbox([]);
      inboxPage.render();
      var html = inboxPage.$el.html();
      expect(html).toContainText('Inbox is empty');
    });

    it('every displayed message should have one subject field', function() {
          inboxPage.render();
          var messages = inboxPage.$el.find('.msg');
          for (var i = 0; i < messages.length; i += 1) {
            var subjects = messages[i].getElementsByClassName('subject');
            expect(subjects.length === 1).toBe(true);
          }
        });

    it('should display unread messages bold', function() {
          inboxPage.render();
          var messages = inboxPage.$el.find('.msg');
          for (var i = 0; i < messages.length; i += 1) {
            if (messages.read === false) {
              var subjects = messages[i].getElementsByClassName('subject');
              expect(subjects.subjects.innerHTML).toContainText('<b>');
            }
          }
        });

    it('should display read messages not bold', function() {
          inboxPage.render();
          var messages = inboxPage.$el.find('.msg');
          for (var i = 0; i < messages.length; i += 1) {
            if (messages.read === false) {
              var subjects = messages[i].getElementsByClassName('subject');
              expect(subjects.subjects.innerHTML).toNotContainText('<b>');
            }
          }
        });

  });

});
