'use strict';

var AppRouter = require('../src/js/router.js'),
  PageView = require('../src/js/framework/page'),
  HomePage = require('../src/js/pages/homePage'),
  ContactPage = require('../src/js/pages/contactsPage'),
  GreenPage = require('../src/js/pages/greenPage'),
  ConfirmPage = require('../src/js/pages/confirmPage'),
  MessageActionPage = require('../src/js/pages/messageActionPage'),
  RsvpSelectPage = require('../src/js/pages/rsvpSelectPage');

describe('Application Router', function() {

  var router;

  describe('The Routes', function() {

    beforeEach(function() {
      router = new AppRouter();
      spyOn(router, 'renderView');
    });

    describe('#green', function() {
      it('should load the green screen when the right button is pressed', function() {
        router.green();
        var isGreenPage = router.renderView.calls.argsFor(0)[0] instanceof GreenPage;
        expect(isGreenPage).toBeTruthy();
      });
    });

    describe('#confirm', function() {
      it('should load the confirm page when the right button is pressed', function() {
        router.confirm();
        var isConfirmPage = router.renderView.calls.argsFor(0)[0] instanceof ConfirmPage;
        expect(isConfirmPage).toBeTruthy();
      });
    });

    describe('#home', function() {
      it('should load the home screen', function() {
        router.home();
        var isHomePage = router.renderView.calls.argsFor(0)[0] instanceof HomePage;
        expect(isHomePage).toBeTruthy();
      });
    });

    describe('#contacts', function() {
      it('should load the contacts screen', function() {
        router.contacts();
        var isContactPage = router.renderView.calls.argsFor(0)[0] instanceof ContactPage;
        expect(isContactPage).toBeTruthy();
      });
    });

    describe('#messageAction', function() {
      it('should load the messageAction screen', function() {
        router.messageAction();
        var isMessageActionPage = router.renderView.calls.argsFor(0)[0] instanceof MessageActionPage;
        expect(isMessageActionPage).toBeTruthy();
      });
    });

    describe('#rsvpSelect', function() {
      it('should load the rsvpSelect screen', function() {
        router.rsvpSelect();
        var isRsvpSelectPage = router.renderView.calls.argsFor(0)[0] instanceof RsvpSelectPage;
        expect(isRsvpSelectPage).toBeTruthy();
      });
    });

  });

});
