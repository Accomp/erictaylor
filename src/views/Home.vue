<template>
  <div class="c-home">
    <Intro />
    <Portfolio />
    <Experience />
    <Social />
  </div><!-- /.c-home -->
</template>

<script>
import Intro from '@/components/Intro.vue';
import Portfolio from '@/components/Portfolio.vue';
import Experience from '@/components/Experience.vue';
import Social from '@/components/Social.vue';

export default {
  name: 'home',
  components: {
    Intro,
    Portfolio,
    Experience,
    Social,
  },
};
</script>

<style lang="scss" scoped>
</style>
