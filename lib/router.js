Router.route('/', {
  onBeforeAction: function () {
    if(Meteor.user()){
      Router.go('my_events.show');
    }
    else{
      Router.go('login.show');
    }
  }
});

var OnBeforeActions = {
  loginRequired: function(pause) {
    if(!Meteor.userId()){
      Router.go('login.show');
    }
    else{
      this.next();
    }
  }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {except: ['login.show']});

Router.route('/login', {
  name: 'login.show',
  template: 'login'
});

Router.route('/myevents',{
  name: 'my_events.show',
  template: 'my_events',
  subscriptions: function(){
    Meteor.subscribe('events');
  }
});

Router.route('/logout', {
  name: 'logout.show',
  template: '',
  onAfterAction: function(){
  },
  onBeforeAction: function(){
    Object.keys(Session.keys).forEach(function(key){ Session.set(key, undefined);});
    Session.keys = {}
    Meteor.logout(function(err){
      if(err)
        Materialize.toast('Algo pasó y no pude des loguearte', 6000, 'red')
      else
        Router.go('login.show');
    });
  }
});
