import './employeeList.html';

Template.employeeList.onCreated(function() {
  var self = this;
  self.autorun(function() {
	document.title = "Employees";
	self.subscribe('users');
  });
});

Template.employeeList.helpers({
  requiresAdminAccess: function() {
	if (!Meteor.user() || Meteor.user().profile.admin === false) {
		FlowRouter.go('accessDenied');
	} 
  },	
  employees: function() {
    return Meteor.users.find({'profile.employee': true}, {sort: {'profile.lastName': 1, 'profile.firstName': 1}});
  },
  hasEmployees: function() {
    return Meteor.users.find({'profile.employee': true}).count() > 0 ? true : false;
  },  
  employeeCount: function() {
    return Meteor.users.find({'profile.employee': true}).count();
  }
});