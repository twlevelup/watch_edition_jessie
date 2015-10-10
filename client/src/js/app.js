'use strict';

var Router = require('./router'),
  WatchFace = require('./framework/watchFace'),
  NotificationsPanel = require('./framework/notifications'),
  availableNotificationTypes = require('./notifications/notificationsConfig'),
  Mailbox = require('./collections/mailbox'),
  clock = require('./framework/clock');

var App = {

  buttons: ['left', 'right', 'top', 'bottom', 'face'],

  navigate: function (route) {
    App.router.navigate(route, true);
  },

  mailbox: new Mailbox([
   {subject: 'Free Food!', message: 'Come to the USYD quad for free food now!', date: '15/09/15', rsvp: 'unknown', read: false, type: 'info'},
    {subject: 'HTML Workshop', message: 'UTS is conducting an introductory HTML workshop for all. Start time is 5pm on Tuesday the 13th of October in Room 11.01, Building 11.', date: '14/09/15', rsvp: 'unknown', read: false, type: 'event'},
    {subject: 'Cold weather on the way', message: 'A cold front will bring cold weather and possibly rain beginning Wednesday. Youth shelters are Located on 22 Talbot Pl, 82 Erskine St and 99 Forbes St.', date: '14/09/15', rsvp: 'unknown', read: false, type: 'info'},
    {subject: 'Need someone to talk to?', message: 'Free loneliness and depression counseling is available every Tuesday at the UNSW Psychology building from 2pm', date: '13/09/15', rsvp: 'unknown', read: true, type: 'info'},
    {subject: 'Youth indoor soccer league', message: 'The YMCA has started a new indoor soccer league for you! A great way to stay fit and meet new people. For more information and registration attend the info night at the Ian Thorpe Aquatic Center on Friday the 7th of October, 3pm.', date: '12/09/15', rsvp: 'unknown', read: true, type: 'info'},
    {subject: 'State Library english class', message: ‘The state library is conducting a writing class for those looking to improve their comprehension and writing skills. The class includes information on resumes, and an introduction to formal writing. The State Library is located on Macquarie St and classes are run every Monday and Saturday and 10am.', date: '11/09/15', rsvp: 'unknown', read: true, type: 'event'},
    {subject: 'Soup Kitchen Saturdays!', message: 'Come to the Glebe Soup Kitchen this Saturday for a free lunch!', date: '10/09/15', rsvp: 'yes', read: false, type: 'event'},
    {subject: 'Hot weather on the way', message: 'Hot weather is forecast for the next 3 days. Remember to stay hydrated and out of the sun if you can.', date: '09/09/15', rsvp: 'unknown', read: true, type: 'info'},
    {subject: 'Free water park session', message: 'We’re holding a free session at the Manly Water Park for all of our members. Be there at 1pm on Friday!', date: '08/09/15', rsvp: 'unknown', read: true, type: 'event'},
    {subject: 'Free metalwork workshop @ todo', message: ‘Develop yourself this weekend with a free 4hr seminar with guest speakers from Brookfield Construction. The workshop will be held at 42 Wallaby Way, Sydney', date: '07/09/15', rsvp: 'unknown', read: true, type: 'event'},
  ]),
  
  start: function() {
  
    this.router = new Router();

    this.watchFace = new WatchFace();
    this.notifications = new NotificationsPanel();
    this.notifications.configureNotifications(availableNotificationTypes);

    // FIXME Make a view for the watch and make these regular view events
    // Don't trigger them on the router
    $('#button-right').on('click', function() {
      App.router.currentView.trigger('right');
    });

    $('#button-top').on('click', function() {
      App.router.currentView.trigger('top');
    });

    $('#button-bottom').on('click', function() {
      App.router.currentView.trigger('bottom');
    });

    $('#button-left').on('click', function() {
      App.router.currentView.trigger('left');
    });

    $('#watch-face').on('click', function() {
      App.router.currentView.trigger('face');
    });

    clock.start();

    if(Backbone.history && !Backbone.History.started) {
      Backbone.history.start();
    }

  }

};

_.extend(App, Backbone.Events);

global.App = App;

module.exports = App;
