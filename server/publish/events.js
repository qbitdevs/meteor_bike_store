Meteor.publish('events', function(){
	var user = Meteor.users.findOne({_id: this.userId});
	if(!user)
		return;
		//Si hay mas de un tipo de login esto debe camiar para saber primero que
		//tipo de loguin tiene el usuario para luego buscar su email
	return Events.find({ $or: [{created_user: this.userId}, {organizers: { $in: [user.services.facebook.email]}}]});
});
