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

  const investment = ref(500)
  const days = ref(30)
  const earnings = computed(() => {
    const count = investment.value * days.value * 0.65
    const round = Math.floor(count)
    return new Intl.NumberFormat('ru-RU').format(round)
  })

  const marksCurrencyMobile = [100, 200, 500, 1000, 2000, 5000, 10000, 20000]
  const marksCurrencyDesktop = [10, 100, 200, 500, 1000, 2000, 5000, 10000, 20000]
  const marksDaysMobile = [7, 14, 20, 30, 40, 90]
  const marksDaysDesktop = [4, 7, 10, 14, 20, 30, 60, 90]

  const marksCurrency = ref(marksCurrencyMobile)
  const marksDays = ref(marksDaysMobile)

  const handleResize = () => {
    const innerWidth = window.innerWidth
    if (innerWidth < 744) {
      marksCurrency.value = [...marksCurrencyMobile]
      marksDays.value = [...marksDaysMobile]
    }
    if (innerWidth >= 744) {
      marksCurrency.value = [...marksCurrencyDesktop]
      marksDays.value = [...marksDaysDesktop]
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
  <Header />
  <main>
    <Hero
      v-model:investment="investment"
      v-model:days="days"
      :result="earnings"
      :mark-currency="marksCurrency"
      :mark-days="marksDays"
    />
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
  .home-page {
    &__divider {
      max-width: $max-width-container-3xl;
      margin: 74px auto;
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
