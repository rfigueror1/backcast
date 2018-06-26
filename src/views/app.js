var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    // console.log(this, 'AppView this');
    console.log("hi");
    this.render();
    
    this.videoPlayer = new VideoPlayerView();
    this.videoPlayer.render();
    console.log(this.videoPlayer);
    this.videoList = new VideoListView();
    this.videoList.render();
    
    
    // this.videoPlayer.render();
    // this.videoList.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
