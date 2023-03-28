<template>
  <div class="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Carpark Lots</strong></router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">Home</router-link>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) Alvin Yeoh 2023</p>
    </footer>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import '../node_modules/bulma';
</style>
