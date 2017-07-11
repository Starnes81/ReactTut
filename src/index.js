import React from 'react';
import ReactDOM from 'react-dom';

// New component to produce html

const App = () => {
	return <div>Hi!</div>;
}
 
// display components html on a page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

hello again