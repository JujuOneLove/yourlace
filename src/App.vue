<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
    display: flex;

    > div {
      width: 100%;
      margin: auto
    }

    div, p {
      font-size: 30px;
    }
  }

  .sally {
    img {
      width: 450px;
    }

    .blabla {
      min-height: 100px;
      position: relative;
      top: -125px;

      .char {
      }
    }

    &.free {
      display: flex;

      .blabla {
        position: initial;
      }

      > div {
        width: 75%;
      }

      img {
        object-fit: contain;
        object-position: top;
        width: 25%;
      }
    }
  }

  .blabla {
    border: 1px solid grey;
    border-radius: 25px;
    background: white;
    padding: 10px 20px;
    width: 90%;
    margin: auto;
    text-align: left;
  }

  .vue-typer .custom.caret {
    display: none;
  }
</style>
