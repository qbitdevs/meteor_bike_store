Template.create_product.helpers({
  'product_brands': function(){
    return(Brands.find());
  }
});
Template.create_product.helpers({
  'product_categories': function(){
    return(Categories.find());
  }
});
