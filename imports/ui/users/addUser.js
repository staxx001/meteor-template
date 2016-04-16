import './addUser.html';

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
        throwError(error.reason);
      } else {
        Router.go('userPage', {_username: newUser.username});
      }		
	});

  }
});