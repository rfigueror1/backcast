var AppView = Backbone.View.extend({

  el: '#app',
  // DOM node
  

  initialize: function() {
    
    //toggle to switch between fake data
    // this.videos = new Videos(exampleVideoData);
    
    
    // inoking a new instance of the Videos collection
    // event listener that receives data 
    
    //toggle to switch between real data
    this.videos = new Videos();
    
    this.listenTo(this.videos, 'sync', this.searchBar);
    this.videos.search();
    this.render();
    
    
  },
  
  searchBar: function() {
    if (this.videos.length) {
      this.videos.at(0).select();
    }
  },
  

  render: function() {
    this.$el.html(this.template());
    
  
    new VideoListView({
      el: this.$('.list'), 
      collection: this.videos
    }).render();
    
    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0),
      collection: this.videos
    }).render();
    
    new SearchView({
      el: this.$('.search')
    }).render();
    
    
    return this;
    
  },

  template: templateURL('src/templates/app.html')

});
