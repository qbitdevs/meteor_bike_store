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
