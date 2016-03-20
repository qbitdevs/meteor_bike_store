Template.product_car.helpers({
  'orders': function(){
    return(Orders.find({user_id: Meteor.userId(), payment: { $exists: false}}));
  },
  'total': function(){
    var total = 0;
    $.each(this.products, function(){ total += this.cost});
    return (numeral(total).format('$ 0,0'));
  },
  'product_cost': function(){
    return (numeral(this.cost).format('$ 0,0'));
  },
  'no_orders': function(){
    orders = Orders.find({user_id: Meteor.userId(), payment: { $exists: false}})
    return (orders.count() == 0);
  }
});
