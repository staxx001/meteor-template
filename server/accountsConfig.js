Accounts.onCreateUser(function(options, user) {
  
    if (options.profile){
    	user.profile = options.profile
    	if (user.profile['employee'] === true) {
    		user.profile['client'] = false;
    	} else if (user.profile['admin'] === true){
    		user.profile['client'] = false;
    	} else {
    		user.profile['client'] = true;
    	}
    }	

    return user;
});