import moment from 'moment';

import './userPage.html';

Template.userPage.onCreated(function() {
  var self = this;
  self.autorun(function() {
	document.title = "User Profile";
    var username = FlowRouter.getParam('username');
    self.subscribe('users', username);	
  });
});

Template.userPage.helpers({
  currentUser: function() {
	return Meteor.user();  
  },
  user: function() {
    var username = FlowRouter.getParam('username');
    var user = Meteor.users.findOne({username: username}) || {};
    return user;
  },
  isOwner: function() { 
    var username = FlowRouter.getParam('username');
    var user = Meteor.users.findOne({username: username}) || {};
    if (Meteor.user().profile.admin){
      return true;
    } else if (Meteor.user()._id === user._id) {
      return true;
    } else {
      return false;
    }
  },  
  timeAgo: function() {
    var username = FlowRouter.getParam('username');
    var user = Meteor.users.findOne({username: username}) || {};	  
  	var timeAgo = moment(user.profile.created).fromNow();	
    return timeAgo;
  },
  momentDate: function() {
    var username = FlowRouter.getParam('username');
    var user = Meteor.users.findOne({username: username}) || {};	  
  	var formattedDate = moment(user.profile.created).format('MM\/DD\/YY');	
    return formattedDate;
  }  
});

Template.userPage.events({
  'click .edit': function(e) {
    e.preventDefault();
    //Router.go("editUser", {_username: this.username});
  }    

});