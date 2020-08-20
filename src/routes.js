import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = lazy(()=>import('./pages/Home'));

const Routing = props => {
    return(
        <Suspense fallback={<div/>}>
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        </Suspense>
    )
}

export default Routing;