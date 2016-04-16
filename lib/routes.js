FlowRouter.route('/', {
  name: 'homePage',
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "homePage"});
  }
});

FlowRouter.route('/users', {
  name: 'userList',
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "userList"});
  }
});

FlowRouter.route('/clients', {
  name: 'clientList',
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "clientList"});
  }
});

FlowRouter.route('/employees', {
  name: 'employeeList',
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "employeeList"});
  }
});

FlowRouter.route('/users/:username', {
  name: 'userPage',
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "userPage"});
  }
});

FlowRouter.route('/users/:username/edit', {
  name: 'editUser',
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "editUser"});
  }
});