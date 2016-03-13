Router.route('/', {
  onBeforeAction: function () {
    if(Meteor.user()){
      if(Meteor.user().profile.admin){
        Router.go('admin.show');
      }else{
        Router.go('store.show');
      }
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
  template: 'login',
  onAfterAction: function(){
    if(Meteor.user().profile.admin){
      Router.go('admin.show');
    }else{
      Router.go('store.show');
    }
  }
});

Router.route('/register', {
  name: 'register.show',
  template: 'register',
  onBeforeAction: function(){
    if(Meteor.userId()){
      Router.go('login.show');
    }
    else{
      this.next();
    }
  }
});

Router.route('/store', {
  name: 'store.show',
  template: 'store'
});


Router.route('/admin', {
  name: 'admin.show',
  template: 'admin',
  onAfterAction: function(){
    if(Meteor.user()!= undefined){
      if(Meteor.user().profile.admin){
        Router.go('admin.show');
      }else{
        Router.go('store.show');
      }
    }
  }
});

Router.route('/admin/products', {
  name: 'admin_products.show',
  template: 'admin_products',
  onAfterAction: function(){
    if(Meteor.user()!= undefined){
      if(Meteor.user().profile.admin){
        Router.go('admin_products.show');
      }else{
        Router.go('store.show');
      }
    }
  },
  subscriptions: function(){
    Meteor.subscribe('products');
    Meteor.subscribe('brands');
    Meteor.subscribe('categories');
  }
});

Router.route('/about_us', {
  name: 'about_us.show',
  template: 'about_us'
});

Router.route('/contact', {
  name: 'contact.show',
  template: 'contact'
});
