Template.product_detail.helpers({
  'exist_product': function(){
    return(Products.findOne({_id: Router.current().params.id}));
  },

  'product_cost': function(){
    return(numeral(Products.findOne({_id: Router.current().params.id}).cost).format('$ 0,0'));
  }
});

Template.product_summary.helpers({
  'product_cost': function(){
    return(numeral(this.cost).format('$ 0,0'));
  }
});
