Template.create_product.helpers({
  'product_brands': function(){
    return(Brands.find());
  },
  'product_categories': function(){
    return(Categories.find());
  }
});
Template.edit_product.helpers({
  'product_brands': function(){
    Session.set('product_brand_selected', this.params.brand)
    return(Brands.find());
  },
  'product_categories': function(){
    Session.set('product_category_selected', this.params.category)
    return(Categories.find());
  },
  'brand_selected': function(brand){
    return (brand ==  Session.get('product_brand_selected'))
  },
  'category_selected': function(cat){
    return (cat==  Session.get('product_category_selected'))
  }
});
