Template.product_detail.helpers({
  'exist_product': function(){
    return(Products.findOne({_id: Session.get('product_selectd_id')}));
  }
});
