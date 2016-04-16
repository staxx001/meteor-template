// User Fixtures

if (Meteor.users.find().count() === 0) {

  var now = new Date();

  var adminId = Accounts.createUser({
        username: "admin",
        password: "password",
        profile: {
          firstName: "Example",
          lastName: "Admin",
          admin: true,
          employee: false,
          client: false,
          created: now,
          email: "",
          phone: "" 
        }      
      });
  var admin = Meteor.users.findOne(adminId);

  var employee1Id = Accounts.createUser({
        username: "employee1",
        password: "password",
        profile: {
          firstName: "Employee",
          lastName: "One",
          admin: false,
          employee: true,
          client: false,
          created: now,
          email: "exampleemployee1@example.com",
          phone: "9876543210" 
        }      
      });
  var employee1 = Meteor.users.findOne(employee1Id);

  var employee2Id = Accounts.createUser({
        username: "employee2",
        password: "password",
        profile: {
          firstName: "Employee",
          lastName: "Two",
          admin: false,
          employee: true,
          client: false,
          created: now,
          email: "exampleemployee2@example.com",
          phone: "9876543210" 
        }      
      });
  var employee2 = Meteor.users.findOne(employee2Id);

  var client1Id = Accounts.createUser({
        username: "client1",
        password: "password",
        profile: {
          firstName: "Client",
          lastName: "One",
          admin: false,
          employee: false,
          client: true,
          created: now,
          email: "exampleclient1@example.com",
          phone: "9876543210" 
        }      
      });
  var client1 = Meteor.users.findOne(client1Id);

  var client2Id = Accounts.createUser({
        username: "client2",
        password: "password",
        profile: {
          firstName: "Client",
          lastName: "Two",
          admin: false,
          employee: false,
          client: true,
          created: now,
          email: "exampleclient2@example.com",
          phone: "9876543210" 
        }      
      });
  var client2 = Meteor.users.findOne(client2Id);

} //end if

