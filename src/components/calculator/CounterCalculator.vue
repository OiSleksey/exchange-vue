<script setup lang="ts">
  import CustomSlider from '@/components/slider/CustomSlider.vue'
  import { onBeforeUnmount, onMounted, ref } from 'vue'

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

  const CURRENCY_TYPE = 'currency'
  const DAY_TYPE = 'day'

  const countDays = ref(6)
  const countCurrency = ref(8)

  //

  const handleResize = () => {
    const innerWidth = window.innerWidth
    if (innerWidth < 744) {
      countDays.value = 6
      countCurrency.value = 8
    }
    if (innerWidth >= 744) {
      countDays.value = 9
      countCurrency.value = 10
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
  <div class="counter-calculator">
    <div class="counter-calculator__title">
      Наш Искусственный Интеллект просчитывает возможную доходность на основе реальных рыночных
      данных и поведения трейдеров
    </div>
    <div class="counter-calculator__sliders">
      <CustomSlider
        v-model="investment"
        :min="markCurrency[0]"
        :max="20000"
        :count="markCurrency[markCurrency.length - 1]"
        label="Инвестиции"
        :suffix="CURRENCY_TYPE"
        :marks="markCurrency"
        class="counter-calculator__slider"
      />
      <CustomSlider
        v-model="days"
        :min="markDays[0]"
        :max="markDays[markDays.length - 1]"
        :count="countDays"
        label="Срок"
        :suffix="DAY_TYPE"
        :marks="markDays"
        class="counter-calculator__slider"
      />
    </div>
    <a href="#form-message" class="counter-calculator__bottom">
      <div class="counter-calculator__earnings">
        <div class="counter-calculator__img">
          <img src="/img/badge/graph-icon.svg" alt="graph" />
        </div>
        <div class="counter-calculator__header">Забрать</div>
      </div>
      <div class="counter-calculator__line"></div>
      <div class="counter-calculator__count">
        <span>{{ result }}$</span>
      </div>
    </a>
  </div>
</template>

<style lang="scss">
  .counter-calculator {
    border-radius: 40px;
    background: #050607;
    box-shadow:
      2px 2px 3.8px 0px rgba(0, 0, 0, 0.1),
      5px 6px 10px 0px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(5px);
    padding: 20px 14px;
    display: flex;
    flex-direction: column;
    gap: 28px;

    @include respond(sm) {
      padding: 20px 20px;
      gap: 28px;
    }

    @include respond(md) {
      padding: 32px 40px;
      gap: 40px;
    }

    &__title {
      color: #fff;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.42;

      @include respond(sm) {
        font-size: 16px;
      }

      @include respond(md) {
        font-size: 20px;
      }

      @include respond(xl) {
        margin: 0 auto;
        max-width: 834px;
      }

      @include respond(3xl) {
        font-size: 24px;
        max-width: 1154px;
      }
    }

    &__sliders {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
      //padding: 0 20px;

      @include respond(md) {
        gap: 44px;
      }

      @include respond(xl) {
        margin: 0 auto;
        max-width: 594px;
      }
      @include respond(2xl) {
        max-width: none;
        flex-direction: row;
        gap: 60px;
      }

      @include respond(3xl) {
        gap: 174px;
      }
    }

    &__slider {
      width: 100%;
      flex: 1 0 100%;

      @include respond(2xl) {
        flex: 1 0 50%;
        max-width: calc(50% - 30px);
      }

      @include respond(3xl) {
        flex: 1 0 50%;
        max-width: calc(50% - 87px);
      }
    }

    &__bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      text-decoration: none;

      @include respond(md) {
        flex-direction: row;
        gap: 20px;
      }

      &:hover {
        .counter-calculator__header,
        .counter-calculator__count span {
          transform: skewX(-10deg);
        }
      }
    }

    &__earnings {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      @include respond(sm) {
        gap: 16px;
      }

      @include respond(md) {
        gap: 20px;
      }
    }

    &__img {
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      @include respond(sm) {
        width: 24px;
      }

      img {
        width: 100%;
      }
    }

    &__header {
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
      transition: all 0.2s ease;
      will-change: transform;

      @include respond(sm) {
        font-size: 24px;
      }
    }

    &__line {
      width: 16px;
      height: 2px;
      background-color: #fff;
    }

    &__count {
      text-decoration: none;
      border-radius: 24px;
      border: 1.5px solid #03ed66;
      box-shadow: 2px 1px 13.4px 0px rgba(21, 240, 114, 0.1);
      padding: 10px 20px;
      min-width: 198px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: #fff;
        text-align: center;
        font-family: 'Montserrat Alternates';
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        transition: all 0.2s ease;
        will-change: transform;
      }
    }
  }
</style>
