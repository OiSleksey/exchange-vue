<script setup lang="ts">
  const list = [
    {
      text: 'Выявляет тренды до того, как они становятся очевидными',
      alt: 'increase',
      url: '/img/badge/increase-icon.svg',
    },
    {
      text: 'Оценивает риски и предлагает оптимальные точки входа/выхода',
      alt: 'security',
      url: '/img/badge/security-icon.svg',
    },
    {
      text: 'Постоянно обучается на данных в реальном времени',
      alt: 'time',
      url: '/img/badge/time-icon.svg',
    },
  ]
</script>

<template>
  <section class="work-platform">
    <div class="work-platform__container">
      <div class="work-platform__first">
        <h4 class="work-platform__title">Кто мы и как это работает</h4>
        <p class="work-platform__description">
          Наша команда состоит из опытных трейдеров с подтверждённой историей успеха. Вместе с ними
          работает искусственный интеллект, который анализирует тысячи рыночных факторов в секунду.
        </p>
      </div>
      <div class="work-platform__second">
        <h4 class="work-platform__title">Что делает Искусственный Интеллект:</h4>
        <div class="work-platform__list">
          <div class="work-platform__item" v-for="item in list">
            <div class="work-platform__img">
              <img :src="item.url" :alt="item.alt" />
            </div>

            <div class="work-platform__text">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .work-platform {
    //background-color: #409eff;

    &__container {
      margin: 0 auto;
      max-width: $max-width-container;
      display: flex;
      flex-direction: column;
      gap: 60px;
      padding: 64px 0 112px 0;

      @include respond(sm) {
        max-width: $max-width-container-sm;
      }

      @include respond(md) {
        max-width: $max-width-container-md;
        padding: 64px 0 155px 0;
      }

      @include respond(lg) {
        max-width: $max-width-container-lg;
        padding: 64px 0 172px 0;
      }

      @include respond(xl) {
        gap: 105px;
        flex-direction: row;
        max-width: $max-width-container-xl;
      }

      @include respond(2xl) {
        gap: 60px;
        max-width: $max-width-container-2xl;
      }

      @include respond(3xl) {
        gap: 126px;
        max-width: $max-width-container-3xl;
      }
    }

    &__first,
    &__second {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__first {
      @include respond(sm) {
      }

      @include respond(md) {
      }

      @include respond(lg) {
      }

      @include respond(xl) {
        max-width: calc(50% - 51px);
      }

      @include respond(2xl) {
        max-width: calc(43% - 30px);
      }

      @include respond(3xl) {
        flex: 1 1 50%;
        max-width: calc(50% - 63px);
      }
    }

    &__second {
      @include respond(sm) {
      }

      @include respond(md) {
      }

      @include respond(lg) {
      }

      @include respond(xl) {
        flex: 1 1 50%;
        max-width: calc(50% - 51px);
      }

      @include respond(2xl) {
        max-width: calc(57% - 30px);
      }

      @include respond(3xl) {
        flex: 1 1 50%;
        max-width: calc(50% - 63px);
      }
    }

    &__title {
      margin-bottom: 24px;

      color: #fff;
      font-family: 'Montserrat Alternates';
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.14;

      @include respond(md) {
        margin-bottom: 32px;
        font-size: 28px;
      }
    }

    &__description {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;

      @include respond(md) {
        font-size: 24px;
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;

      @include respond(md) {
        gap: 32px;
      }

      @include respond(xl) {
        gap: 30px;
      }
    }

    &__item {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    &__img {
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }

    &__text {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;

      @include respond(md) {
        font-size: 20px;
      }
    }
  }
</style>
