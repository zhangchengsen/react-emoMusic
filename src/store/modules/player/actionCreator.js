import * as actionsTypes from './constant'
import { getSongsDetail, getLyric as reqLyric } from '@/api/player'

export const UpdatePlayList = list => ({
    type: actionsTypes.UPDATEPLAYLIST,
    data: list
})
export const UpdateCurrentSongIndex = idx => ({
    type: actionsTypes.UPDATECURRENTSONGINDEX,
    data: idx
})

export const UpdatePlayMode = mode => ({
    type: actionsTypes.UPDATEPLAYMODE,
    data: mode
})
export const UpdateLyricIdx = idx => ({
    type: actionsTypes.UPDATELYRICIDX,
    data: idx
})

export const UpdateLyric = lyrics => ({
    type: actionsTypes.UPDATELYRIC,
    data: lyrics
})

export const GetLyric = () => {
    return (dispatch, getState) => {
        const id = getState().player.songsDetail.id
        if (id) {
            const reg = /\[(\d{2}):(\d{2}).(\d{3})\]/
            let regRes = []
            reqLyric(id).then(res => {
                let lineString = res.lrc.lyric.split('\n')
                for (let line of lineString) {
                    let lineRes = reg.exec(line)
                    if (!lineRes) continue
                    const time = lineRes[1] * 60 * 1000 + lineRes[2] * 1000 + (lineRes[3].length === 3 ? lineRes[3] * 1 : lineRes[3] * 10)
                    const content = line.replace(reg, '').trim()
                    regRes.push({ time, content })
                }
                console.log(regRes)
                dispatch(UpdateLyric(regRes))
            })
        }

    }
}

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
                    dispatch(UpdateCurrentSongIndex(getState().player.playList.length - 1))
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