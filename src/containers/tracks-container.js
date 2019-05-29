import React, { Component } from 'react'
import { connect } from 'react-redux';
import Track from '../components/track';

const TracksContainer = ({ tracks }) => {
    return (
        <div>
            {tracks.map(track =>
                <Track key={track.trackId}
                    trackId={track.trackId}
                    trackType={track.trackType}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tracks: state.tracks
})


export default connect(mapStateToProps)(TracksContainer)