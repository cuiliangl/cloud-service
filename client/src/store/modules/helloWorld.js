/**
 * @file helloWorld
 * @author cuiliang
 * @since 2020.01.14
 */

import {
  HOME_HELLO_WORLD_GET_USERINFO
} from '../mutations'

export default {
  state: {
    helloWorld: 'hello world'
  },
  mutations: {
    [HOME_HELLO_WORLD_GET_USERINFO](state, payload) {
      state.helloWorld = payload
    }
  },
  getters: {

  },
  actions: {
    homeHelloWorldGetUserInfo({ commit }, payload) {
      commit(HOME_HELLO_WORLD_GET_USERINFO, payload)
    }
  }
}
