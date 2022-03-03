import * as actionsType from './constant'
const initialState = {
    songsDetail: {},
    playList: [],
    curSongIdx: 0
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case actionsType.UPDATESONGSDETAIL:
            return { ...state, songsDetail: actions.data }

        default:
            return state
    }
}
export default reducer
