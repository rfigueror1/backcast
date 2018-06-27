var AppView = Backbone.View.extend({

  el: '#app',
  // DOM node
  

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    // inoking a new instance of the Videos collection
    this.render();
    
    
  },
  
  


  render: function() {
    this.$el.html(this.template());
    
  
    new VideoListView({
      el: this.$('.list'), 
      collection: this.videos
    }).render();
    
    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0)
    }).render();
    
    
    return this;
    
  },

  template: templateURL('src/templates/app.html')

});
