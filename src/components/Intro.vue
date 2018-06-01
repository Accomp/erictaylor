<template>
  <div class="c-intro">
    <div class="u-wrapper">
      <h2 class="c-intro__title">
        <span class="c-intro__title-accent">UI Manager. </span>
        <br />Front-End Development.
        <br />User Experience.
      </h2>
    </div><!-- /.u-wrapper -->
    <!-- Intro image credit: http://imgur.com/gallery/SELjK-->
  </div><!-- /.c-intro -->
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style lang="scss" scoped>
  .c-intro {
    background: map-get($colors, gray--dark) url('/images/bg-intro_forest--mobile.jpg') left bottom no-repeat;
    background-size: cover;
    padding: 100px 0;
    text-align: center;

    @include mq(sm) {
      background-image: url('/images/bg-intro_forest.jpg');
      background-position: center bottom;
      text-align: left;
    } // mq.sm

    .c-intro__title {
      border: 0;
      color: map-get($colors, white);
      font-size: 3em; // 14 > 42
      line-height: 1.428; // 42 > 60
      margin: 0;
      padding: 0;
      text-shadow: 2px 2px 0 rgba(map-get($colors, black), .8);

      @include mq(sm) {
        font-size: 3.857em; // 14 > 54
      } // mq.sm

      @include mq(med) {
        font-size: 4.571em; // 14 > 64
      } // mq.sm

      @include mq(lg) {
        font-size: 5.286em; // 14 > 74
      } // mq.lg
    } // .c-intro__title

    .c-intro__title-accent {
      color: map-get($colors, brand-1);
    } // .c-intro__title-accent
  } // .c-intro
</style>
