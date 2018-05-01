import React from 'react';
import './App.css';
import CommentListContainer from './CommentListContainer';
import DevTools from './DevTools';

const App = () => {
    return (
        <div className="App">
      		<CommentListContainer/>
      		<DevTools/>
    	</div>
    );
};

export default App;