Template.admin_orders.events({
  'click #order': function(event) {
    event.preventDefault();
    Session.set('order_selected_id', this._id)
    Router.go('order_detail.show', {id: this._id});
  }
});