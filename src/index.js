import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import swapiStore from './stores/swapi';
import Home from './components/home/Home';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import './index.css';

ReactDOM.render(
    <Provider store={swapiStore}>
        <Router>
            <div className="main">
                <Route path="/" component={Home}/>
                <Route path="/:listEndpoint" exact component={List}/>
                <Route path="/:listEndpoint/:detailId" exact component={Detail}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
