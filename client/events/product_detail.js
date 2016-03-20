Template.product_detail.events({
  'click #add_car': function(event) {
    event.preventDefault();
    var quantity = $('#add_product_quantity').val();
    Meteor.call('add_product_car', Router.current().params.id, parseInt(quantity), function(error, result){
      if(error) console.log('Ocurrio algo al agregar producto a carrito');
    });
	MaterializeModal.form({
      title: "Compra de producto",
      bodyTemplate: "car_view",
      submitLabel: '<a class="btn blue darken-2"> Ir al carrito</a>',
      closeLabel: '<a class="btn blue darken-2" style="padding-bottom:1%"> Cancelar</a>',
      callback: function(error, response) {
        if (response.submit) {
          window.location.href = '/product_car';
        }
      }
    });
  },
});
