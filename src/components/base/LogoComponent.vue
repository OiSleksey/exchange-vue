<script setup lang="ts">
  const { variant = 'light' } = defineProps<{
    variant?: 'light' | 'dark'
  }>()
</script>

<template>
  <div class="logo-component">
    <div class="logo-component__img">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          d="M22.8394 2.91479C33.932 2.91479 42.9242 11.9071 42.9243 22.9998C42.9243 34.0925 33.9321 43.0847 22.8394 43.0847C11.7467 43.0846 2.75439 34.0924 2.75439 22.9998C2.7545 11.9072 11.7468 2.9149 22.8394 2.91479Z"
          stroke="#117AF6"
          stroke-width="4.40224"
        />
        <path d="M16.7864 19.9734H27.792V26.0264H16.7864V19.9734Z" fill="#08B570" />
        <path d="M37.4219 22.9999L27.3105 30.8631V15.1367L37.4219 22.9999Z" fill="#08B570" />
        <path d="M6.88135 22.9999L16.9927 30.8631V15.1367L6.88135 22.9999Z" fill="#08B570" />
        <rect
          x="21.4751"
          y="15.7034"
          width="4.95252"
          height="13.6007"
          transform="rotate(-131.981 21.4751 15.7034)"
          fill="#117AF6"
        />
        <rect
          x="16.5625"
          y="42.8413"
          width="4.95252"
          height="14.2872"
          transform="rotate(-131.981 16.5625 42.8413)"
          fill="#117AF6"
        />
      </svg>
    </div>
    <div
      class="logo-component__text"
      :class="{ light: variant === 'light', dark: variant === 'dark' }"
    >
      <span>Global</span><span>Ex</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .logo-component {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &__img {
      width: 44.573px;
      height: 44.573px;
    }

    &__text {
      color: #020c19;

      span {
        font-family: 'JetBrains Mono', monospace;
        font-size: 26.138px;
        font-weight: 800;
        letter-spacing: -1.307px;

        &:last-child {
          color: #08b570;
        }
      }

      &.light span:first-child {
        color: #fff;
      }

      &.dark span:first-child {
        color: #020c19;
      }
    }
  }
</style>
