<script setup lang="ts">
  import { useStore } from '@/store/store.ts'
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'

  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const { cryptoList } = storeToRefs(useStore())

  const countByRow = computed(() => {
    const allCount = cryptoList.value?.length || 0
    return Math.floor(allCount / 3)
  })

  const firstRow = computed(() => cryptoList.value.slice(0, countByRow.value))
  const secondRow = computed(() => cryptoList.value.slice(countByRow.value, countByRow.value * 2))
  const thirdRow = computed(() => cryptoList.value.slice(countByRow.value * 2, -1))
</script>

<template>
  <div class="crypto-component">
    <h4 class="crypto-component__header">{{ t('crypto_component_header') }}</h4>
    <div class="crypto-component__body">
      <div class="crypto-component__list">
        <div class="crypto-component__item" v-for="item in firstRow" :key="item.id">
          <div class="crypto-component__img">
            <img :src="item.image" alt="image" />
          </div>
          <div class="crypto-component__name">
            {{ item.symbol.toUpperCase() }}
          </div>
        </div>
      </div>
      <div class="crypto-component__list">
        <div class="crypto-component__item" v-for="item in secondRow" :key="item.id">
          <div class="crypto-component__img">
            <img :src="item.image" alt="image" />
          </div>
          <div class="crypto-component__name">
            {{ item.symbol.toUpperCase() }}
          </div>
        </div>
      </div>
      <div class="crypto-component__list">
        <div class="crypto-component__item" v-for="item in thirdRow" :key="item.id">
          <div class="crypto-component__img">
            <img :src="item.image" alt="image" />
          </div>
          <div class="crypto-component__name">
            {{ item.symbol.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .crypto-component {
    max-width: 100%;
    overflow: hidden;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(7, 11, 17, 1) 0%,
        rgba(7, 11, 17, 0.3) 40%,
        rgba(7, 11, 17, 0) 100%
      );
      pointer-events: none;
    }

    &__header {
      margin-bottom: 12px;

      color: #f8f8f8;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.7;
      text-transform: uppercase;

      @include respond(md) {
        font-size: 32px;
      }
    }

    &__list {
      padding: 8px 0 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      @include respond(md) {
        gap: 28px;
        padding: 16px 0 20px 0;
      }

      &:first-child {
        justify-content: flex-start;
      }

      &:last-child {
        justify-content: flex-end;
      }
    }

    &__item {
      flex-shrink: 0;
      border-radius: 20px;
      border: 1px solid rgba(18, 48, 87, 0.2);
      background-color: rgba(205, 222, 242, 0.02);
      box-shadow: 0px 4px 8.3px 0px rgba(0, 0, 0, 0.09);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 16px;
    }

    &__img {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    &__name {
      color: #fff;

      text-align: center;
      font-size: 32px;
      font-weight: 400;
      line-height: normal;
      min-width: 100px;
    }
  }
</style>
