Template.product_summary.events({
  'click #product': function(event) {
    event.preventDefault();
  //  Session.set('product_selected_id', this._id)
    Router.go('product_detail.show', {id: this._id});
  }
});
