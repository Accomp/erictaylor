<template>
  <article class="c-experience">
    <div class="u-wrapper">
      <figure class="c-experience__photo">
        <img class="c-experience__photo-image" src="/images/avatar.jpg" alt="Eric Taylor">
      </figure><!-- /.c-experience__photo -->
      <h2 class="c-experience__title">Experience</h2>
      <p class="c-experience__intro">Eric has over 13 years of professional experience in Front-End Development and User Experience for websites and SaaS applications.</p>
      <p class="c-experience__intro">He continuously strives to improve process-oriented development and lead shoulder-to-shoulder, with a strong emphasis on design systems.</p>
      <ol class="c-experience__list">
        <li class="c-experience__list-item" v-for="item in items" :key="item.name">
          <h3 class="c-experience__heading">{{ item.name }}</h3>
          <span class="c-experience__meta">{{ item.meta }}</span>
          <p class="c-experience__text"><a :href="item.link" :title="item.linkTitle" target="_blank">{{ item.name }}</a> {{ item.description }}</p>
        </li><!-- /.c-experience__list-item -->
      </ol><!-- /.c-experience__list -->
      <a class="c-button c-experience__resume" href="https://drive.google.com/file/d/0B8ex0KCWYsdOZVB0bDdsWEstNEk/view?usp=sharing" title="View Eric Taylor's Resume" target="_blank">
        View Resum&eacute;
        <font-awesome-icon :icon="iconFilePdf" class="c-button__icon" />
      </a>
    </div><!-- /.u-wrapper -->
  </article><!-- /.c-experience -->
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faFilePdf from '@fortawesome/fontawesome-free-solid/faFilePdf';

export default {
  name: 'Experience',
  components: {
    FontAwesomeIcon,
  },
  computed: {
    iconFilePdf() {
      return faFilePdf;
    },
  },
  data() {
    return {
      items: [
        {
          description: 'is a human-focused phishing defense company. Eric is a Senior UI Engineer working on their flagship web application. He works closely with various teams in developing new features, leading UI vision, supporting internal clients, as well as building and maintaining a design system.',
          link: 'http://www.cofense.com',
          linkText: 'Visit the Cofense website',
          meta: 'Remote (Aug 2015 - Present)',
          name: 'Cofense',
        },
        {
          description: 'is a leading advertising agency, providing top-notch solutions for domestic and international brands. Eric was a Senior Interactive Developer responsible for developing a large variety of responsive marketing websites for the world\'s top brands.',
          link: 'http://www.publicishawkeye.com',
          linkText: 'Visit the Publicis Hawkeye website',
          meta: 'Charlotte, NC (Aug 2013 - Aug 2015)',
          name: 'Publicis Hawkeye',
        },
        {
          description: 'is a premier marketing studio in South Carolina. Eric was a Front-Developer responsible for developing responsive websites for many different brands. He worked closely with other teams and often provided UX consultation.',
          link: 'https://www.cyberwoven.com',
          linkText: 'Visit the Cyberwoven website',
          meta: 'Columbia, SC (Feb 2011 - Aug 2013)',
          name: 'Cyberwoven',
        },
        {
          description: 'is a voluntary health benefits company. Eric was a User Experience Designer, as part of the marketing team. He was responsible for providing in-house support, managing code for a plethora of internal/external web applications, and also internal user experience consultation.',
          link: 'http://coloniallife.com',
          linkText: 'Visit the Colonial Life website',
          meta: 'Columbia, SC (May 2009 -; Feb 2011)',
          name: 'Colonial Life',
        },
        {
          description: 'is a frozen drink mix vendor. Eric was a Desktop Support Analyst and started out providing hardware/software support to remote employees. He ultimately transitioned into creating and maintaining the company\'s Intranet.',
          link: 'https://www.kerryfoodservice.com/brands/island-oasis',
          linkText: 'Visit the Island Oasis website',
          meta: 'Walpole, MA (Apr 2008 - Feb 2009)',
          name: 'Island Oasis',
        },
        {
          description: 'was a property insurance assessment company. Eric was a Junior Web Designer, responsible for creating web assets and maintaining various web content.',
          link: 'http://www.cisgroup.net/news/cis-group-announces-acquisition-of-advanced-field-services',
          linkText: 'View the AFS acquirement publication',
          meta: 'Plainville, MA (Feb 2005 - Apr 2008)',
          name: 'Advanced Field Services',
        },
      ],
      navOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
  .c-experience {
    padding: 90px 0 60px;
    text-align: center;

    .c-experience__photo {
      border: 0;
      display: block;
      margin: 0 auto;
      padding: 0;
      width: 150px;
    } // .c-experience__photo

    .c-experience__photo-image {
      border-radius: 50%;
    } // .c-experience__photo-image

    .c-experience__intro {
      font-size: 1.286em; // 14 > 18
      line-height: 1.667; // 18 > 30
      margin: 0 auto 30px;
      max-width: 600px;
    } // .c-experience__intro

    .c-experience__resume {
      margin: 20px 0 60px;
    } // .c-experience__resume

    .c-experience__list {
      list-style: none;
      margin: 0 auto;
      max-width: 600px;
      padding: 0;
      text-align: left;
    } // .c-experience__list

    .c-experience__list-item {
      margin: 0 0 30px;
    } // .c-experience__list-item

    .c-experience__heading {
      font-size: 1.286em; // 14 > 18
      margin: 0;
    } // .c-experience__heading

    .c-experience__meta {
      color: map-get($colors, gray);
      display: block;
      font-size: .857em; // 14 > 12
      margin-bottom: 10px;
    } // .c-experience__meta

    .c-experience__text {
      line-height: 1.714; // 14 > 24
      margin: 0;
    } // .c-experience__text
  } // .c-experience
  .c-button {
    background: map-get($colors, brand-1);
    border-radius: 4px;
    border-width: 0 0 4px;
    color: map-get($colors, white);
    display: inline-block;
    font-size: 1.143em; // 14 > 16
    font-weight: 400;
    padding: map-get($spacing, sm) map-get($spacing, med) (map-get($spacing, sm) - 2px);
    transition: all .2s linear;

    &:hover {
      background-color: map-get($colors, gray--dark);
    } // &:hover

    &--full {
      width: 100%;
    } // &--full

    .c-button__icon {
      margin-left: 10px;
    } // .c-button__icon
  } // .c-button
</style>
