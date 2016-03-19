Template.admin_brands.helpers({
  'brands': function(){
    return(Brands.find());
  },
  'exist_brands':function(){
    return(Brands.find().count() > 0)
  }
});