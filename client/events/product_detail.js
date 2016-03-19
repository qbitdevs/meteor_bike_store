Template.product_detail.events({
  'click #add_car': function(event) {
    event.preventDefault();
    var quantity = $('#add_product_quantity').val();
    console.log(quantity);
    Meteor.call('add_product_car', Session.get('product_selectd_id'), parseInt(quantity), function(error, result){
      if(error) console.log('Ocurrio algo al agregar producto a carrito');
    });
  }
});
