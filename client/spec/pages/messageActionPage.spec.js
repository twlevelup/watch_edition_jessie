'use strict';

var MessageActionPage = require('../../src/js/pages/messageActionPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('messageAction', function() {

  var messageActionPage;

  beforeEach(function() {
    messageActionPage = new MessageActionPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      messageActionPage.setButtonEvents();
    });

    describe('left', function() {
      it('should take the user to the message page', function() {
        spyOn(global.App, 'navigate');
        messageActionPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('message');
      });
    });

    describe('right', function() {
      it('should take the user to the rsvpSelect page', function() {
        spyOn(global.App, 'navigate');
        messageActionPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('rsvpSelect');
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
      messageActionPage.render();
      var html = messageActionPage.$el.html();
      expect(html).toContainText('What do you want to do?');
    });

    it('should provide a way to rsvp', function() {
      messageActionPage.render();
      var html = messageActionPage.$el.html();
      expect(html).toContainText('RSVP');
    });

    it('should provide a way to discard message', function() {
      messageActionPage.render();
      var html = messageActionPage.$el.html();
      expect(html).toContainText('DISCARD');
    });

    it('returns the view object', function() {
      expect(messageActionPage.render()).toEqual(messageActionPage);
    });

  });

});
