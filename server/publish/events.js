Meteor.publish('events', function(){
	var user = Meteor.users.findOne({_id: this.userId});
	if(!user)
		return;
	console.log(Accounts.findUserByEmail('laslopezrange3l'));
	return Events.find({created_user: this.userId});
});
