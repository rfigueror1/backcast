var VideoListEntryView = Backbone.View.extend({
  
  el: '.video-list',
  model: Video,

  render: function() {
    this.$el.append(this.template());
    
    console.log(this.$el, 'the children of this');
    
    this.$el.children().last().addClass();
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
