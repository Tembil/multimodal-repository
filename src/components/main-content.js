import React, { Component } from 'react'
import Header from './headers';
import '../styles/main-content.css';
import { Switch, Route } from 'react-router';
import HomePage from './home-page';
import Experiments from './experiments';
import Datasets from './datasets';
import Publications from './publications';
import Customers from './customers';
import Teams from './teams';
import Collections from './collections';
import Competitions from './competitions';
import ExtendedSearch from './extended-search';
import Tracks from './tracks';
import Auth from './auth';

const MainContent = () => {
    return (
        <div className="main-content">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/Auth" component={Auth} />
                <Route path="/Datasets" component={Datasets} />
                <Route path="/Experiments" component={Experiments} />
                <Route path="/Publications" component={Publications} />
                <Route path="/Customers" component={Customers} />
                <Route path="/Teams" component={Teams} />
                <Route path="/Collections" component={Collections} />
                <Route path="/Competitions" component={Competitions} />
                <Route path="/ExtendedSearch" component={ExtendedSearch} />
                <Route path="/Tracks" component={Tracks} />
            </Switch>
        </div>
    )
}

export default MainContent;