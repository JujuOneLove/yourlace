<template>
  <div class="etapes">
    <div class="sally free">
      <div>
        <div class="blabla">
          <p><vue-typer text="Les étapes vont t'être présentées sous un format vidéo. Tu pourras mettre sur pause pour prendre le temps de réaliser l'étape et remettre en route la vidéo pour continuer. Quand tu auras fini de suivre la vidéo : appuie sur la touche Entrée du clavier." :type-delay='40' :repeat='0'></vue-typer></p>
        </div>
        <div class="plan">
          <iframe v-if="store.fond === 'Motif 1'" width="560" height="315" src="https://www.youtube.com/embed/dCcZW3Urmcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe v-else-if="store.fond === 'Motif 2'" width="560" height="315" src="https://www.youtube.com/embed/a675VJ0t4M4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
