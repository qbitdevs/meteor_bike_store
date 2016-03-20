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
  },
  'insert_category': function(name){
    var category = Categories.findOne({
      name: name,
    });
    if(!category || category.length == 0){
      Categories.insert({
        name: name,
      });
      return true;
    }
    else {
      return false;
    }
  },
  'insert_brand': function(name){
    var brand = Brands.findOne({
      name: name,
    });
    if(!brand || brand.length == 0){
      Brands.insert({
        name: name,
      });
      return true;
    }
    else {
      return false;
    }
  },
  'remove_product': function(id){
    Products.remove({_id: id});
  },
  'remove_brand': function(id){
    Brands.remove({_id: id});
  },
  'remove_category': function(id){
    Categories.remove({_id: id});
  },
  'update_product': function(id, name, brand, cost, quantity, category, activated, offer, description){
    Products.update({_id: id},{
      $set:{
        name: name,
        brand: brand,
        cost: cost,
        quantity: quantity,
        category: category,
        activated: activated,
        offer: offer,
        description: description,
        user_id: Meteor.userId()
      }
    });
    return true;
  },
  'update_category': function(id, name){
    Categories.update({_id: id},{
      $set:{
        name: name,
      }
    });
    return true;
  },
  'update_brand': function(id, name){
    Brands.update({_id: id},{
      $set:{
        name: name,
      }
    });
    return true;
  },
  'add_product_car': function(product_id, quantity){
    var orders = Orders.findOne({user_id: Meteor.userId(), payment: { $exists: false}});
    var product = Products.findOne({_id: product_id})
    if(orders == undefined){
      console.log('entre');
      Orders.insert({
        user_id: Meteor.userId(),
        products: [
          {
            id: product._id,
            name: product.name,
            quantity: quantity,
            unit_cost: product.cost,
            cost: quantity * product.cost ,
            add_at: new Date()
          }
        ],
        payment: {
          amount: 2000,
          bank: 'Banco Estado',
          number: '12312321',
          date: new Date(),
          verified: false
        }
      });
    }else{
      var flag = false;
      orders.products.forEach(function(value, index){
        if(value.id == product._id){
          flag = true;
          orders.products[index].quantity += quantity;
          orders.products[index].cost += quantity * product.cost;
        }
      });
      if(flag){
        Orders.update(orders._id,{
          $set: {
            products: orders.products
          }
        });

      }else{
        Orders.update(orders._id,{
          $addToSet: {
            products: {
              id: product._id,
              name: product.name,
              quantity: quantity,
              unit_cost: product.cost,
              cost: quantity * product.cost,
              add_at: new Date()
            }
          }
        });
      }
    }
    return true;
  },
  'verify_payment': function(id){
    var orders = Orders.findOne({_id: id});
    orders.payment.verified = !orders.payment.verified;
    Orders.update(orders._id,{
          $set: {
            payment: orders.payment
          }
        });
    return true;
  },
});