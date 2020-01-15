/**
 * @file apiList
 * @author cuiliang
 * @since 2019.02.22
 */

import { post } from './option'

const account = url => `/account/${url}.json`

/* eslint-disable */

export default {
  login             :   data => post(account('login'), data, null, true),         // 登录
  logout            :   data => post(account('logout'), data)                     // 退出
}

/* eslint-ensable */
