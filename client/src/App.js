import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join'
import Chat from './components/Chat'

const App = () => (
    <Router>
        <Route path="/" eact component={Join} />
        <Route path="/chat" eact component={Chat} />

    </Router>
);

export default App;