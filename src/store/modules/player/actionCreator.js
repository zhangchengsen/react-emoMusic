import * as actionsTypes from './constant'
import { getSongsDetail } from '@/api/player'

export const UpdatePlayList = list => ({
    type: actionsTypes.UPDATEPLAYLIST,
    data: list
})
export const UpdateCurrentSongIndex = idx => ({
    type: actionsTypes.UPDATECURRENTSONGINDEX,
    data: idx
})

export const GetSongsDetail = (ids) => {
    return (dispatch, getState) => {
        let index = getState().player.playList.findIndex(v => v.id === ids)
        if (index !== -1) {
            dispatch(UpdateCurrentSongIndex(index))
            dispatch(UpdateSongsDetail(getState().player.playList[index]))
        }
        else {
            getSongsDetail(ids).then(res => {
                if (res?.songs[0]) {
                    dispatch(UpdateSongsDetail(res.songs[0]))
                    dispatch(UpdatePlayList(res.songs[0]))
                    dispatch(UpdateCurrentSongIndex(getState().player.playList[index].length - 1))
                }
            })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
export const UpdateSongsDetail = data => {
    return {
        type: actionsTypes.UPDATESONGSDETAIL,
        data
    }
}