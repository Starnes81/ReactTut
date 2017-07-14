import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDBVE9LSaCcU-K71xCnjn-XrBSqJCWMxvo';




class App extends Component {
constructor(props) {
	super(props);

	this.state = { 
		videos: [],
		selectedVideo: null
	};
	// start search
	this.videoSearch('surfboards');
}

videoSearch(term) {
	YTSearch({key: API_KEY, term: term}, (videos) => {
		//update state
		this.setState ({ 
			videos: videos,
			selectedVideo: videos[0]
		});
	});
}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}
 
// display components html on a page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
