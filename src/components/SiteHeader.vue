<template>
  <header class="c-site-header" role="banner">
    <div class="u-wrapper">
      <a href="/" title="Refresh portfolio">
        <h1 class="c-site-header__title">Eric Taylor</h1>
      </a>
      <nav class="c-site-header__navigation" v-bind:class="{ 'is-open': navOpen }">
        <h2 class="c-site-header__navigation-title">Primary navigation</h2>
        <ul class="c-site-header__navigation-list">
          <li class="c-site-header__navigation-list-item" v-for="item in items" :key="item.name">
            <a class="c-site-header__navigation-link" href="#" @click="navScroll(item, $event)" :title="item.text" :data-anchor="item.section">{{ item.text }}</a>
          </li><!-- /.c-site-header__navigation-list-item -->
        </ul><!-- /.c-site-header__navigation-list -->
      </nav><!-- /.c-site-header__navigation -->
      <button class="c-site-header__toggle-nav" v-bind:class="{ 'is-open': navOpen }" @click="navOpen = !navOpen">
        <span class="c-site-header__toggle-nav-text">Toggle navigation</span>
      </button><!-- /.c-site-header__toggle-nav -->
    </div><!-- /.u-wrapper -->
  </header><!-- /.c-site-header -->
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      items: [
        {
          section: 'c-site-wrapper',
          text: 'Home',
        },
        {
          section: 'c-portfolio',
          text: 'Portfolio',
        },
        {
          section: 'c-experience',
          text: 'Experience',
        },
        {
          section: 'c-social',
          text: 'Contact',
        },
      ],
      navOpen: false,
    };
  },
  methods: {
    navScroll(item, e) {
      e.preventDefault();
      this.navOpen = false;
      const x = '.' + item.section;
      document.querySelector(x).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .c-site-header {
    @include clearfix();
    background: map-get($colors, white);
    border-top: 4px solid map-get($colors, brand-1);
    box-shadow: 0 4px 0 0 rgba(map-get($colors, black), .15);
    height: 60px;
    min-width: 320px;
    padding-top: 6px;
    position: fixed;
    width: 100%;
    z-index: 5;

    .c-site-header__title {
      color: map-get($colors, black);
      float: left;
      font-size: 1em; // 14
      margin: 0;
      padding: map-get($spacing, sm) map-get($spacing, sm) map-get($spacing, sm) 44px;
      position: relative;

      &:before {
        background: url('/images/avatar-small.jpg') no-repeat left center;
        background-size: 34px 34px;
        border-radius: 50%;
        content: '';
        display: block;
        height: 34px;
        left: 0;
        margin-top: -17px;
        position: absolute;
        top: 50%;
        width: 34px;
      } // &:before
    } // .c-site-header__title

    .c-site-header__navigation {
      background: map-get($colors, gray--light);
      bottom: 0;
      left: 100%;
      position: fixed;
      top: 56px;
      transition: all .4s ease;
      width: 100%;

      @include mq(sm) {
        background: none;
        bottom: auto;
        float: right;
        left: auto;
        position: relative;
        top: auto;
        width: auto;
      } // mq.sm

      &.is-open {
        left: 0;
        min-width: 320px;
      } // &.is-open
    } // .c-site-header__navigation

    .c-site-header__navigation-title {
      @include visually-hide();
    } // .c-site-header__navigation-title

    .c-site-header__navigation-list {
      list-style: none;
      margin: 0;
      padding: map-get($spacing, med);
      text-align: center;
      @include mq(sm) {
        padding: 5px 0 0;
        text-align: right;
      } // mq.sm
    } // .c-site-header__navigation-list

    .c-site-header__navigation-list-item {
      margin: 0;

      @include mq(sm) {
        display: inline-block;
        margin: 0 0 0 15px;
      } // mq.sm

      &:last-child {

        .c-site-header__navigation-link {

          @include mq-between(sm) {
            border-bottom: 0;
          } // mq-between.sm
        } // .c-site-header__navigation-link
      } // &:last-child
    } // .c-site-header__navigation-list-item

    .c-site-header__navigation-link {
      color: map-get($colors, black);
      display: block;
      font-size: 1.286em; // 14 > 15
      font-weight: 400;
      padding: 15px 0;

      @include mq(sm) {
        border-color: transparent;
        font-size: 1.071em; // 14 > 15
        padding: 5px;
      } // mq.sm

      &:hover {

        @include mq(sm) {
          background: none;
          border-color: map-get($colors, brand-1);
          color: map-get($colors, brand-1);
        } // mq.sm
      } // &:hover
    } // .c-site-header__navigation-link

    .c-site-header__toggle-nav {
      background: none;
      border: 0;
      cursor: pointer;
      height: 36px;
      margin: -20px 0 0;
      outline: 0;
      overflow: hidden;
      padding: 8px;
      position: absolute;
      right: map-get($spacing, med);
      text-indent: -99999em;
      top: 50%;
      width: 36px;

      @include mq(sm) {
        display: none;
      } // mq.sm

      &:before {
        border-radius: 50%;
        content: '';
        display: block;
        height: 0;
        left: 50%;
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all .4s ease;
        width: 0;
      } // &:before

      &.is-open {

        &:before {
          background-color: map-get($colors, brand-1);
          height: 36px;
          opacity: 1;
          width: 36px;
        } // &:before

        .c-site-header__toggle-nav-text {
          background: none;

          &:before {
            background-color: map-get($colors, white);
            top: 0;
            transform: rotate(225deg);
          } // &:before

          &:after {
            background-color: map-get($colors, white);
            bottom: 0;
            transform: rotate(-225deg);
          } // &:before
        } // .c-site-header__toggle-nav-text
      } // &.is-open
    } // .c-site-header__toggle-nav

    .c-site-header__toggle-nav-text {
      background: map-get($colors, brand-1);
      display: block;
      height: 2px;
      position: relative;
      transition: all .4s ease;

      &:before {
        background: map-get($colors, brand-1);
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        top: -6px;
        transition: all .4s ease;
        width: 100%;
      } // &:before

      &:after {
        background: map-get($colors, brand-1);
        bottom: -6px;
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        transition: all .4s ease;
        width: 100%;
      } // &:after
    } // .c-site-header__toggle-nav
  } // .c-site-header
</style>
