import './homePage.html';

Template.homePage.onCreated(function() {
  var self = this;
  self.autorun(function() {
	document.title = "Home";
  });
});