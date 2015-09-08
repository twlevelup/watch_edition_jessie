'use strict';

var InboxPage = require('../../src/js/pages/inboxPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('inbox', function() {

  var inboxPage;

  beforeEach(function() {
    inboxPage = new InboxPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      inboxPage.setButtonEvents();
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
      inboxPage.render();
      var html = inboxPage.$el.html();
      expect(html).toContainText('inbox');
    });

    it('returns the view object', function() {
      expect(inboxPage.render()).toEqual(inboxPage);
    });

  });

});
