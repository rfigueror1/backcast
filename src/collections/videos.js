var Videos = Backbone.Collection.extend({

  model: Video,
  url: '',

  // send ajax requests from here?
  // first use the sample data
  initalize: function() {
    // var data = exampleVideoData;
    // console.log('Videos Collection Initialized');
    // var data = window.exampleVideoData;
    // console.log(data, 'data');
    console.log(this.model);
    // this.fetch();
  },
  
});
