FlowRouter.route('/', {
  name: 'homePage',
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "homePage"});
  }
});

FlowRouter.route('/access-denied', {
  name: 'accessDenied',
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "accessDenied"});
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

FlowRouter.route('/users/add', {
  name: 'addUser',
  action: function() {
    BlazeLayout.render("mainLayout", {navbar: "navbar", content: "addUser"});
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