Template.order_detail.helpers({
  'exist_order': function(){
    return(Orders.find({_id: Session.get('order_selected_id')}));
  },
  'order': function(){
    return(Orders.findOne({_id: Session.get('order_selected_id')}));
  }
});