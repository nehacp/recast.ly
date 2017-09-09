class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoPlayer: {id: { videoId: null}, snippet: {title: '', description: ''} },
      videoList: []
    };
  }

  onClickOfTitle(video) {
    this.setState({videoPlayer: video});
  }

  onSearch(videos) {
    this.setState({videoList: videos});  
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.videoPlayer}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} click={this.onClickOfTitle.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.searchYouTube(undefined, this.setState.bind(this));
  }

}

window.App = App;


ReactDOM.render(
  <App searchYouTube={window.searchYouTube}/>, 
  document.getElementById('app')
);
