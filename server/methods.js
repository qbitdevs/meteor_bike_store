Meteor.methods({
  'user_exists': function(email){
    var user = Meteor.users.findOne({'emails.address':email});
    return (user)?true:false;
  },
  'insert_product': function(name, brand, cost, quantity, category, activated, offer, description){
    var product = Products.findOne({
      name: name,
      brand: brand,
      cost: cost,
      quantity: quantity,
      category: category,
      activated: activated,
      offer: offer,
      description: description,
      user_id: Meteor.userId()
    });
    if(!product || product.length == 0){
      Products.insert({
        name: name,
        brand: brand,
        cost: cost,
        quantity: quantity,
        category: category,
        activated: activated,
        offer: offer,
        description: description,
        user_id: Meteor.userId(),
        'created_at': new Date()
      });
      return true;
    }
    else {
      return false;
    }
  }
});
