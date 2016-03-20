Template.product_detail.events({
  'click #add_car': function(event) {
    event.preventDefault();
    var quantity = $('#add_product_quantity').val();
    Meteor.call('add_product_car', Router.current().params.id, parseInt(quantity), function(error, result){
      if(error) console.log('Ocurrio algo al agregar producto a carrito');
    });
    MaterializeModal.confirm({
      title: "Compra de producto",
      message: "Tu producto fue agregado al carrito de compras",
      footerTemplate: "car_view"
    });
  }
});
