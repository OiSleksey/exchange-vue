<script setup lang="ts">
  const { disabled } = defineProps<{
    disabled?: boolean
  }>()
</script>

<template>
  <button class="telegram-button" :disabled="disabled">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <g clip-path="url(#clip0_6_2105)">
        <path
          opacity="0.46"
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#117AF6"
        />
        <path
          d="M9.15168 19.5666L28.435 12.1316C29.33 11.8083 30.1117 12.35 29.8217 13.7033L29.8233 13.7016L26.54 29.17C26.2967 30.2666 25.645 30.5333 24.7333 30.0166L19.7333 26.3316L17.3217 28.655C17.055 28.9216 16.83 29.1466 16.3133 29.1466L16.6683 24.0583L25.935 15.6866C26.3383 15.3316 25.845 15.1316 25.3133 15.485L13.8617 22.695L8.92501 21.155C7.85334 20.815 7.83001 20.0833 9.15168 19.5666Z"
          fill="#F8F8F8"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_2105">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </button>
</template>

<style scoped lang="scss">
  .telegram-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #317bf2;
    border-radius: 50%;
    transition: background-color 0.2s;
    padding: 0;

    svg {
      width: 40px;
      aspect-ratio: 1/1;
    }

    &:hover {
      background-color: #345d94;
    }

    &:disabled {
      cursor: not-allowed;
      user-select: none;
      background-color: #317bf2;
    }
  }
</style>
