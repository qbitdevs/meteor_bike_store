Template.my_events.helpers({
  'my_events': function(){
    return Events.find({}, {sort: {date:-1}});
  }
});
