import './userList.html';

Template.userList.onCreated(function() {
  var self = this;
  self.autorun(function() {
	document.title = "Users";
	self.subscribe('users');
  });
});

Template.userList.helpers({
  users: function() {
    return Meteor.users.find({}, {sort: {'profile.lastName': 1, 'profile.firstName': 1}});
  }
});