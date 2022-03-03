export const imageFormater = (img, size = 130) => {
    return img + `?param=${size}x${size}`
}
export const countFormater = (num) => {
    if (num / 100000000 > 1) return Math.floor(num / 10000000) / 10 + '亿'
    else if (num / 10000 > 1) return Math.floor(num / 1000) / 10 + '万'
    return num
}
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};

export function formatMonthDay(time) {
    return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
    return formatDate(time, "mm:ss");
}

export function formatDate(time, fmt) {
    let date = new Date(time);

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
export const getMusic = (ids) => {
    return `https://music.163.com/song/media/outer/url?id=${ids}.mp3`
}