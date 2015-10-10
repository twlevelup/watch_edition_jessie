'use strict';

var DiscardconfirmPage = require('../../src/js/pages/discardconfirmPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('DiscardConfirm', function() {

  var discardconfirmPage;

  beforeEach(function () {
    discardconfirmPage = new DiscardconfirmPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      discardconfirmPage.setButtonEvents();
    });

    describe('left', function () {

      xit('should return to the messageActionPage',function(){
        spyOn(global.App, 'navigate');
        discardconfirmPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

    describe('right', function () {

      it('should discard the chosen message',function(){
        spyOn(global.App, 'navigate');
        discardconfirmPage.setButtonEvents();
        discardconfirmPage.selectedPage = 0;
        discardconfirmPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('inbox');
      });

      it('should discard the chosen message',function(){
        spyOn(global.App, 'navigate');
        discardconfirmPage.setButtonEvents();
        discardconfirmPage.selectedPage = 0;
        discardconfirmPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('inbox');
      });


      it('should return to the messagePage',function(){
        spyOn(global.App, 'navigate');
        discardconfirmPage.setButtonEvents();
        discardconfirmPage.selectedPage = 1;
        discardconfirmPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('message');
      });

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
      discardconfirmPage.render();
      var html = discardconfirmPage.$el.html();
      expect(html).toContainText('DiscardConfirm');
    });

    it('returns the view object', function() {
      expect(discardconfirmPage.render()).toEqual(discardconfirmPage);
    });

  });

});
