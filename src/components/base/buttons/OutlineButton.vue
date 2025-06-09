<script setup lang="ts">
  const { disabled, text = 'Dashboard' } = defineProps<{
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
    padding: 6px 26px;
    border-radius: 20px;
    border: 2px solid #117af6;
    background-color: rgba(6, 90, 190, 0.2);
    transition: background-color 0.2s;

    span {
      color: #020c19;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.2; /* 140% */
      transition: color 0.2s;
    }

    &:hover {
      background-color: rgba(6, 90, 190, 0.76);

      span {
        color: #f8f8f8;
      }
    }

    &:disabled {
      cursor: not-allowed;
      user-select: none;
      background-color: rgba(6, 90, 190, 0.2);

      span {
        color: #020c19;
      }
    }
  }
</style>
