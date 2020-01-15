/**
 * @file axion全局配置
 * @author cuiliang
 * @since 2020.01.14
 */

import axios from 'axios'
import { Loading, Message } from 'element-ui'
import { getUrlKey } from '@/utils'

const baseURL = process.env.VUE_APP_BASEURL

/* mock数据 */
// const baseURL = 'http://127.0.0.1:3000'

// 创建axios实例
const instance = axios.create({
  baseURL,
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
})
let loadingInstance

// 请求拦截器
instance.interceptors.request.use(config => {
  const chnlCode = getUrlKey('channel') || ''
  const { method, params, data, silence } = config
  const request = {
    JsRequestJson: {
      head: {
        chnlCode,
        feVersion: '1',
        startDateTime: new Date().toLocaleString(),
        requestId: `${Date.now()}-${Math.random()}`
      },
      body: method === 'get' ? params : data
    }
  }

  method === 'get' ? config.params = request : config.data = request

  if (!silence) {
    loadingInstance = Loading.service({
      text: '加载中...'
    })
  }

  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
/* eslint-disable */
instance.interceptors.response.use(response => {
  loadingInstance?.close()

  let message
  const { status, data, config: { toast } } = response

  if (status === 200) {
    const { body, head: { code, msg } } = data

    if (code === '0') {
      if (toast) {
        if (typeof toast === 'string') {
          message = toast
        }
        message = msg
        Message.success(message)
      }
      return body
    }
    message = msg
  } else if (status >= 500) {
    message = '服务器出错了'
  }
  Message.warning(message)

  return Promise.reject(message)
}, error => {
  loadingInstance?.close()
  Message.error(JSON.stringify(error))

  return Promise.reject(error)
})
/* eslint-ensable */

/**
 * get请求
 * @param {String} url
 * @param {Object} params
 * @param {Boolean || Number} silence 是否静默（不开启loading），默认开启
 */
export const get = (url, params = {}, silence, headers = {}) => {
  return instance({
    method: 'get',
    url,
    params,
    silence,
    headers
  })
}

/**
 * post请求
 * @param {String} url
 * @param {Object} data
 * @param {Boolean || Number} silence
 * @param { Boolean || String } toast 操作成功提示的信息，参数为true，提示接口的msg，或自定义内容。默认false
 */
export const post = (url, data = {}, silence, toast) => {
  return instance({
    method: 'post',
    url,
    data,
    silence,
    toast
  })
}
