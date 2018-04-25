import React from 'react'
import './app.css'
import Facets from "./Facets";
import Tickets from "./Tickets";
import Affix from "../components/Affix";


const App = () => (
    <div className="main">
        <div className="header">
            <a href="/" className="header__logo">
                <span className="logo"></span>
            </a>
        </div>
        <div className="container">
            <Affix className="left-panel-wrapper" offset={150}>
                <Facets />
            </Affix>
            <div className="content-wrapper">
                <Tickets />
            </div>
        </div>
    </div>
);

export default App
