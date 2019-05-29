import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeTrackType, deleteTrack } from '../actions/track-actions';
import '../styles/track.css';

const Track = ({ trackId, trackType, dispatch }) => {
    let sticks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
       ];
    return (
        <div>
            <div className="track">
              
            </div>
            <div className="track-tools">

                <div>
                    <button className="btn btn-success">Загрузить видео</button>
                    <button className="btn btn-success btn-add">Загрузить трек</button>
                </div>
                <div>
                    <button className="btn btn-warning">Сохранить трек</button>
                    <button className="btn btn-danger btn-add" onClick={() => dispatch(deleteTrack(trackId))}>Удалить трек</button>
                </div>
            </div>
        </div>
    )
}

function changeType(dispatch, trackId, selected) {
    let trackType = selected.target.value;
    dispatch(changeTrackType(trackId, trackType));
}

export default connect()(Track);