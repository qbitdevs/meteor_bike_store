Template.admin_orders.helpers({
  'orders': function(){
    return(Orders.find());
  },
  'exist_orders':function(){
  	console.log(Orders.find());
    return(Orders.find().count() > 0)
  }
});