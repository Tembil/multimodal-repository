import React, { Component } from 'react'
import { addTrack } from '../actions/track-actions';
import TracksContainer from '../containers/tracks-container';
import { connect } from 'react-redux';

const Tracks = ({ dispatch }) => {
    return (
        <div>
            <h1>Треки</h1>
            <button className="btn btn-primary btn-add" onClick={() => dispatch(addTrack())}>Добавить новый трек</button>
            <TracksContainer />
        </div>
    )
}

export default connect()(Tracks);