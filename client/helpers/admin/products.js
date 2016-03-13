Template.admin_products.helpers({
  'products': function(){
    return(Products.find());
  },
  'exist_products':function(){
    return(Products.find().count() > 0)
  }
});
