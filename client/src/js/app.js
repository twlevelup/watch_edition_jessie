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
   {subject: 'Free Food!', message: 'Come to the USYD quad for free food', date: '15/09/15', rsvp: 'unknown', read: false, type: 'info'},
    {subject: 'Event Mes 1', message: 'Mock Message Mock Message Mock Message Mock Message ', date: '14/09/15', rsvp: 'unknown', read: false, type: 'event'},
    {subject: 'Info Mes 1', message: 'Mock Message Mock Message Mock Message Mock Message', date: '14/09/15', rsvp: 'unknown', read: false, type: 'info'},
    {subject: 'Info Mes 2', message: 'Mock Message Mock Message Mock Message Mock Message', date: '13/09/15', rsvp: 'unknown', read: false, type: 'info'},
    {subject: 'Event Mes 1', message: 'Mock Message Mock Message Mock Message Mock Message', date: '12/09/15', rsvp: 'unknown', read: true, type: 'info'},
    {subject: 'Event Mes 2', message: 'Mock Message Mock Message Mock Message Mock Message', date: '11/09/15', rsvp: 'unknown', read: true, type: 'event'},
    {subject: 'Info Mes 3', message: 'Mock Message Mock Message Mock Message Mock Message', date: '10/09/15', rsvp: 'unknown', read: true, type: 'info'},
    {subject: 'Info Mes 4', message: 'Mock Message Mock Message Mock Message Mock Message', date: '09/09/15', rsvp: 'unknown', read: true, type: 'info'},
    {subject: 'Info Mes 5', message: 'Mock Message Mock Message Mock Message Mock Message', date: '08/09/15', rsvp: 'unknown', read: true, type: 'info'},
    {subject: 'Info Mes 6', message: 'Mock Message Mock Message Mock Message Mock Message', date: '07/09/15', rsvp: 'unknown', read: true, type: 'info'},
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
