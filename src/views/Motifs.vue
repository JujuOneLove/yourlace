<template>
  <div class="motifs">
    <div class="sally">
      <img src="../assets/Sally.png">
      <div class="blabla">
        <p v-if="hasFond === false">
          <vue-typer
            text='Parmi ces quatre motifs, choisi celui que tu préfères. Je vais t’enseigner comment le réaliser étape par étape.'
            :type-delay='40' :repeat='0'></vue-typer>
        </p>
        <p v-else>
          <vue-typer :text=getTextFond :type-delay='40' :repeat='0'></vue-typer>
        </p>
      </div>
    </div>
    <div class="fonds">
      <div class="fond" v-on:click="store.addFond('Fond 1')">
        <img class="fond__img" src="../assets/img/0-Base.jpg"/>
        <div class="fond__content">
          <div>Fond 1 :</div>
          <div>Filoche</div>
        </div>
      </div>
      <div class="fond" v-on:click="store.addFond('Fond 2')">
        <img class="fond__img" src="../assets/img/0-Carre.jpg"/>
        <div class="fond__content">
          <div>Fond 2 :</div>
          <div>Dieppe Triple</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import router from '@/router'
import { VueTyper } from 'vue-typer'

export default {
  name: 'motifs',
  components: {
    VueTyper
  },
  data: function () {
    return {
      store
    }
  },
  computed: {
    hasFond () {
      return store.fond !== null
    },
    getTextFond () {
      return `Tu as choisi le ${store.fond}. Maintenant, tu peux prendre les fuseaux et suivre les indications. C est parti !`
    }
  },
  mounted () {
    window.addEventListener('keypress', this.nextPage)
  },
  beforeDestroy () {
    window.removeEventListener('keypress', this.nextPage)
  },
  methods: {
    nextPage (e) {
      if (store.fond !== null && ((e.keyCode === 13) || (e.keyCode === 32))) {
        router.push('/plan-1', () => {
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .motifs {
    display: flex;
    flex-direction: row;
    position: relative;

    div.fonds {
      display: flex;
      position: absolute;
      width: 65%;
      top: 75px;
      left: auto;
      right: 10%;
      margin: auto;

      .fond {
        border: 1px solid grey;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        padding: 25px;
        cursor: pointer;
        margin: 10px;
        width: 250px;
        height: 250px;

        &:first-child {
          margin-left: auto;
        }

        &__img {
          width: 150px;
          height: 150px;
          display: block;
          margin: auto;
        }

        &__content {
          margin-left: 10px;
        }
      }
    }

    .sally {
      width: 100%;
      text-align: left;

      img {
        margin-left: 10%;
      }
    }
  }
</style>
