<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/UXD2-YourLace-Jihui_Xinyue_Florine-10.svg">
    <div class="instruction">
      Appuyez sur la touche " Entrée " de votre clavier pour passer à l'écran suivant
      <img src="../assets/ToucheEntree.svg" />
    </div>
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
        router.push('/about', () => {
        })
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
    img {
      width: 100%;
      max-width: 1400px;
    }
    .instruction {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 5vh;
      margin: auto;
      color: grey;
      font-weight: 500;
      font-size: 25px;
      img {
        position: relative;
        top: 30px;
        width: 40px;
        object-fit: contain;
        display: inline-block;
      }
    }
  }
</style>
