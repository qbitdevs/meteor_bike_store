Router.route('/', {
  onBeforeAction: function () {
    if(Meteor.user()){
      Router.go('store.show');
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

Router.onBeforeAction(OnBeforeActions.loginRequired, {except: ['login.show', 'register.show']});

Router.route('/login', {
  name: 'login.show',
  template: 'login'
});


Router.route('/logout', {
  name: 'logout.show',
  template: '',
  onAfterAction: function(){
  },
  onBeforeAction: function(){
    Object.keys(Session.keys).forEach(function(key){ Session.set(key, undefined); });
    Session.keys = {}
    Meteor.logout(function(err){
      if(err)
        Materialize.toast('Algo pasó y no pudedes cerrar sesión', 6000, 'red')
      Router.go('login.show');
    });
  }
});

Router.route('/register', {
  name: 'register.show',
  template: 'register'
});

Router.route('/store', {
  name: 'store.show',
  template: 'store'
});
