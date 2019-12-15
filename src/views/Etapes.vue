<template>
  <div class="etapes">
    <div class="sally free">
      <div>
        <div class="blabla">
          <p><vue-typer text="Blabla etapes." :type-delay='40' :repeat='0'></vue-typer></p>
        </div>
        <div class="plan">
          <iframe v-if="store.fond === 'Fond 1'" width="560" height="315" src="https://www.youtube.com/embed/nkPXIdtc1fY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe v-else-if="store.fond === 'Fond 2'" width="560" height="315" src="https://www.youtube.com/embed/-LyVjHeCLDw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <img src="../assets/SallyIndications.svg">
    </div>
  </div>
</template>

<script>
import store from '../store'
import router from '@/router'
import { VueTyper } from 'vue-typer'

export default {
  name: 'etapes',
  data: function () {
    return {
      store
    }
  },
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
        router.push('/fin', () => {})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .etapes {
    .plan {
      margin-top: 10vh;
      img,video {
        width: 75%;
        display: block;
        margin: auto;
      }
      iframe {
        margin: auto;
        margin-top: 20vh;
        display: block;
        transform: scale(1.8);
      }
    }
  }
</style>
