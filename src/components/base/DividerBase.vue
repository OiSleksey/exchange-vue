<script setup lang="ts">
  const { text = '' } = defineProps<{
    text?: string
  }>()
</script>

<template>
  <div class="divider">
    <div class="divider__circle"></div>
    <div class="divider__line"></div>
    <div class="divider__circle"></div>
  </div>
</template>

<style scoped lang="scss">
  .divider {
    display: flex;
    align-items: center;

    &__line {
      width: 100%;
      height: 1.5px;
      background: #fff;
    }

    &__circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #fff;
    }
  }
</style>
