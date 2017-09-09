var defaults = {
  key: window.YOUTUBE_API_KEY,
  query: 'react',
  max: 5
};

var searchYouTube = (options = defaults, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'key': options.key,
      'q': options.query,
      'maxResults': options.max,
      'type': 'video',
      'videoEmbeddable': 'true',
      'part': 'snippet'
    },
    success: (data) => { 
      callback({videoList: data.items, videoPlayer: data.items[0]});
    },
    error: () => {
      console.log('failed request');
    }
  });
};

window.searchYouTube = searchYouTube;

