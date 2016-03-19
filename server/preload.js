if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Meteor.users.find().count() < 2) {
      var user = {}
      user.email = 'usuario@correo.com';
      user.pass = 'clave';
      var profile = {}
      profile.first_name = 'Dev';
      profile.last_name = 'Tester';
      profile.gender = 'Masculino';
      profile.age = '20';
      profile.admin = false;
      Accounts.createUser({
        email: user.email.toLowerCase(),
        password: user.pass,
        profile: profile
      });
      user.email = 'admin@correo.com';
      user.pass = 'clave';
      profile.first_name = 'Dev';
      profile.last_name = 'Tester';
      profile.gender = 'Masculino';
      profile.age = '20';
      profile.admin = true;
      Accounts.createUser({
        email: user.email.toLowerCase(),
        password: user.pass,
        profile: profile
      });
    }
    if (Brands.find().count() < 1) {
      Brands.insert({
        _id: 'm1',
        name: 'Marca 1'
      });
    }
    if (Categories.find().count() < 1) {
      Categories.insert({
        _id: 'm1',
        name: 'Categoria 1'
      });
    }
    if (Products.find().count() < 1) {
      Products.insert({
        name: 'Test product',
        brand: 'Marca 1',
        cost: '100',
        quantity: '10',
        category: 'Categoria 1',
        activated: true,
        offer: true,
        description: 'Esta es la descripcion del producto de prueba precargado en el sistema',
        user_id: 'a1',
        'created_at': new Date()
      });
    }
  });
}
