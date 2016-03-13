Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    Meteor.loginWithPassword(email.toLowerCase(), password, function(error) {
      if (error) {
        if (error.reason=="User not found"){
          Materialize.toast('El correo no existe', 1000, 'red')
          $('#email').val("");
          $('#password').val("");
          $( "#email" ).focus();
        }
        if (erro.reason=="Incorrect password"){
          Materialize.toast('La contraseña es incorrecta', 1000, 'red')
          $('#password').val("");
          $( "#email" ).focus();
        }
      }
      if (Router.current().route.getName() === 'login.show') {
        return Router.go('store.show')
      }
    });
  }
});