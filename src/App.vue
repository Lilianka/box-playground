<template>
  <div class="app">
    <div class="nav nav__flex">
      <router-link to="/" class="title__big">
          Flex
      </router-link> |
      <router-link to="/grid" class="title__big">
          Grid
      </router-link> |
      <router-link to="/play-ground" class="title__big">
          PlayGround
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .nav {
    padding: 30px;

    &__flex {
      display: flex;
      align-items: center;
    }

    a {
      text-decoration: none;
      padding: 0 10px;
      color: #000;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .title {
    &__big {
      font-family: 'Fredoka One', cursive;
      font-size: 2rem;
    }
  }
</style>
