import './addUser.html';

Template.addUser.onCreated(function() {
  var self = this;
  self.autorun(function() {
	document.title = "Add User";
    self.subscribe('users');	
  });
});

Template.addUser.helpers({
  requiresAdminAccess: function() {
	if (!Meteor.user() || Meteor.user().profile.admin === false) {
		FlowRouter.go('accessDenied');
	} 
  }
});

Template.addUser.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var newUser = {};
    newUser.profile = {};
    newUser.username = $(e.target).find('[name=username]').val();
    newUser.password = $(e.target).find('[name=password]').val();
    newUser.profile.admin = $(e.target).find('[name=admin]').is(":checked");
    newUser.profile.client = $(e.target).find('[name=client]').is(":checked");
    newUser.profile.employee = $(e.target).find('[name=employee]').is(":checked");
    newUser.profile.firstName = $(e.target).find('[name=firstName]').val();
    newUser.profile.lastName = $(e.target).find('[name=lastName]').val();
    newUser.profile.phone = $(e.target).find('[name=phone]').val();
    newUser.profile.email = $(e.target).find('[name=email]').val();

	Accounts.createUser(newUser, function(error){
      if (error) {
        //throwError(error.reason);
      } else {
		var profilePath = '/users/' + newUser.username;
		FlowRouter.go(profilePath);		  
        Router.go('userPage', {_username: newUser.username});
      }		
	});

  }
});