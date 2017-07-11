import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDBVE9LSaCcU-K71xCnjn-XrBSqJCWMxvo';

// New component to produce html

const App = () => {
	return <div>Hi!</div>;
}
 
// display components html on a page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

hello again