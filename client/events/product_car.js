Template.product_car.events({
  'click #pay_car': function(event){
    var id = this._id;
    MaterializeModal.form({
      title: "Realiza tu pago",
      bodyTemplate: "payment",
      fixedFooter: true,
      submitLabel: "Aceptar",
      closeLabel: "Cancelar",
      callback: function(error, response) {
        if (response.submit) {
          var number = $('#number').val();
          var bank = $( "#bank option:selected" ).val();
          var amount = $('#amount').val();
          var date = $('#date').val();
          if(number != '' && bank != '' && amount != '' && date != ''){
            Meteor.call('insert_payment', id, bank, number, amount, date, function(error, result){
              if(error){
                console.log('No se pudo insertar el producto');
              }
            });
          }
          else{
            Materialize.toast("Todos los campos son obligatorios", 1000, 'back');
          }
        }
      }
    });
  }
});
