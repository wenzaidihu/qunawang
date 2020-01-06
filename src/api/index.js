const baseUrl = window.location.origin

const apiPath = '/static/mock'

export const getCityInfoApi = `${baseUrl}${apiPath}/city.json`

export const getDetailInfoApi = `${baseUrl}${apiPath}/detail.json`

export const getHomeInfoApi = city => `${baseUrl}${apiPath}/index.json?city=${city}`
