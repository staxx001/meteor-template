Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-view-profile': function(event) {
        //Router.go('userPage', {_username: Meteor.user().username});
		var profilePath = '/users/' + Meteor.user().username;
		FlowRouter.go(profilePath);
    }
});