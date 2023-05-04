// 请求封装

export const request = (url, method = 'GET', data = {}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      method,
      data,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}