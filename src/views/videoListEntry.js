var VideoListEntryView = Backbone.View.extend({
  
  // el: '.video-list',
  // model: Video,


  // initalize: function() {
  //   console.log('in the initalizer')
  // },
  
  render: function() {
    // this.$el.append(this.template());
    
    // console.log(this.$el, 'the children of this');
    // console.log(this.collection, 'the collection');
    
    // this.$el.children().last().addClass();
    // console.log('reaching here')
    this.$el.html(this.template(this.model.attributes));
    
    // this.append();
    // look to isolate elements from the video data that we will be getting back
    // iterate over each element looking to isolate and append the correct data to the dom
    //// media left thubmnail jpeg
    //// media body title
    //// medial body discription
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
