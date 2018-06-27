var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  // needs to be defined... the models will inherit this url 
  // as the starting point when they construct their own url
  // with id added.

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
  
  //pass query from view
  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true',
      }
    });
    
  },
  
  parse: function(response) {
    return response.results;
  }
  
});
