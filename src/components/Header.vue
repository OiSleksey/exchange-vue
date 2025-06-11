<script setup lang="ts">
  import OutlineButton from '@/components/base/buttons/OutlineButton.vue'
  import PrimaryButton from '@/components/base/buttons/PrimaryButton.vue'
  import LogoComponent from '@/components/base/LogoComponent.vue'
  import BurgerButton from '@/components/base/buttons/BurgerButton.vue'
  import { useNavigation } from '@/composables/navigation.ts'

  const { navigateToSupport, navigateToConvert, navigateToHome } = useNavigation()

  const { isDisplayDashboard = false } = defineProps<{
    isDisplayDashboard?: boolean
  }>()
</script>

<template>
  <header class="header">
    <div class="header__container">
      <LogoComponent variant="dark" />
      <div class="header__controls desktop">
        <OutlineButton v-if="isDisplayDashboard" @click="navigateToHome" />
        <PrimaryButton @click="navigateToSupport" />
      </div>
      <div class="header__controls mobile">
        <BurgerButton :is-display-dashboard="isDisplayDashboard" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  //@use '@/assets/styles/_media.scss' as media;

  .header {
    padding: 8px 8px 0 8px;

    @include respond(md) {
      padding: 16px 16px 0 16px;
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      border-radius: 20px;
      background: #f8f8f8;
      padding: 12px 20px;
      box-shadow: 0px 4px 8.3px 0px rgba(0, 0, 0, 0.09);

      @include respond(md) {
        padding: 15px 34px;
      }
      @include respond(lg) {
        padding: 15px 44px;
      }

      @include respond(2xl) {
        padding: 15px 66px;
      }
    }

    &__logo {
    }

    &__controls {
      display: flex;
      align-items: center;
      gap: 28px;

      &.desktop {
        display: none;
        @include respond(md) {
          display: flex;
        }
      }

      &.mobile {
        display: flex;

        @include respond(md) {
          display: none;
        }
      }
    }
  }
</style>
