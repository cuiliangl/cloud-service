<template>
  <div>
    <h1>{{helloWorld}}</h1>
    <ul>
      <li
        v-for="({key, mockTitle, mockContent}) in list"
        :key="key"
      >{{mockTitle}} --- {{mockContent}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'helloWorld',
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapState({
      helloWorld: state => state.helloWorld.helloWorld
    })
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch('homeHelloWorldGetUserInfo', 'hello vuex')
    }, 2000)

    this.login()
  },
  methods: {
    async login() {
      try {
        const rest = await this.$http.logout({})
        this.list = rest
      } catch {}
    }
  }
}
</script>
