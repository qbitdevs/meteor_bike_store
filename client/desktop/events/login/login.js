Template.login.events({
  'click #facebook-login': function(event) {
    Meteor.loginWithFacebook({requestPermissions: ['email']}, function(err){
      if (err) {
        throw new Meteor.Error("Facebook login failed");
      }else{
        if (Router.current().route.getName() === 'login.show') {
          return Router.go('my_events.show')
        }
      }
    });
  }
});
