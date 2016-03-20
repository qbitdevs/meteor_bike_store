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
  template: 'store',
  subscriptions: function(){
    Meteor.subscribe('products');
    Meteor.subscribe('brands');
    Meteor.subscribe('categories');
    Meteor.subscribe('orders');
  }
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
    Meteor.subscribe('orders');
  }
});

Router.route('/admin/brands', {
  name: 'admin_brands.show',
  template: 'admin_brands',
  onAfterAction: function(){
    if(Meteor.user()!= undefined){
      if(Meteor.user().profile.admin){
        Router.go('admin_brands.show');
      }else{
        Router.go('store.show');
      }
    }
  },
  subscriptions: function(){
    Meteor.subscribe('products');
    Meteor.subscribe('brands');
    Meteor.subscribe('categories');
    Meteor.subscribe('orders');
  }
});

Router.route('/admin/categories', {
  name: 'admin_categories.show',
  template: 'admin_categories',
  onAfterAction: function(){
    if(Meteor.user()!= undefined){
      if(Meteor.user().profile.admin){
        Router.go('admin_categories.show');
      }else{
        Router.go('store.show');
      }
    }
  },
  subscriptions: function(){
    Meteor.subscribe('products');
    Meteor.subscribe('brands');
    Meteor.subscribe('categories');
    Meteor.subscribe('orders');
  }
});

Router.route('/admin/orders', {
  name: 'admin_orders.show',
  template: 'admin_orders',
  onAfterAction: function(){
    if(Meteor.user()!= undefined){
      if(Meteor.user().profile.admin){
        Router.go('admin_orders.show');
      }else{
        Router.go('store.show');
      }
    }
  },
  subscriptions: function(){
    Meteor.subscribe('products');
    Meteor.subscribe('brands');
    Meteor.subscribe('categories');
    Meteor.subscribe('orders');
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

Router.route('/product/:id?', {
  name: 'product_detail.show',
  template: 'product_detail',
  //controller: 'ProductController',
  subscriptions: function(){
    Meteor.subscribe('products');
    Meteor.subscribe('brands');
    Meteor.subscribe('categories');
  }
});


Router.route('/product_car', {
  name: 'product_car.show',
  template: 'product_car',
  subscriptions: function(){
    Meteor.subscribe('products');
    Meteor.subscribe('brands');
    Meteor.subscribe('categories');
    Meteor.subscribe('orders');
  }
});

Router.route('admin/order/:id?', {
  name: 'order_detail.show',
  template: 'order_detail',
  //controller: 'ProductController',
  subscriptions: function(){
    Meteor.subscribe('products');
    Meteor.subscribe('brands');
    Meteor.subscribe('categories');
    Meteor.subscribe('orders');
  }
});

//ProductController = RouteController.extend({
  //onBeforeAction: function(){
    //if(this.params.id){
      //var product = Products.find({_id: this.params.id});
       //Router.go('product_detail.show', {_id: this.params.id});
    //}
    //this.next();
  //}
//});
