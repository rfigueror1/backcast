var VideoListView = Backbone.View.extend({
  
  model: Video,

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    this.collection.each(this.renderVideo, this);
    return this;
    // this allows functions to be chained.
  },
  
  renderVideo: function(video){
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el
    );   
  },
  
  //  render: function() {
  //   this.$el.html(this.template(this.model.attributes));
  //   return this;
  // },


  template: templateURL('src/templates/videoList.html')

});



