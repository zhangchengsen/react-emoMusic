import request from "@/utils/request"
export const getSongsDetail = (ids) => {
    return request('/song/detail', 'get', { ids })
}