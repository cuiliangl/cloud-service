<template>
  <section class="sina-cloud-container">
    <sinaHeader />
    <section class="sina-cloud-content">
      <sinaAside />
      <section class="sina-cloud-box">
        <main class="sina-cloud-main">
          <router-view></router-view>
        </main>
        <sinaFooter />
      </section>
    </section>
  </section>
</template>

<script>
import { sinaHeader, sinaAside, sinaFooter } from '@/components'

export default {
  name: 'app',
  components: {
    sinaHeader,
    sinaAside,
    sinaFooter
  }
}
</script>

<style lang="scss">
.sina-cloud-container {
  width: 100%;
  height: 100%;
  .sina-cloud-content {
    width: 100%;
    height: calc(100% - 70px);
    display: flex;
    padding: 20px 20px 0 0;
    .sina-cloud-box {
      flex: 1;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      margin-left: 20px;
      .sina-cloud-main {
        width: 100%;
        flex: 1;
        background-color: #fff;
        @include boxShadow();
        @include round(4);
        padding: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
