import './accessDenied.html';

Template.accessDenied.onCreated(function() {
  var self = this;
  self.autorun(function() {
	document.title = "Access Denied";	
  });
});
