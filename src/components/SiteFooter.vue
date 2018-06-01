<template>
  <footer class="c-site-footer">
    <div class="u-wrapper">
      <p class="c-site-footer__text" role="contentinfo">&copy; {{ getYear() }}. Build by <a href="https://www.linkedin.com/in/ericbtaylorjr" title="View Eric Taylor on LinkedIn" target="_blank">Eric Taylor</a><br />Design by <a href="http://www.kolszewski.com" title="View the portfolio of Kris Ellery" target="_blank">Kris Ellery</a></p>
    </div><!-- /.u-wrapper -->
  </footer><!-- /.c-site-footer -->
</template>

<script>
export default {
  name: 'SiteFooter',
  methods: {
    getYear() {
      return (new Date()).getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
  .c-site-footer {
    background: map-get($colors, gray--dark);
    color: map-get($colors, white);
    font-weight: 400;
    padding: map-get($spacing, med);

    .c-site-footer__text {
      font-size: .857em; // 14 > 12
      line-height: 2; // 12 > 24
      margin: 0;
      text-align: center;
    } // .c-site-footer__text
  } // .c-site-footer
</style>
