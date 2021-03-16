import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
}

export default App;