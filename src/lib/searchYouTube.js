var searchYouTube = (query, callback) => {

  var params = {
    'key': window.YOUTUBE_API_KEY,
    'q': query,
    'maxResults': '5',
    'type': 'video',
    'videoEmbeddable': 'true',
    'part': 'snippet'
  }; 

  let request = new URL('https://www.googleapis.com/youtube/v3/search');

  for (var key in params) {
    request.searchParams.append(key, params[key]);
  }

  fetch(request)
  .then(response => response.json())
  .then(data => callback({videoList: data.items, videoPlayer: data.items[0]}))
  .catch((response) => console.log('failed request', response));

// $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: {
  //     'key': window.YOUTUBE_API_KEY,
  //     'q': query,
  //     'maxResults': 5,
  //     'type': 'video',
  //     'videoEmbeddable': 'true',
  //     'part': 'snippet'
  //   },
  //   success: (data) => { 
  //     callback({videoList: data.items, videoPlayer: data.items[0]});
  //   },
  //   error: () => {
  //     console.log('failed request');
  //   }
  // });
};

window.searchYouTube = searchYouTube;

