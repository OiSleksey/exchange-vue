<script setup lang="ts">
  import LogoComponent from '@/components/base/LogoComponent.vue'
  import SupportButton from '@/components/base/buttons/SupportButton.vue'
  import TelegramButton from '@/components/base/buttons/TelegramButton.vue'
  import { useNavigation } from '@/composables/navigation.ts'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const { navigateToSupport, navigateToConvert, navigateToHome } = useNavigation()

  const sponsors = [
    'img/footer/sponsors/sponsor-1.png',
    'img/footer/sponsors/sponsor-2.png',
    'img/footer/sponsors/sponsor-3.png',
    'img/footer/sponsors/sponsor-4.png',
    'img/footer/sponsors/sponsor-5.png',
    'img/footer/sponsors/sponsor-6.png',
    'img/footer/sponsors/sponsor-7.png',
  ]
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <div class="footer__info">
          <div class="footer-logo">
            <LogoComponent variant="light" />
          </div>
          <div class="office">
            <div class="office__name">{{ t('footer_office_name') }}</div>
            <div class="office__location">
              {{ t('footer_office_location') }}
            </div>
          </div>
          <div class="contacts">
            <SupportButton @click="navigateToSupport()" >{{ t('header_menu_support') }}</SupportButton>
            <TelegramButton @click="navigateToSupport()" />
          </div>
        </div>
      </div>
      <div class="footer__sponsors">
        <div class="footer__sponsor" v-for="(url, index) in sponsors" :key="index">
          <img :src="url" alt="sponsor" />
        </div>
      </div>

      <hr class="footer__divider" />
      <div class="footer__bottom">
        <div class="footer__copywriter">
          <span>©</span> <span>2025</span> <span>GlobalEx</span>
        </div>
        <div class="footer__links">
          <a class="user-agreement" href="#">{{ t('footer_terms') }}</a>
          <a class="privacy-policy" href="#">{{ t('footer_privacy') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    //background-color: #f45e5e;
    padding: 0 8px 8px 8px;

    @include respond(md) {
      padding: 0 16px 16px 16px;
    }

    &__container {
      background-color: #0c1017;
      border-radius: 20px;
      margin: 0 auto;
      //max-width: $max-width-container;
      padding: 28px 20px;
      display: flex;
      flex-direction: column;

      @include respond(sm) {
        padding: 28px 20px;
        //max-width: $max-width-container-sm;
      }

      @include respond(md) {
        padding: 60px 44px;
        //max-width: $max-width-container-md;
      }

      @include respond(lg) {
        padding: 60px 44px;
        //max-width: $max-width-container-footer-lg;
      }

      @include respond(xl) {
        padding: 60px 44px;
        //max-width: $max-width-container-xl;
      }

      @include respond(2xl) {
        padding: 60px 70px;
      }

      @include respond(3xl) {
        //max-width: $max-width-container-3xl;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1;
      margin-bottom: 40px;

      //display: grid;
      //gap: 20px;
      //grid-template-columns: 1fr;

      @include respond(md) {
        flex-direction: row;
        flex-wrap: wrap;
        & > div:nth-child(1) {
          flex: 1 1 auto;
        }

        & > div:nth-child(2) {
          flex: 1 1 70%;
        }
        & > div:nth-child(3) {
          flex-basis: 100%;
        }
      }

      @include respond(lg) {
        & > div:nth-child(1) {
          flex: 1 0 auto;
        }

        & > div:nth-child(2) {
          flex: 1 0 auto;
        }
        & > div:nth-child(3) {
          flex: 1 0 auto;
        }
      }
    }

    &__top {
      display: flex;
      flex-direction: column;
      gap: 32px;

      @include respond(md) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }
    }

    &__bottom {
      display: flex;
      flex-direction: column;
      gap: 16px;

      @include respond(md) {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .footer-logo {
      display: flex;
      align-items: center;
      //justify-content: center;
      gap: 10px;

      &__logo-img {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
        }
      }

      &__logo-text {
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;

        span {
          color: #fff;
          font-family: 'Montserrat Alternates';
          font-size: 18.182px;
          font-style: normal;
          font-weight: 700;
          line-height: 1;
        }
      }
    }

    .office {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;

      &__name {
        color: #fff;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.2;
      }

      &__location {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
      }
    }

    .certified {
      display: flex;
      align-items: center;
      //justify-content: center;
      gap: 32px;

      &__img {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
        }
      }
    }

    .contacts {
      display: flex;
      align-items: center;

      gap: 20px;

      @include respond(xl) {
        justify-content: flex-end;
        margin-left: auto;
      }
    }

    .contact-support {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 24px;
      border: 1.5px solid #03ed66;
      gap: 10px;
      padding: 8px 24px;
      text-decoration: none;
      width: max-content;

      &:hover {
        span {
          transform: skewX(-10deg);
        }
      }

      svg {
        width: 20px;
      }

      span {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        transition: all 0.2s ease;
        will-change: transform;
      }
    }

    .contact-telegram {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      text-decoration: none;
      transition: all 0.2s ease;
      will-change: transform;

      &:hover {
        transform: scale(1.05);
      }

      svg {
        width: 100%;
      }
    }

    &__divider {
      display: block;
      margin-block-start: 28px;
      margin-block-end: 28px;
      overflow: hidden;
      border-color: rgba(248, 248, 248, 0.7);
      border-width: 1px;
      //flex: 1 0 auto;
      width: 100%;
    }

    &__copywriter {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 1.5;

      span {
        font-weight: 300;
      }

      & span:first-child {
        color: #464646;
      }

      & span:last-child {
        font-weight: 500;
      }
    }

    &__links {
      display: flex;
      flex-direction: row;
      gap: 16px;
      justify-content: flex-start;

      @include respond(md) {
        flex-direction: row;
      }
    }

    .user-agreement,
    .privacy-policy {
      color: #fff;

      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px; /* 150% */
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-decoration-skip-ink: auto;
      text-decoration-thickness: auto;
      text-underline-offset: auto;
      text-underline-position: from-font;
    }

    &__sponsors {
      //margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: flex-start;

      @include respond(md) {
        justify-content: space-between;
      }
    }

    &__sponsor {
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      @include respond(md) {
        height: 36px;
      }

      img {
        width: auto;
        max-width: 100%;
        max-height: 100%;
        opacity: 0.5;
      }
    }
  }
</style>
