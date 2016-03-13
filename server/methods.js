Meteor.methods({
  'user_exists': function(email){
    var user = Meteor.users.findOne({'emails.address':email});
    return (user)?true:false;
  }
});
