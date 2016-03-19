Template.admin_categories.events({
  'click #add_categories': function(event){
    MaterializeModal.form({
      title: "Crea una categoria",
      bodyTemplate: "create_category",
      submitLabel: "Crear",
      closeLabel: "Cancelar",
      callback: function(error, response) {
        if (response.submit) {
          var name = $('#category_name').val();
          console.log(name);
          if(name != '' ){
            Meteor.call('insert_category', name, function(error, result){
              if(error){
                console.log('No se pudo insertar la categor&iacute;a');
              }
            });
          }
          else{
            Materialize.toast("El nombre de la categoria es obligatorio", 1000, 'back');
          }
        }
      }
    });
  },
  'click  .delete-category': function(event){
    var id = this._id;
    MaterializeModal.form({
      title: "Eliminar categoria",
      bodyTemplate: "delete_category",
      submitLabel: "Borrar",
      closeLabel: "Cancelar",
      callback: function(error, response) {
        if (response.submit) {
          if(id.length != 0){
            Meteor.call('remove_category', id, function(error, result){
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
  'click .edit-category': function(event){
    var id = this._id;
    MaterializeModal.form({
      title: "Edita una categoria",
      bodyTemplate: "edit_category",
      params: this,
      submitLabel: "Guardar",
      closeLabel: "Cancelar",
      callback: function(error, response) {
        if (response.submit) {
          var name = $('#category_name').val();
          if(name != ''){
            Meteor.call('update_category', id, name, function(error, result){
              if(error){
                console.log('No se pudo actualizar la categor&iacute;a');
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
