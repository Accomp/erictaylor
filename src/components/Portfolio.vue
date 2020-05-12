<template>
  <section class="c-portfolio">
    <div class="u-wrapper">
      <h2 class="c-portfolio__title">Portfolio</h2>
      <p class="c-portfolio__description">With a strong emphasis on process, alignment, and collaboration, Eric brings extensive Senior Front-End Development and User Experience knowledge to help lead vision and support UI-centric teams.</p>
      <p class="c-portfolio__description">Due to confidentiality agreements, Eric is prohibited to showcase some of his best work, particularly involving internal Design Systems. Please reach out for more details if interested.</p>
      <ul class="c-portfolio__list">
        <li class="c-portfolio__list-item" v-for="item in items" :key="item.title">
          <component :is="tag(item)" class="c-portfolio-item" :href="item.link" :title="item.link" target="_blank">
            <figure class="c-portfolio-item__figure">
              <img class="c-portfolio-item__image" :src="item.imgPath" :alt="item.title" />
              <figcaption class="c-portfolio-item__platform">
                <span class="c-portfolio-item__platform-name">{{ item.platformName }}</span>
                <font-awesome-icon :icon="item.platformIcon" class="c-portfolio-item__platform-icon" />
              </figcaption><!-- /.c-portfolio-item__platform -->
            </figure><!-- /.c-portfolio-item__figure -->
            <div class="c-portfolio-item__content">
              <h3 class="c-portfolio-item__content-title">{{ item.title }}</h3>
              <p class="c-portfolio-item__content-meta">{{ item.meta }}</p>
            </div><!-- /.c-portfolio-item__content -->
          </component><!-- /.c-portfolio-item -->
        </li><!-- /.c-portfolio__list-item -->
      </ul><!-- /.c-portfolio__list -->
    </div><!-- /.u-wrapper -->
  </section><!-- /.c-portfolio -->
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen';
import faFileAlt from '@fortawesome/fontawesome-free-solid/faFileAlt';
import faLaptop from '@fortawesome/fontawesome-free-solid/faLaptop';

export default {
  name: 'Portfolio',
  components: {
    FontAwesomeIcon,
  },
  computed: {
    iconCodepen() {
      return faCodepen;
    },
    iconFile() {
      return faFileAlt;
    },
    iconLaptop() {
      return faLaptop;
    },
    tag(item) {
      return item.active ? 'a' : 'div';
    },
  },
  data() {
    return {
      items: [
        {
          active: true,
          imgPath: '/images/work_blog-why-is-ui-management-important.jpg',
          link: 'https://www.linkedin.com/pulse/saas-engineering-why-ui-management-important-eric-taylor/',
          linkTitle: 'Read LinkedIn Article',
          meta: 'Blog Post',
          platformIcon: faFileAlt,
          platformName: 'Blog Post',
          title: 'Why is UI Management important?',
        },
        {
          active: false,
          imgPath: '/images/work_youville.jpg',
          link: 'http://visityouville.com/en/coloniallife/youville',
          linkTitle: 'Due to confidentiality agreements, I cannot share this project.',
          meta: 'HTML, CSS, VueJS, UX',
          platformIcon: faLaptop,
          platformName: 'Website',
          title: 'Cofense Design System',
        },
        {
          active: false,
          imgPath: '/images/work_blog-getting-into-fe.jpg',
          link: 'https://www.linkedin.com/pulse/getting-front-end-development-just-do-eric-taylor',
          linkTitle: 'Read LinkedIn Article',
          meta: 'Blog Post',
          platformIcon: faFileAlt,
          platformName: 'Blog Post',
          title: 'Getting Into Front-End',
        },
        {
          active: true,
          imgPath: '/images/work_youville.jpg',
          link: 'http://visityouville.com/en/coloniallife/youville',
          linkTitle: 'Visit Colonial Life Youville website',
          meta: 'HTML, CSS, JS, UX',
          platformIcon: faLaptop,
          platformName: 'Website',
          title: 'Colonial Life Youville',
        },
        {
          active: true,
          imgPath: '/images/work_d3-transmog.jpg',
          link: 'http://d3.transmog.me',
          linkTitle: 'Visit Diablo Transmog website',
          meta: 'HTML, Sass, JS, Rails, UX, Design',
          platformIcon: faLaptop,
          platformName: 'Website',
          title: 'Diablo Transmog',
        },
        {
          active: true,
          imgPath: '/images/work_skull.jpg',
          link: 'http://codepen.io/EricTaylor/pen/meJWWM',
          linkTitle: 'Visit Animated Skull CodePen',
          meta: 'SVG, CSS',
          platformIcon: faCodepen,
          platformName: 'CodePen',
          title: 'Animated Skull',
        },
        {
          active: true,
          imgPath: '/images/work_responsive-table.jpg',
          link: 'http://codepen.io/EricTaylor/pen/nzEHk',
          linkTitle: 'Visit Responsive Tables CodePen',
          meta: 'HTML, CSS, JS',
          platformIcon: faCodepen,
          platformName: 'CodePen',
          title: 'Responsive Table',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .c-portfolio {
    background: map-get($colors, gray--light);
    padding: 60px 0 50px;
    text-align: center;

    .c-portfolio__title {
      border-bottom: 1px solid map-get($colors, brand-1);
      display: inline-block;
      font-size: 2.286em; // 14 > 32
      font-weight: 300;
      padding: 0 30px 30px;
    } // .c-portfolio__title

    .c-portfolio__description {
      font-size: 1.286em; // 14 > 18
      line-height: 1.667; // 18 > 30
      margin: 0 auto 30px;
      max-width: 600px;
      text-align: center;
    } // .c-portfolio__description

    .c-portfolio__list {
      list-style: none;
      margin: 0 auto;
      max-width: 400px;
      padding: 20px 0 0;

      @include mq(sm) {
        @include clearfix();
        max-width: 940px;
      } // mq.sm
    } // .c-portfolio__list

    .c-portfolio__list-item {
      margin: 0 0 40px;
      position: relative;

      @include mq(sm) {
        float: left;
        margin-bottom: 8%;
        width: 46%;
      } // mq.sm

      @include mq(med) {
        margin-bottom: 5%;
        width: 30%;
      } // mq.med

      &:nth-child(even) {

        @include mq(sm) {
          float: right;
        } // mq.sm

        @include mq(med) {
          float: left;
        } // mq.med
      } // &:nth-child(odd)

      &:nth-child(3n+2) {

        @include mq(med) {
          margin: 0 5% 5%;
        } // mq.med
      } // &:nth-child(3n+2)

      &:hover {

        &:before {
          background-color: map-get($colors, brand-1);
        } // &:before
      } // &:hover

      &:before {
        background: rgba(map-get($colors, black), .25);
        content: '';
        display: block;
        height: 100%;
        left: 4px;
        position: absolute;
        top: 4px;
        transition: all .2s linear;
        width: 100%;
      } // &:before
    } // .c-portfolio__list-item
  } // .c-portfolio

  .c-portfolio-item {
    border-bottom: 0;
    display: block;
    text-align: left;
    transition: all .2s linear;

    &:hover {
      transform: translate(-2px, -2px);

      .c-portfolio-item__content-title {
        color: map-get($colors, brand-1);
      } // .c-portfolio-item__content-title
    } // &:hover

    .c-portfolio-item__figure {
      border: 0;
      margin: 0;
      padding: 0;
      position: relative;
      width: 100%;
    } // .c-portfolio-item__figure

    .c-portfolio-item__platform {
      background: map-get($colors, black);
      border: 0;
      border-radius: 50% 0;
      bottom: -25px;
      color: map-get($colors, white);
      height: 50px;
      margin: 0;
      overflow: hidden;
      padding: 0;
      position: absolute;
      right: map-get($spacing, med);
      width: 50px;
      z-index: 2;
    } // .c-portfolio-item__platform

    .c-portfolio-item__platform-name {
      @include visually-hide();
    } // .c-portfolio-item__platform-name

    .c-portfolio-item__platform-icon {
      font-size: 2.143em; // 14 > 30
      height: 50px;
      line-height: 50px;
    } // .c-portfolio-item__platform-icon

    .c-portfolio-item__content {
      background: map-get($colors, white);
      padding: map-get($spacing, med);
      position: relative;
      z-index: 1;
    } // .c-portfolio-item__content

    .c-portfolio-item__content-title {
      color: map-get($colors, black);
      font-size: 1.286em; // 14 > 18
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all .2s linear;
      white-space: nowrap;
      word-wrap: normal;
    } // .c-portfolio-item__content-title

    .c-portfolio-item__content-meta {
      color: map-get($colors, gray);
      font-size: .857em; // 14 > 12
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    } // .c-portfolio-item__content-meta
  } // .c-portfolio-item
</style>
