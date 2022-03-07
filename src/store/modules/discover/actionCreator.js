import * as actionType from "./constant"
import { getBanner as requestBanner, getPerson, getAlbum as reqAlbum, getRank as reqRank } from '@/api/discover/recommend'

export const UpdateBanner = (list) => {
    return {
        type: actionType.UPDATEBANNER,
        data: list
    }
}
export const UpdateHot = (list) => {
    return {
        type: actionType.UPDATEHOT,
        data: list
    }
}
export const UpdateAlbum = (list) => {
    return {
        type: actionType.UPDATEALBUM,
        data: list
    }
}
export const UpdateRank = rankInfo => ({
    type: actionType.UPDATERANK,
    data: rankInfo
})
export const UpdateTopRanking = rankInfo => ({
    type: actionType.UPDATETOPRANKING,
    data: rankInfo
})
export const UpdateNewRanking = rankInfo => ({
    type: actionType.UPDATENEWRANKING,
    data: rankInfo
})
export const getBanner = dispatch => {
    requestBanner().then(res => {
        dispatch(UpdateBanner(res.banners))
    }).catch(err => {
        console.log(err)
    })
}
export const getHot = (limit) => {
    return (dispatch) => {
        getPerson(limit).then(res => {
            console.log('hot', res.result)
            dispatch(UpdateHot(res.result))
        }).catch(err => {
            console.log(err)
        })
    }
}
export const getAlbum = (limit) => {
    return (dispatch) => {
        reqAlbum(limit).then(res => {
            dispatch(UpdateAlbum(res.albums))
        }).catch(err => {
            console.log(err)
        })
    }
}
export const getRank = (idx) => {
    return (dispatch) => {
        switch (idx) {
            case 0:
                reqRank(idx).then(res => {
                    dispatch(UpdateRank(res.playlist))
                })
                break;
            case 2:
                reqRank(idx).then(res => {
                    dispatch(UpdateNewRanking(res.playlist))
                })
                break;
            case 3:
                reqRank(idx).then(res => {
                    dispatch(UpdateTopRanking(res.playlist))
                })
                break;
            default:
                break;
        }
    }
}
