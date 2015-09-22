'use strict';

var ConfirmPage = require('../../src/js/pages/confirmPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('confirm', function() {

  var confirmPage;

  beforeEach(function() {
    confirmPage = new ConfirmPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      confirmPage.setButtonEvents();
    });

    describe('left', function() {

      it('should take the user to the home page', function() {
        spyOn(global.App, 'navigate');
        confirmPage.setButtonEvents();
        confirmPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

    describe('right', function() {

      it('should take the user to the green page', function() {
        spyOn(global.App, 'navigate');
        confirmPage.setButtonEvents();
        confirmPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('green');
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
      confirmPage.render();
      var html = confirmPage.$el.html();
      expect(html).toContainText('confirm');
    });

    it('returns the view object', function() {
      expect(confirmPage.render()).toEqual(confirmPage);
    });

  });

});
