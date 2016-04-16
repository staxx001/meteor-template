import moment from 'moment';

import './editUser.html';

Template.editUser.onCreated(function() {
  var self = this;
  self.autorun(function() {
	document.title = "Edit Profile";
    var username = FlowRouter.getParam('username');
    self.subscribe('users', username);	
  });
});


Template.editUser.helpers({
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

Template.editUser.events({
  'submit form': function(e) {
    e.preventDefault();
    var username = FlowRouter.getParam('username');
    var user = Meteor.users.findOne({username: username}) || {};    
    var currentUserId = user._id;    
    var currentUser = Meteor.users.findOne(currentUserId);
    var userLoggedInIsAdmin = Meteor.user().profile.admin;
    if (currentUserId !== Meteor.userId()){
      currentUser.profile.admin = $(e.target).find('[name=admin]').is(":checked");
    } else if (currentUserId === Meteor.userId() && userLoggedInIsAdmin === true){
      currentUser.profile.admin = true;
    }
    currentUser.profile.client = $(e.target).find('[name=client]').is(":checked");
    currentUser.profile.employee = $(e.target).find('[name=employee]').is(":checked");
    currentUser.profile.firstName = $(e.target).find('[name=firstName]').val();
    currentUser.profile.lastName = $(e.target).find('[name=lastName]').val();
    currentUser.profile.phone = $(e.target).find('[name=phone]').val();
    currentUser.profile.email = $(e.target).find('[name=email]').val();

    Meteor.users.update(currentUserId, {$set: {profile: currentUser.profile}}, function(error) {
      if (error) {
        //throwError(error.reason);
      } else {
        //Router.go('userPage', {_username: currentUser.username});
		var profilePath = '/users/' + user.username;
		FlowRouter.go(profilePath);
      }
    });
  },  
  'click .delete': function(e) {
    e.preventDefault();
    
    if (confirm("Delete this user?")) {
		var username = FlowRouter.getParam('username');
		var user = Meteor.users.findOne({username: username}) || {};		
		var currentUserId = user._id;
		var userLoggedInIsAdmin = Meteor.user().profile.admin;
		if (currentUserId === Meteor.userId() && userLoggedInIsAdmin === true){
			//Router.go('userList');
			FlowRouter.go('userList');
		} else {    
			Meteor.users.remove(currentUserId);
			//Router.go('userList');
			FlowRouter.go('userList');
		}  
    }
  }
});