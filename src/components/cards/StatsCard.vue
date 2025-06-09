<script setup lang="ts">
  interface Data {
    count: string
    text: string
  }

  const { data = {} } = defineProps<{
    data?: Data
  }>()
</script>

<template>
  <div class="stats-card">
    <div class="stats-card__count">{{ data.count }}</div>
    <div class="stats-card__text">{{ data.text }}</div>
  </div>
</template>

<style scoped lang="scss">
  .stats-card {
    border-radius: 40px;
    background: rgba(5, 6, 7, 0.92);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;

    @include respond(sm) {
      padding: 20px;
      border-radius: 60px;
    }

    @include respond(md) {
      padding: 32px;
      gap: 40px;
      border-radius: 60px;
    }

    &__count {
      color: #03ed66;
      text-align: center;
      font-size: 40px;
      font-style: normal;
      font-weight: 800;
      line-height: 1;

      @include respond(sm) {
        font-size: 56px;
      }

      @include respond(md) {
        font-size: 64px;
      }

      @include respond(2xl) {
        font-size: 74px;
      }
    }

    &__text {
      color: #fff;

      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
    }
  }
</style>
