var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'key': window.YOUTUBE_API_KEY,
      'q': query,
      'maxResults': 5,
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

