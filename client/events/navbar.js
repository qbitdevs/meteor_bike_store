Template.navbar.events({
  'click #logout': function(event){
      event.preventDefault();
      Object.keys(Session.keys).forEach(function(key){Session.set(key, undefined);});
      Session.keys = {}
      Meteor.logout();
  },

  'click #home': function(event){
    Session.set('category', '0');
  }

});
