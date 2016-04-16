import { Mongo } from 'meteor/mongo';

import './permissions.js';

Meteor.users.allow({
  insert: function() { return userIsAdmin(); },	
  update: function(userId) { return ownsProfile(userId); },
  remove: function(userId) { return ownsProfile(userId); },
});
