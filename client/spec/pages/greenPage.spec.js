'use strict';

var GreenPage = require('../../src/js/pages/greenPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Green Page', function() {
  var greenPage;

  beforeEach(function() {
    greenPage = new GreenPage();
  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      greenPage.render();
      expect(greenPage.$el).toContainText('PANIC MESSAGE SENT.');
    });

    it('returns the view object', function() {
      expect(greenPage.render()).toEqual(greenPage);
    });

  });

});
