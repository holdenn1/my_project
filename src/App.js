import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <Router>
        <div>
            <Header/>
            <div className="wrapper">
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'>
                        <Dialogs/>
                    </Route>
                    <Route path='/profile'>
                        <Profile/>
                    </Route>
                </div>
            </div>
        </div>
        </Router>
    );
}

export default App;
