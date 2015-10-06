'use strict';

var RsvpselectPage = require('../../src/js/pages/rsvpselectPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('rsvpSelect', function() {

  var rsvpselectPage;

  beforeEach(function () {
    rsvpselectPage = new RsvpselectPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      rsvpselectPage.setButtonEvents();
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
      rsvpselectPage.render();
      var html = rsvpselectPage.$el.html();
      expect(html).toContainText('rsvpSelect');
    });

    it('returns the view object', function() {
      expect(rsvpselectPage.render()).toEqual(rsvpselectPage);
    });

  });

});
