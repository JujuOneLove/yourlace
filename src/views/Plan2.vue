<template>
  <div class="plan">
    <div class="sally free">
      <div>
        <div class="blabla">
          <p><vue-typer text="Nous allons procédé à l'installation de ton plan de travail : dispose les éléments comme présenté ci-dessous." :type-delay='40' :repeat='0'></vue-typer></p>
        </div>
        <div class="plan">
          <img src="../assets/img/PlanDeTravail.jpeg" />
        </div>
      </div>
      <img src="../assets/Sally.png">
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { VueTyper } from 'vue-typer'

export default {
  name: 'plan-2',
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
        router.push('/etapes', () => {})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .plan {
    .plan {
      margin-top: 10vh;
      img {
        width: 50%;
        display: block;
        margin: auto;
      }
    }
  }
</style>
