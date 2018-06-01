<template>
  <div class="c-site-wrapper" id="app">
    <SiteHeader />
    <main class="c-site-main" id="main">
      <router-view />
    </main>
    <SiteFooter />
  </div><!-- /.class="c-site-wrapper" -->
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default {
  name: 'home',
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style lang="scss">
  @import './styles/main';
</style>

<style lang="scss" scoped>
  .c-site-wrapper {
    min-width: 320px;
    overflow: hidden;
  } // .c-site-wrapper
  .c-site-main {
    padding-top: 60px;
  } // .c-site-main
</style>
