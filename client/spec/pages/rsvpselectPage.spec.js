'use strict';

var RsvpSelectPage = require('../../src/js/pages/rsvpSelectPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('rsvpSelect', function() {

  var rsvpSelectPage;

  beforeEach(function () {
    rsvpSelectPage = new RsvpSelectPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      rsvpSelectPage.setButtonEvents();
    });

    describe('left', function () {

      xit('should have tests');

    });

    describe('right', function () {

      xit('should have tests');

    });

    describe('top', function () {

      xit('should have tests');

    });

    describe('bottom', function () {

      xit('should have tests');

    });

    describe('face', function () {

      xit('should have tests');

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      rsvpSelectPage.render();
      var html = rsvpSelectPage.$el.html();
      expect(html).toContainText('Do you want to attend?');
    });

    it('returns the view object', function() {
      expect(rsvpSelectPage.render()).toEqual(rsvpSelectPage);
    });

  });

});
