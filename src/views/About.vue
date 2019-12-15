<template>
  <div class="about">
    <div class="sally">
      <img src="../assets/Sally.png">
      <div class="blabla">

        <p>
          <vue-typer text='Salut ! Je suis Sally.' :type-delay='40' :repeat='0'></vue-typer>
        </p>

        <p>
          <vue-typer
            text='Aujourd’hui, nous allons découvrir ensemble le monde magnifique du tissage. Tu es prêt ? Cest parti!'
            :pre-type-delay='2000' :type-delay='40' :repeat='0'></vue-typer>
        </p>

        <p class="bold">
          <vue-typer text="Appuyez sur la touche ''Entrée'' de votre clavier pour passer à l'écran suivant"
                     :pre-type-delay='8000' :type-delay='40' :repeat='0'></vue-typer>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { VueTyper } from 'vue-typer'

export default {
  name: 'about',
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
        router.push('/motifs', () => {
        })
      }
    }
  }
}
</script>
