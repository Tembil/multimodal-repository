let trackId = 0;

export const addTrack = () => ({
    type: 'ADD_TRACK',
    trackType: 'Video',
    trackId: trackId++
});

export const deleteTrack = (trackId) => ({
    type: 'DELETE_TRACK',
    trackId: trackId
})

export const changeTrackType = (trackId, type) => ({
    type: 'CHANGE_TRACK_TYPE',
    trackId: trackId,
    trackType: type
})