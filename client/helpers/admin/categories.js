Template.admin_categories.helpers({
  'categories': function(){
    return(Categories.find());
  },
  'exist_categories':function(){
    return(Categories.find().count() > 0)
  }
});
