'use strict';

var RsvpPage = require('../../src/js/pages/rsvpPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('rsvp', function() {

  var rsvpPage;

  beforeEach(function() {
    rsvpPage = new RsvpPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      rsvpPage.setButtonEvents();
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
      rsvpPage.render();
      var html = rsvpPage.$el.html();
      expect(html).toContainText('rsvp');
    });

    it('returns the view object', function() {
      expect(rsvpPage.render()).toEqual(rsvpPage);
    });

  });

});
