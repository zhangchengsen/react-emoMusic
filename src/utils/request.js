import axios from 'axios';
export const baseURL = 'http://123.207.32.32:9001/'
// axios.defaults.baseURL = "/api";
// export const tryURL = '/api'
const instance = axios.create({
	baseURL,
	timeout: 8000
});
instance.interceptors.request.use(config => {
	return config
}, err => {
	console.log('来到了request拦截failure中');
	return err
})

instance.interceptors.response.use(response => {
	return response.data
}, err => {
	if (err && err.response) {
		switch (err.response.status) {
			case 400:
				err.message = '请求错误'
				break
			case 401:
				err.message = '未授权的访问'
				break
			default:
				err.message = "其他错误信息"
		}
	}
	return err
})


const request = (url, method, data = {}) => {
	return instance({
		method,
		url,
		[method.toLowerCase() === 'get' ? 'params' : 'data']: data
	})
}
export default request
// const tryInstance = axios.create({
// 	// baseURL: tryURL,
// 	timeout: 8000
// });
// tryInstance.interceptors.request.use(config => {
// 	console.log(config)

// 	return config
// }, err => {
// 	console.log('tryInstance请求失败', err);
// 	return err
// })

// tryInstance.interceptors.response.use(response => {
// 	return response.data
// }, err => {
// 	console.log('来到了response拦截failure中');
// 	console.dir(err);
// 	if (err && err.response) {
// 		switch (err.response.status) {
// 			case 400:
// 				err.message = '请求错误'
// 				break
// 			case 401:
// 				err.message = '未授权的访问'
// 				break
// 			default:
// 				err.message = "其他错误信息"
// 		}
// 	}
// 	return err
// })

// export const tryRequest = (url, method, data = {}) => {
// 	return tryInstance({
// 		method,
// 		url,
// 		[method.toLowerCase() === 'get' ? 'params' : 'data']: data
// 	})
// }