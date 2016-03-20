Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    Meteor.loginWithPassword(email.toLowerCase(), password, function(error) {
      if (error) {
        if (error.reason=="User not found"){
          Materialize.toast('El correo no existe', 1000, 'black')
          $('#email').val("");
          $('#password').val("");
          $( "#email" ).focus();
        }
        if (error.reason=="Incorrect password"){
          Materialize.toast('La contraseña es incorrecta', 1000, 'blak')
          $('#password').val("");
          $( "#email" ).focus();
        }
      }
      if (Router.current().route.getName() === 'login.show'){
        if(Meteor.user().profile.admin){
          return Router.go('admin.show')
        }else {
          Session.set('category', '0');
          return Router.go('store.show')
        }
      }
    });
  }
});
