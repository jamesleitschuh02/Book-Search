import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/home" component={Search} />
                    <Route exact path="/saved" component={Saved} />
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;