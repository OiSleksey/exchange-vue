<script setup lang="ts">
  import Header from '../components/Header.vue'
  import Hero from '@/components/Hero.vue'
  import DividerBase from '@/components/base/DividerBase.vue'
  import Footer from '@/components/Footer.vue'
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import CryptoComponent from '@/components/CryptoComponent.vue'
  import AboutUs from '@/components/AboutUs.vue'
  import UserReviews from '@/components/UserReviews.vue'
  import FAG from '@/components/FAG.vue'

  const handleResize = () => {
    const innerWidth = window.innerWidth
    if (innerWidth < 744) {
    }
    if (innerWidth >= 744) {
    }
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
</script>

<template>
  <div class="bg-substrate"></div>
  <Header />
  <main>
    <Hero />
    <CryptoComponent />
    <DividerBase class="home-page__divider" />
    <AboutUs />
    <DividerBase class="home-page__divider" />
    <UserReviews />
    <DividerBase class="home-page__divider" />
    <FAG />
  </main>
  <Footer />
</template>

<style scoped lang="scss">
  .bg-substrate {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 2;

    &:before {
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      position: absolute;

      width: calc((100vw / 2) - (1990px / 2));
      background: linear-gradient(
        to right,
        rgba(7, 11, 17, 1) 0%,
        rgba(7, 11, 17, 1) 80%,
        rgba(7, 11, 17, 0.8) 94%,
        rgba(7, 11, 17, 0) 100%
      );
    }

    &:after {
      content: '';
      top: 0;
      bottom: 0;
      right: 0;
      background: aquamarine;
      position: absolute;
      width: calc((100vw / 2) - (1990px / 2));
      background: linear-gradient(
        to left,
        rgba(7, 11, 17, 1) 0%,
        rgba(7, 11, 17, 1) 80%,
        rgba(7, 11, 17, 0.8) 94%,
        rgba(7, 11, 17, 0) 100%
      );
    }
  }
  .home-page {
    &__divider {
      max-width: $max-width-container-3xl;
      margin: 74px 20px;

      @include respond(md) {
        padding: 0 52px;
      }

      @include respond(lg) {
        margin: 94px auto;
        padding: 0 52px;
      }

      @include respond(xl) {
        margin: 72px auto;
        padding: 0 52px;
      }

      @include respond(3xl) {
        padding: 0 0;
        margin: 74px auto;
      }
    }
  }
  .wrap-money {
    background-image: url('/img/main/stats-bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;

    &__bg-gradient {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, rgba(5, 6, 7, 0.8) 12%, transparent 80%);
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(270deg, rgba(5, 6, 7, 0.8) 12%, transparent 80%);
      }
    }

    &__top-fade {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(7, 11, 10, 1) 0%, transparent 100%);
    }

    &__bottom-fade {
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(5, 6, 7, 0.8) 0%, transparent 100%);
    }
  }
</style>
