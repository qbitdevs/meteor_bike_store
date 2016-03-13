Template.register.events({
  'submit form#register': function(event) {
    event.preventDefault();
    var user = {}
    user.email = $('#email').val();
    user.pass = $('#password').val();
    var profile = {}
    profile.first_name = $('#first_name').val();
    profile.last_name = $('#last_name').val();
    profile.gender = $( "#gender option:selected" ).val();
    profile.age = $('#age').val();
    profile.admin = false;
    Meteor.call('user_exists', user.email, function(error, result){
      if(result){
        Materialize.toast("El correo ya existe", 1000, 'red');
      }
      else {
        if(user.email != "" && user.pass != "" && profile.first_name != "" && profile.last_name != "" && profile.gender != "" && profile.age != ""){
          Accounts.createUser({
            email: user.email.toLowerCase(),
            password: user.pass,
            profile: profile
          });
        }
        else{
          Materialize.toast("Todos los campos son obligatorios", 1000, 'black');
          $('#email').val("");
          $('#password').val("");
          $('#first_name').val("");
          $('#last_name').val("");
          $('#age').val("");
        }
      }
    });
  }
});
