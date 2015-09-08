'use strict';

var MessagePage = require('../../src/js/pages/messagePage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('message', function() {

  var messagePage;

  beforeEach(function() {
    messagePage = new MessagePage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      messagePage.setButtonEvents();
    });

    describe('left', function() {

      xit('should have tests');

    });

    describe('right', function() {

      xit('should have tests');

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
      expect(html).toContainText('message');
    });

    it('returns the view object', function() {
      expect(messagePage.render()).toEqual(messagePage);
    });

  });

});
