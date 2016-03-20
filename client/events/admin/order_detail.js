Template.order_detail.events({
  'click #verified': function(event) {
    event.preventDefault();
    var id = Router.current().params.id;
    Meteor.call('verify_payment', id, function(error, result){
      if(error) console.log('Ocurrio algo al modificar la verificación del pago');
    });
  }
});
