import request from '@/utils/request'
export const getBanner = () => {
    return request('/banner', 'get')
}
export const getPerson = (limit) => {
    return request('/personalized', 'get', { limit })
}
export const getAlbum = (limit) => {
    return request(`/top/album?limit=${limit}`, 'get')
}
export const getRank = (idx) => {
    return request(`/top/list?idx=${idx}`, 'get')
}