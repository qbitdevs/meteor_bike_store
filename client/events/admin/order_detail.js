Template.order_detail.events({
  'click #verified': function(event) {
    event.preventDefault();
    Meteor.call('verify_payment', Session.get('order_selected_id'), function(error, result){
      if(error) console.log('Ocurrio algo al modificar la verificación del pago');
    });
  }
});