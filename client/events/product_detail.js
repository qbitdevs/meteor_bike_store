Template.product_detail.events({
  'click #add_car': function(event) {
    event.preventDefault();
    Meteor.call('add_product_car', Session.get('product_selected_id'), parseInt(quantity), function(error, result){
      if(error) console.log('Ocurrio algo al agregar producto a carrito');
    });
  }
});
