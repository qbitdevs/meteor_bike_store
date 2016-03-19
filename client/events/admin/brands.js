Template.admin_brands.events({
  'click #add_brands': function(event){
    MaterializeModal.form({
      title: "Agrega una marca",
      bodyTemplate: "create_brand",
      submitLabel: "Agregar",
      closeLabel: "Cancelar",
      callback: function(error, response) {
        if (response.submit) {
          var name = $('#brand_name').val();
          console.log(name);
          if(name != ''){
            Meteor.call('insert_brand', name, function(error, result){
              if(error){
                console.log('No se pudo agregar la marca');
              }
            });
          }
          else{
            Materialize.toast("El campo nombre es obligatorio", 1000, 'back');
          }
        }
      }
    });
  },
  'click  .delete-brand': function(event){
    var id = this._id;
    MaterializeModal.form({
      title: "Eliminar marca",
      bodyTemplate: "delete_brand",
      submitLabel: "Borrar",
      closeLabel: "Cancelar",
      callback: function(error, response) {
        if (response.submit) {
          if(id.length != 0){
            Meteor.call('remove_brand', id, function(error, result){
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
  'click .edit-brand': function(event){
    var id = this._id;
    MaterializeModal.form({
      title: "Edita una marca",
      bodyTemplate: "edit_brand",
      params: this,
      submitLabel: "Guardar",
      closeLabel: "Cancelar",
      callback: function(error, response) {
        if (response.submit) {
          var name = $('#brand_name').val();
          if(name != ''){
            Meteor.call('update_brand', id, name, function(error, result){
              if(error){
                console.log('No se pudo actualizar la marca');
              }
            });
          }
          else{
            Materialize.toast("El campo nombre es obligatorios", 1000, 'back');
          }
        }
      }
    });
  }
});
