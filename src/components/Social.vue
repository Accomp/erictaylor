<template>
  <section class="c-social">
    <div class="u-wrapper">
      <h2 class="c-social__title">Let's Chat</h2>
      <ul class="c-social__list">
        <li class="c-social__list-item" v-for="item in items" :key="item.text">
          <a class="c-social__link" :href="item.link" target="_blank" title="item.title">
            <span class="c-social__network-name">{{ item.text }}</span>
            <font-awesome-icon :icon="item.icon" class="c-social__network-icon" />
          </a><!-- /.c-social__link -->
        </li><!-- /.c-social__link -->
      </ul><!-- /.c-social__list -->
    </div><!-- /.u-wrapper -->
  </section><!-- /.c-social -->
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';

export default {
  name: 'Social',
  components: {
    FontAwesomeIcon,
  },
  computed: {
    iconEnvelope() {
      return faEnvelope;
    },
    iconGithub() {
      return faGithub;
    },
    iconLinkedin() {
      return faLinkedin;
    },
  },
  data() {
    return {
      items: [
        {
          icon: faEnvelope,
          link: 'mailto:exaltedsolutions@gmail.com',
          text: 'Email',
          title: 'Send an email to Eric',
        },
        {
          icon: faGithub,
          link: 'https://github.com/Accomp',
          text: 'Github',
          title: 'View Eric\'s Github account',
        },
        {
          icon: faLinkedin,
          link: 'https://www.linkedin.com/in/ericbtaylorjr',
          text: 'LinkedIn',
          title: 'View Eric\'s LinkedIn',
        },
      ],
      navOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
  .c-social {
    background: map-get($colors, gray--light);
    padding: 50px 0 60px;
    text-align: center;

    .c-social__title {
      margin-bottom: 30px;
    } // .c-social__title

    .c-social__list {
      list-style: none;
      margin: 0 0 30px;
      padding: 0;
    } // .c-social__list

    .c-social__list-item {
      display: inline-block;
      margin: 0 10px;
    } // .c-social__list-item

    .c-social__link {
      background: map-get($colors, gray);
      border: 0;
      border-radius: 50%;
      color: map-get($colors, white);
      display: block;
      height: 50px;
      overflow: hidden;
      transition: all .2s linear;
      width: 50px;

      &:hover {
        background-color: map-get($colors, gray--dark);
      } // &:hover
    } // .c-social__link

    .c-social__network-name {
      @include visually-hide();
    } // .c-social__network-name

    .c-social__network-icon {
      font-size: 2.143em; // 14 > 30
      height: 50px;
      line-height: 50px;
    } // .c-social__network-icon
  } // .c-social
</style>
