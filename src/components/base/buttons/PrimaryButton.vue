<script setup lang="ts">
  const { disabled, text = 'Become a partner' } = defineProps<{
    disabled?: boolean
    text?: string
  }>()
</script>

<template>
  <button class="outline-button" :disabled="disabled">
    <span>
      {{ text }}
    </span>
  </button>
</template>

<style scoped lang="scss">
  .outline-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 6px 22px;
    border-radius: 20px;
    border: 2px solid #117af6;
    background-color: #117af6;
    transition: background-color 0.2s;

    @include respond(lg) {
      padding: 6px 26px;
    }

    span {
      color: #fff;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.2; /* 140% */
      transition: color 0.2s;
    }

    &:hover {
      background-color: rgba(17, 122, 246, 0.46);
    }

    &:disabled {
      cursor: not-allowed;
      user-select: none;
      background-color: #117af6;
    }
  }
</style>
