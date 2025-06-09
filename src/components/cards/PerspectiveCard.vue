<script setup lang="ts">
  interface Data {
    url: string
    alt: string
    textHtml?: string
  }

  const { data = {} } = defineProps<{
    data?: Data
  }>()
</script>

<template>
  <div class="perspective-card">
    <div class="perspective-card__img">
      <img :src="data.url" alt="alt" />
    </div>
    <div class="perspective-card__text" v-html="data.textHtml" />
  </div>
</template>

<style scoped lang="scss">
  .perspective-card {
    border-radius: 40px;
    background: #050607;
    box-shadow:
      2px 2px 3.8px 0px rgba(0, 0, 0, 0.1),
      5px 6px 10px 0px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 16px 32px;

    @include respond(sm) {
      border-radius: 80px;
      flex-direction: row;
      justify-content: flex-start;
      gap: 32px;
      padding: 32px;
    }

    @include respond(md) {
      padding: 24px 32px;
    }

    &__img {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      max-width: 80px;
      max-height: 80px;
      padding: 14px;
      background-color: #03ed66;
      flex-shrink: 0;

      img {
        width: 100%;
      }
    }

    &__text {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      text-align: center;

      :deep(.big) {
        font-size: 28px;
        font-weight: 700;
      }

      :deep(.middle) {
        font-weight: 800;
      }

      @include respond(sm) {
        text-align: left;
      }

      @include respond(md) {
        font-size: 20px;

        :deep(.big) {
          font-size: 32px;
          font-weight: 700;
        }

        :deep(.middle) {
          font-size: 24px;
        }
      }
    }
  }
</style>
