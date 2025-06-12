<script setup lang="ts">
  import FormExchange from '@/components/form/FormExchange.vue'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
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
        <h1 class="hero__header">
          {{ t('hero_header') }}
        </h1>
        <p class="hero__description" >
          <span>{{t('hero_description_logo')}}</span> {{t('hero_description')}} <span>{{t('hero_description_support')}}</span>
        </p>
      </div>
      <div class="hero__form" id="form-message">
        <FormExchange @open-dialog="openDialog" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .hero {
    position: relative;
    padding: 70px 20px;

    @include respond(md) {
      padding: 52px 40px;
      margin: 0 auto;
    }

    @include respond(xl) {
      padding: 108px 22px;
      max-width: $max-width-container-3xl;
      margin: 0 auto;
    }

    @include respond(3xl) {
      padding: 108px 22px;
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      margin: 0 auto;
      gap: 52px;
      flex-direction: column;

      @include respond(md) {
        gap: 52px;
      }

      @include respond(lg) {
        gap: 52px;
      }

      @include respond(xl) {
        flex-direction: row;
        gap: 132px;
      }
    }

    &__offer,
    &__form {
      flex: 1 1 auto;
      width: 100%;
      //flex: 1 1 50%;
      //max-width: calc(50% - 170px);

      @include respond(lg) {
        width: 688px;
        //flex: 1 1 50%;
        //max-width: calc(50% - 18px);
      }

      @include respond(3xl) {
        width: 542px;
        //max-width: calc(50% - 65px);
      }
    }

    &__offer {
      //padding: 0 90px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      //align-items: center;

      @include respond(md) {
        height: 470px;
        gap: 32px;
        //align-items: stretch;
      }

      @include respond(xl) {
        gap: 60px;
      }
    }

    &__form {
      height: 470px;

      @include respond(md) {
        height: 470px;
      }

      @include respond(lg) {
        height: 470px;
      }

      //@include respond(xl) {
      //  height: 534px;
      //}
    }

    &__header {
      margin-bottom: 10px;

      color: #f8f8f8;
      font-size: 32px;
      font-weight: 600;
      line-height: 1.16;
      text-align: center;

      @include respond(md) {
        text-align: left;
        font-size: 48px;
      }
    }

    &__description {
      color: #f8f8f8;
      font-size: 16px;
      font-style: normal;
      font-weight: normal;
      line-height: 1.6;

      text-align: center;

      @include respond(md) {
        text-align: left;
        font-size: 20px;
      }

      span {
        color: #08b570;
      }
    }
  }
</style>
