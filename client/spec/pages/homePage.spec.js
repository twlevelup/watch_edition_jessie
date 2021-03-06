'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Home Page', function() {
  var homePage;

  beforeEach(function() {
    homePage = new HomePage();
  });

  describe('button event handlers', function() {

    describe('right', function() {

      it('should take the user to the confirm page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.selectedPage = 0;
        homePage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('confirm');
      });

      it('should take the user to the inbox page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.selectedPage = 1;
        homePage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('inbox');
      });
    });

    describe('bottom', function() {
      it('should scroll the watch face down', function() {
        spyOn(homePage, 'scrollDown');
        homePage.setButtonEvents();
        homePage.trigger('bottom');
        expect(homePage.scrollDown).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

  });

});
