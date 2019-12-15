<template>
  <div class="plan">
    <div class="sally free">
      <div>
        <div class="blabla">
          <p><vue-typer text="Tout d'abord, nous allons nous intéresser à la disposition de ton plan travail." :type-delay='40' :repeat='0'></vue-typer></p>
          <p><vue-typer text='Tu as devant toi :' :pre-type-delay='3500' :type-delay='40' :repeat='0'></vue-typer></p>
        </div>
        <div class="plan">
          <div>
            <div class="plan_content">
              <img src="../assets/img/mini-fuseau-guatambuSolo.png" />
              <div>Fuseaux (stylos)</div>
            </div>
            <div class="plan_content">
              <img src="../assets/img/BobineDeFils.jpg" />
              <div>Fils</div>
            </div>
            <div class="plan_content">
              <img src="../assets/img/I-Grande-88539-epingles-dentelle.net.jpg" />
              <div>Épingle</div>
            </div>
          </div>
          <div>
            <div class="plan_content">
              <img src="../assets/img/Torchon.jpeg" />
              <div>Coussin (ou torchon)</div>
            </div>
            <div class="plan_content">
              <img src="../assets/img/Model.jpeg" />
              <div>Modèles</div>
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/SallyIndications.svg">
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { VueTyper } from 'vue-typer'

export default {
  name: 'plan',
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
      display: flex;
      flex-direction: column;
      > div{
        display: flex;
        margin-top: 10vh;
      }
      &_content {
        width: 300px;
        height: 225px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        margin: auto;
        > * {
          margin: auto;
        }
        > img {
          width: 70%;
          height: 70%;
          object-fit: contain;
          display: block;
        }
      }
    }
  }
</style>
