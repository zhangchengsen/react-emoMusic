import * as actionsType from './constant'
const initialState = {
    songsDetail: {},
    playList: [],
    curSongIdx: 0,
    playMode: 0,
    lyric: []
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case actionsType.UPDATESONGSDETAIL:
            return { ...state, songsDetail: actions.data }
        case actionsType.UPDATEPLAYLIST:
            return { ...state, playList: [...state.playList, actions.data] }
        case actionsType.UPDATECURRENTSONGINDEX:
            return { ...state, curSongIdx: actions.data }
        case actionsType.UPDATEPLAYMODE:
            return { ...state, playMode: actions.data }
        case actionsType.UPDATELYRIC:
            return { ...state, lyric: [...actions.data] }
        case actionsType.UPDATELYRICIDX:
            return { ...state, lyricIdx: actions.data }
        default:
            return state
    }
}
export default reducer
