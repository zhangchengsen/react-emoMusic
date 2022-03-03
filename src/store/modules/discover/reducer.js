import * as actionsType from "./constant"

const preState = {
    banner: [],
    hotList: [],
    album: [],
    rankInfo: {},
    topRankInfo: {},
    newRankInfo: {}
}
function reducer(state = preState, actions) {
    switch (actions.type) {
        case actionsType.UPDATEBANNER:
            return { ...state, banner: actions.data }
        case actionsType.UPDATEHOT:
            return { ...state, hotList: actions.data }
        case actionsType.UPDATEALBUM:
            return { ...state, album: actions.data }
        case actionsType.UPDATERANK:
            return { ...state, rankInfo: actions.data }
        case actionsType.UPDATENEWRANKING:
            return { ...state, topRankInfo: actions.data }
        case actionsType.UPDATETOPRANKING:
            return { ...state, newRankInfo: actions.data }

        default:
            return state
    }
}
export default reducer