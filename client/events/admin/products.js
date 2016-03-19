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
            Meteor.call('insert_product', name, brand, cost, parseInt(quantity), category, activated, offer, description, function(error, result){
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
  },
  'click  .delete-product': function(event){
    var id = this._id;
    MaterializeModal.form({
      title: "Eliminar producto",
      bodyTemplate: "delete_product",
      submitLabel: "Borrar",
      closeLabel: "Cancelar",
      callback: function(error, response) {
        if (response.submit) {
          if(id.length != 0){
            Meteor.call('remove_product', id, function(error, result){
              if(error){
                console.log('No se ha podido eliminar');
              }
            });
          }
          else{
            Materialize.toast("No se ha encontrado el elemento a eliminar", 1000, 'back');
          }
        }
      }
    });
  },
  'click .edit-product': function(event){
    var id = this._id;
    MaterializeModal.form({
      title: "Edita un producto",
      bodyTemplate: "edit_product",
      params: this,
      fixedFooter: true,
      submitLabel: "Guardar",
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
          if(name != '' && brand != '' && cost != '' && quantity != '' && category != '' && description != ''){
            Meteor.call('update_product', id, name, brand, cost, quantity, category, activated, offer, description, function(error, result){
              if(error){
                console.log('No se pudo actualizar el producto');
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
