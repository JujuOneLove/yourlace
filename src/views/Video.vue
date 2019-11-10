<template>
  <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rrL-mYRoLqg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="sally">
      <img src="../assets/Sally.png">
      <div class="blabla">
        <p><vue-typer text='[Explication Video]' :type-delay='40' :repeat='0'></vue-typer></p>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { VueTyper } from 'vue-typer'

export default {
  name: 'video',
  components: {
    VueTyper
  },
  mounted () {
    window.addEventListener('keypress', this.nextPage)
  },
  beforeDestroy () {
    window.removeEventListener('keypress', this.nextPage)
  },
  methods: {
    nextPage (e) {
      if ((e.keyCode === 13) || (e.keyCode === 32)) {
        router.push('/motifs', () => {})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .video {
    display: flex;
    flex-direction: row;
    position: relative;
    iframe {
      position: absolute;
      top: -55px;
      left: 0;
      right: 25%;
      display: block;
      margin: auto;
    }
    .sally {
      width: 100%;
      text-align: right;
      img {
        margin-right: 10%;
      }
    }
  }
</style>
