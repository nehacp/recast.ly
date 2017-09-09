var searchYouTube = (options, callback) => {
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
      console.log('received data', data);
      callback(data.items);
    },
    error: () => {
      console.log('failed request');
    }
  });
};

window.searchYouTube = searchYouTube;
// 'masxResults': '5',
//     'q': 
//     'part': 'snippet',
//     'videoEmbeddl':
//{ key: 'API_KEY', query: 'cats', max: 10 }