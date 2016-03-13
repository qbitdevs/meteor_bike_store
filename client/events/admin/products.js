Template.admin_products.events({
  'click #add_products': function(event){
    MaterializeModal.form({
      title: "Crea un producto",
      bodyTemplate: "create_product",
      fixedFooter: true,
      submitLabel: "Crear",
      closeLabel: "Cancelar",
      callback: function(error, response) {
        if (response.submit) {
          var name = $('#product_name').val();
          var brand = $( "#product_brands option:selected" ).val();
          var cost = $('#product_cost').val();
          var quantity = $('#product_quantity').val();
          var category = $( "#product_categories option:selected" ).val();
          var activated = $('#product_active').is(":checked")
          var offer = $('#product_offer').is(":checked")
          var description = $('#product_description').val()
          console.log(name, brand, cost, quantity, category, activated, offer, description);
          if(name != '' && brand != '' && cost != '' && quantity != '' && category != '' && description != ''){
            Meteor.call('insert_product', name, brand, cost, quantity, category, activated, offer, description, function(error, result){
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
