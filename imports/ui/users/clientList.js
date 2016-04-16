import './clientList.html';

Template.clientList.onCreated(function() {
  var self = this;
  self.autorun(function() {
	document.title = "Clients";
	self.subscribe('users');
  });
});

Template.clientList.helpers({
  clients: function() {
    return Meteor.users.find({'profile.client': true}, {sort: {'profile.lastName': 1, 'profile.firstName': 1}});
  },
  hasClients: function() {
    return Meteor.users.find({'profile.client': true}).count() > 0 ? true : false;
  },  
  clientCount: function() {
    return Meteor.users.find({'profile.client': true}).count();
  }  
});