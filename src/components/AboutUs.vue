<script setup lang="ts">
  const reliability = {
    title: 'Reliability Without Compromise',
    description:
      "We lock in the exchange rate at the moment of the transaction and charge no hidden fees. You always know exactly how much you'll receive.",
    url: '/img/about-us/reliability.png',
    alt: 'reliability',
  }

  const speed = {
    title: 'Speed — From Just 5 Minutes',
    description:
      'Our optimized algorithms and network fee settings ensure most exchanges are completed within 30 minutes — often much faster.',
    url: '/img/about-us/speed.png',
    alt: 'speed',
  }

  const noRegistration = {
    title: 'No Registration, No Limits',
    description:
      'Exchange without creating an account. We don’t store your data — complete privacy and freedom of use.',
    url: '/img/about-us/limits.png',
    alt: 'limits',
  }

  const services = [
    {
      url: '/img/about-us/no_hidden_fees.png',
      text: 'No hidden fees',
      alt: 'no hidden',
    },
    {
      url: '/img/about-us/24-7-support.png',
      text: '24/7 support',
      alt: '24/7',
    },
    {
      url: '/img/about-us/cash_available.png',
      text: 'Cash available in over 50 countries',
      alt: 'available',
    },
    {
      url: '/img/about-us/fast_transactions.png',
      text: 'Fast transactions (average time: 5–30 minutes)',
      alt: 'fast',
    },
  ]
</script>

<template>
  <div class="about-us">
    <h2 class="about-us__header">About US</h2>
    <div class="about-us__top">
      <div class="about-us__card full">
        <div class="about-us__img">
          <img :src="reliability.url" :alt="reliability.alt" />
        </div>
        <div class="about-us__info">
          <div class="about-us__title">{{ reliability.title }}</div>
          <div class="about-us__description">{{ reliability.description }}</div>
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
          <div class="about-us__text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about-us {
    max-width: $max-width-container-3xl;
    margin: 0 auto;

    &__header {
      margin-bottom: 44px;

      font-family: 'JetBrains Mono';
      color: #f8f8f8;
      text-align: center;
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -1.92px;
    }

    &__top {
      margin-bottom: 36px;
      display: grid;
      grid-template-columns: 1fr 1fr; /* одна колонка по умолчанию */
      gap: 45px 40px; /* вертикальный отступ между строками */
    }

    &__card {
      border-radius: 20px;
      border: 1px solid var(--Circuit, rgba(18, 48, 87, 0));
      background: rgba(205, 222, 242, 0.02);
      box-shadow: 0px 4px 8.3px 0px rgba(0, 0, 0, 0.09);
      padding: 28px;
      display: flex;
      gap: 40px;

      &.full {
        grid-column: 1 / -1;
      }

      &.part {
        width: 100%;
      }
    }

    &__img {
      width: 196px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      img {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__title {
      margin-bottom: 24px;

      color: #08b570;
      font-size: 32px;
      font-weight: 700;
      line-height: 1.12;
      letter-spacing: -0.64px;
    }

    &__description {
      color: #fff;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.33;
    }

    &__services {
      display: flex;
      justify-content: center;
      gap: 118px;
      flex-wrap: wrap;
    }

    &__service {
      display: flex;
      flex-direction: column;
      max-width: 294px;
      gap: 20px;
      align-items: center;
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 88px;

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
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
    }
  }
</style>
