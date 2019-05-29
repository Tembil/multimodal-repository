const tracks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TRACK': {
            return [
                ...state, {
                    trackId: action.trackId,
                    trackType: action.trackType
                }
            ]
        }
        case 'DELETE_TRACK': {
            return [
                ...state.filter(track => track.trackId !== action.trackId)
            ]
        }
        case 'CHANGE_TRACK_TYPE': {
            state.forEach(t => {
                if (t.trackId === action.trackId) {
                    t.trackType = action.trackType;
                }
            })
            return [...state];
        }
        default:
            return state;
    }
}

export default tracks;