<template>
  <div class="fin">
    <div class="sally">
      <img src="../assets/Sally.png">
      <div class="blabla">
        <p><vue-typer text="Felicitation, tu as reussi ! Allez sally (t'as compris : Salut -> Sally, hihihi )" :type-delay='40' :repeat='0'></vue-typer></p>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { VueTyper } from 'vue-typer'

export default {
  name: 'fin',
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
        router.push('/', () => {})
      }
    }
  }
}
</script>
