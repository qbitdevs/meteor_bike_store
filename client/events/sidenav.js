Template.sidenav_left.events({
  'click .select_categoria': function(event){
    event.preventDefault();
    Session.set('category', this.name);
  }
});
