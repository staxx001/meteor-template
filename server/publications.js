Meteor.publish("users", function () {
	var selector = {};
	var options = {fields: {username: 1, email: 1, profile: 1}};
	return Meteor.users.find(selector, options);  	  
});

Meteor.publish("appointments", function () {
	return Appointments.find();  	  
});