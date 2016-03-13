Meteor.publish("products", function() {
	var user = Meteor.users.findOne({_id: this.userId});
	if(!user)
		return;

	return Products.find();
});
