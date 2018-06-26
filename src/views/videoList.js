var VideoListView = Backbone.View.extend({
  
  model: Video,
  
  initalize: function() {
    
  // this.render();
    debugger;
    // pass data from exampleVideoData 
    console.log('it gets here');
    var data = window.exampleVideoData;
    console.log(data[0], 'data!!!');
  
  
    // var video = videoListEntry.getElementByClassName("video-list");
    // // video will be an array
    // //// we can iterate over each and assign the source as we see fit
    // //// source will be https://www.youtube.com/embed/ + video ID
    
    // video.children();
    // video.src = "nameOfVideo";
    // video.setAttribute("src", "nameOfVideo");  
    
  },

  render : function() {
    // var data = this.collection.models;
    // console.log(data, "DATA");
    
    // var array = [];
    
    // for(var i = 0; i< data.length; i++) {
    //   console.log(data[i].attributes['id'], 'elements');
    //   array.push('https://www.youtube.com/embed/' + data[i].attributes['id']);
    //   this.$el.append('https://www.youtube.com/embed/' + data[i].attributes['id']);
    // }
    
    // console.log(this.$el);
    this.$el.children().detach();
    this.$el.html(this.template());
    var newVideoListEntry = new VideoListEntryView({collection: this.collection});
    
    return this;
    
    
  },
  
  
  //  render: function() {
  //   this.$el.html(this.template(this.model.attributes));
  //   return this;
  // },


  template: templateURL('src/templates/videoList.html')

});
