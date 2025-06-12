<script setup lang="ts">
  import {computed} from "vue"

  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const reliability = computed(()=> {
   return  {
      title: t('about_us_reliability_title'),
        description: t('about_us_reliability_description'),
      url: '/img/about-us/reliability.png',
      alt: 'reliability',
    }
  })

  const speed = computed(()=> {
    return  {
      title: t('about_us_speed_title'),
      description: t('about_us_speed_description'),
      url: '/img/about-us/speed.png',
      alt: 'speed',
    }
  })

  const noRegistration = computed(()=> {
    return  {
      title: t('about_us_no_registration_title'),
      description: t('about_us_no_registration_description'),
      url: '/img/about-us/limits.png',
      alt: 'limits',
    }
  })

  const services = computed(()=> {
    return   [
      {
        url: '/img/about-us/no_hidden_fees.png',
        text:   t('about_us_service_no_hidden_fees'),
        alt: 'no hidden',
      },
      {
        url: '/img/about-us/24-7-support.png',
        text:   t('about_us_service_24_7_support'),
        alt: '24/7',
      },
      {
        url: '/img/about-us/cash_available.png',
        text:   t('about_us_service_cash_available'),
        alt: 'available',
      },
      {
        url: '/img/about-us/fast_transactions.png',
        text:   t('about_us_service_fast_transactions'),
        alt: 'fast',
      },
    ]
  })

</script>

<template>
  <div class="about-us">
    <h2 class="about-us__header">{{ t('about_us_header') }}</h2>
    <div class="about-us__top">
      <div class="about-us__card full">
        <div class="about-us__img">
          <img :src="reliability.url" :alt="reliability.alt" />
        </div>
        <div class="about-us__info">
          <div class="about-us__title">{{ reliability.title }}</div>
          <div class="about-us__description">{{ reliability.description}}</div>
        </div>
      </div>
      <div class="about-us__card part">
        <div class="about-us__img">
          <img :src="speed.url" :alt="speed.alt" />
        </div>
        <div class="about-us__info">
          <div class="about-us__title">{{ speed.title }}</div>
          <div class="about-us__description">{{ speed.description }}</div>
        </div>
      </div>
      <div class="about-us__card part">
        <div class="about-us__img">
          <img :src="noRegistration.url" :alt="noRegistration.alt" />
        </div>
        <div class="about-us__info">
          <div class="about-us__title">{{ noRegistration.title }}</div>
          <div class="about-us__description">{{ noRegistration.description }}</div>
        </div>
      </div>
    </div>
    <div class="about-us__bottom">
      <div class="about-us__services">
        <div class="about-us__service" v-for="item in services" :key="item.alt">
          <div class="about-us__icon">
            <img :src="item.url" :alt="item.alt" />
          </div>
          <div class="about-us__text">{{  item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about-us {
    margin: 0 auto;
    padding: 0 20px;

    @include respond(lg) {
      padding: 0 52px;
    }

    @include respond(xl) {
      padding: 0 52px;
    }

    @include respond(2xl) {
      max-width: $max-width-container-3xl;
    }

    @include respond(3xl) {
      margin: 74px auto;
    }

    &__header {
      margin-bottom: 28px;

      font-family: 'JetBrains Mono';
      color: #f8f8f8;
      text-align: center;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 1;
      letter-spacing: -1.92px;

      @include respond(md) {
        margin-bottom: 44px;
        font-size: 64px;
      }
    }

    &__top {
      margin-bottom: 36px;
      margin-left: auto;
      margin-right: auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      max-width: $max-width-container-lg;

      @include respond(md) {
        gap: 45px 40px;
      }

      @include respond(xl) {
        max-width: none;
        grid-template-columns: 1fr 1fr;
      }
    }

    &__card {
      border-radius: 20px;
      border: 1px solid rgba(18, 48, 87, 0.2);
      background: rgba(205, 222, 242, 0.02);
      box-shadow: 0px 4px 8.3px 0px rgba(0, 0, 0, 0.09);
      padding: 28px;
      display: flex;
      gap: 40px;
      flex-direction: column;

      @include respond(md) {
        flex-direction: row;
      }

      &.full {
        grid-column: 1 / -1;
      }

      &.part {
        width: 100%;
      }
    }

    &__img {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      position: relative;
      max-height: 300px;

      @include respond(md) {
        max-height: none;
        width: 186px;
      }

      @include respond(xl) {
        width: 186px;
      }

      @include respond(3xl) {
        width: 196px;
      }

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to right,
          rgba(11, 15, 22, 1) 0%,
          rgba(11, 15, 22, 0.8) 30%,
          rgba(11, 15, 22, 0) 55%
        );
        pointer-events: none;
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to left,
          rgba(11, 15, 22, 1) 0%,
          rgba(11, 15, 22, 0.8) 30%,
          rgba(11, 15, 22, 0) 55%
        );
        pointer-events: none;
      }

      img {
        object-fit: cover;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__title {
      margin-bottom: 24px;

      color: #08b570;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.12;
      letter-spacing: -0.64px;

      @include respond(md) {
        font-size: 32px;
      }
    }

    &__description {
      color: #fff;

      font-size: 16px;
      font-weight: 400;
      line-height: 1.33;

      @include respond(md) {
        font-size: 24px;
      }
    }

    &__services {
      display: flex;
      justify-content: space-around;
      //align-items: center;
      gap: 40px;
      flex-wrap: wrap;
      margin-right: auto;
      margin-left: auto;

      @include respond(lg) {
        justify-content: center;
      }

      @include respond(lg) {
        max-width: $max-width-container-lg;
      }

      @include respond(xl) {
        max-width: none;
        gap: 90px;
      }

      @include respond(3xl) {
        gap: 88px;
      }
    }

    &__service {
      display: flex;
      flex-direction: column;
      max-width: 112px;
      gap: 20px;
      align-items: center;

      @include respond(md) {
        max-width: 160px;
        gap: 20px;
      }

      @include respond(lg) {
        max-width: 140px;
      }

      @include respond(xl) {
        max-width: 294px;
      }
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;

      @include respond(md) {
        width: 60px;
      }

      @include respond(lg) {
        width: 60px;
      }

      @include respond(xl) {
        width: 88px;
      }

      img {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__text {
      //justify-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto 0;

      text-align: center;
      color: #f8f8f8;

      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.4;

      @include respond(md) {
        font-size: 20px;
      }

      @include respond(lg) {
        font-size: 16px;
      }

      @include respond(xl) {
        font-size: 20px;
      }
    }
  }
</style>
