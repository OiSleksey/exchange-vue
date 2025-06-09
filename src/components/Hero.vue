<script setup lang="ts">
  import ButtonMoney from '@/components/base/buttons/ButtonMoney.vue'
  import FormExchange from '@/components/form/FormExchange.vue'
  import CounterCalculator from '@/components/calculator/CounterCalculator.vue'
  import { ref } from 'vue'
  import SupportButton from '@/components/base/buttons/SupportButton.vue'
  import TelegramButton from '@/components/base/buttons/TelegramButton.vue'
  import OutlineButton from '@/components/base/buttons/OutlineButton.vue'
  import PrimaryButton from '@/components/base/buttons/PrimaryButton.vue'
  import LogoComponent from '@/components/base/LogoComponent.vue'
  import SwitcherComponent from '@/components/base/SwitcherBase.vue'

  const {
    result = '',
    markCurrency = [],
    markDays = [],
  } = defineProps<{
    result?: string
    markCurrency?: number[]
    markDays?: number[]
  }>()

  const investment = defineModel<number>('investment')
  const days = defineModel<number>('days')

  //Dialog
  const centerDialogVisible = ref(false)
  const isSuccessRequest = ref(false)

  const openDialog = (isSuccess) => {
    isSuccessRequest.value = isSuccess
    centerDialogVisible.value = true
  }
</script>

<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__offer">
        <h1 class="hero__header" @click="centerDialogVisible = true">
          Exchange cryptocurrency easily, quickly, and with no hidden fees.
        </h1>
        <p class="hero__description">
          <span>GlobalE</span> is an anonymous and instant cryptocurrency exchange. Over 1,000
          trading pairs, fixed rates, and <span>24/7 support.</span>
        </p>
      </div>
      <div class="hero__form" id="form-message">
        <FormExchange @open-dialog="openDialog" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .hero {
    position: relative;
    padding: 54px 116px;

    //@include respond(sm) {
    //  background-image: url('../img/hero/hero-bg-sm.png');
    //  background-position: 0px -50px;
    //}
    //
    //@include respond(md) {
    //  background-image: url('../img/hero/hero-bg-md.png');
    //  background-position: 0px -62px;
    //}
    //
    //@include respond(lg) {
    //  background-image: url('../img/hero/hero-bg-lg.png');
    //  background-position: 0px -62px;
    //}
    //
    //@include respond(xl) {
    //  background-image: url('../img/hero/hero-bg-xl.png');
    //  background-size: 69%;
    //  background-position: 0px -52px;
    //}
    //
    //@include respond(2xl) {
    //  background-image: url('../img/hero/hero-bg-2xl.png');
    //  background-size: 70%;
    //  background-position: 0px -190px;
    //}
    //
    //@include respond(3xl) {
    //  background-image: url('../img/hero/hero-bg-3xl.png');
    //  background-size: 53%;
    //  background-position: 344px -186px;
    //}

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      gap: 20px;
    }

    &__offer,
    &__form {
      flex: 1 1 auto;
      width: 100%;
      //flex: 1 1 50%;
      //max-width: calc(50% - 170px);

      @include respond(xl) {
        flex: 1 1 50%;
        max-width: calc(50% - 18px);
      }

      @include respond(2xl) {
        flex: 1 1 50%;
        max-width: calc(50% - 65px);
      }

      @include respond(3xl) {
        max-width: calc(50% - 65px);
      }
    }

    &__offer {
      //padding: 0 90px;
      display: flex;
      flex-direction: column;
      gap: 60px;
      justify-content: center;
    }

    &__header {
      margin-bottom: 10px;

      color: #f8f8f8;
      font-size: 48px;
      font-weight: 700;
      line-height: 1.16;
    }

    &__description {
      color: #f8f8f8;
      font-size: 20px;
      font-style: normal;
      font-weight: normal;
      line-height: 1.6;

      span {
        color: #08b570;
      }
    }
  }
</style>
