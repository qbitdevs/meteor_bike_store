Template.order_detail.helpers({
  'exist_order': function(){
    var id = Router.current().params.id;
    return(Orders.find({_id: id}));
  },
  'order': function(){
    var id = Router.current().params.id;
    return(Orders.findOne({_id: id}));
  },
  'product_cost': function(){
    return (numeral(this.unit_cost).format('$ 0,0'));
  },
  'product_cost_total': function(){
    return (numeral(this.cost).format('$ 0,0'));
  },
  'payment_amount': function(){
    return (numeral(this.payment.amount).format('$ 0,0'));
  },
  'payment_date': function(){
    return (moment(this.payment.date).format('L'));
  }
});
