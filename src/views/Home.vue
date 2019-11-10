<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg">
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'home',
  mounted () {
    window.addEventListener('keypress', this.nextPage)
  },
  beforeDestroy () {
    window.removeEventListener('keypress', this.nextPage)
  },
  methods: {
    nextPage (e) {
      if ((e.keyCode === 13) || (e.keyCode === 32)) {
        router.push('/about', () => {})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    h1 {
      text-align: center;
      font-size: 4em;

      > div {
        font-size: 1.2em;
      }
    }
  }
</style>
