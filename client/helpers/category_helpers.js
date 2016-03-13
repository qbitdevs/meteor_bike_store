Session.set('category', '0');

Template.category.helpers({
  'productos': function(){
    filter = {};
    categoria = Session.get('category');
    if(categoria != '0'){
        filter['category'] = categoria;
    }
    return(Products.find(filter));
  }
});
