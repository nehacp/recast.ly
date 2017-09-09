class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoPlayer: {id: { videoId: null}, snippet: {title: '', description: ''} },
      videoList: [],
      search: 'react',
    };
  }

  onClickOfTitle(video) {
    this.setState({videoPlayer: video});
  }

  handleClick(searchFor) { 
    let input = document.querySelector('.form-control');
    let search = input ? input.value : null;
    _.debounce(() => {
      this.props.searchYouTube(search, this.setState.bind(this));
    }, 500)();
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search click={this.handleClick.bind(this)}/></div>
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
    this.props.searchYouTube(this.state.search, this.setState.bind(this));
  }

}

window.App = App;


ReactDOM.render(
  <App searchYouTube={window.searchYouTube}/>, 
  document.getElementById('app')
);
