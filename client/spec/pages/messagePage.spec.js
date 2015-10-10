'use strict';

var MessagePage = require('../../src/js/pages/messagePage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('messagePage', function() {

  var messagePage;

  beforeEach(function() {
    messagePage = new MessagePage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      messagePage.setButtonEvents();
    });

    describe('goToInbox', function() {

      it('should go back to the inbox page', function() {
        spyOn(global.App, 'navigate');
        messagePage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('inbox');
      });

    });

    describe('right', function () {
     it('should go to the messageAction page', function(){
       spyOn(global.App, 'navigate');
       messagePage.trigger('right');
       expect(global.App.navigate).toHaveBeenCalledWith('messageAction');
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
      messagePage.render();
      var html = messagePage.$el.html();
      expect(html).toContainText('Inbox');
    });

    it('should show info class if message type is info', function() {
      global.App.myMessage = {type: 'info'};
      messagePage.render();
      var element = messagePage.$el.find('#message-subject');

      expect(element.attr('class')).toBe('message-subject info');
    });

    it('should show event class if message type is event', function() {
      global.App.myMessage = {type: 'event'};
      messagePage.render();
      var element = messagePage.$el.find('#message-subject');

      expect(element.attr('class')).toBe('message-subject event');
    });

    it('returns the view object', function() {
      expect(messagePage.render()).toEqual(messagePage);
    });

    it('should show message in content of page', function() {
      global.App.myMessage = { message: "testing testing testing"};
      messagePage.render();
      var element = messagePage.$el.find('.message-content');

      expect(element).toContainText('testing testing testing');
    });

  });

});
