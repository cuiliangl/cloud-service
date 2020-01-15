/**
 * @file api
 * @author cuiliang
 * @since 2020.01.14
 */
import api from './apiList'

export default api
export const http = {
  install(Vue) {
    Vue.prototype.$http = api
  }
}
