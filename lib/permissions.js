ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}

ownsProfile = function(userId) {
  if(userId && Meteor.user().profile.admin === true){
  	return true;
  } else if (userId && userId === Meteor.user()._id){
  	return true;
  } else {
  	return false;
  }
}

userIsAdmin = function() {
	return Meteor.user().profile.admin ? true : false;
}