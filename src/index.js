import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDBVE9LSaCcU-K71xCnjn-XrBSqJCWMxvo';




class App extends Component {
constructor(props) {
	super(props);

	this.state = { videos: [] };
	// start search
	YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		//update state
		this.setState ({ videos });
		// this.setState ({ videos: videos});
	});
}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}
 
// display components html on a page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
