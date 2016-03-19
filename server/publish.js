Meteor.publish("products", function() {
	var user = Meteor.users.findOne({_id: this.userId});
	if(!user){
		return;
	}else {
		return Products.find();
	}
});

Meteor.publish("brands", function() {
	var user = Meteor.users.findOne({_id: this.userId});
	if(!user){
		return;
	}else{
		return Brands.find();
	}
});

Meteor.publish("categories", function() {
	var user = Meteor.users.findOne({_id: this.userId});
	if(!user){
		return;
	}else{
		return Categories.find();
	}
});

Meteor.publish("orders", function() {
	var user = Meteor.users.findOne({_id: this.userId});
	if(!user){
		return;
	}else{
		if (!user.profile.admin){
			return Orders.find({user_id: this.user_id});
		}
		else{
			return Orders.find();
		}
	}
});
