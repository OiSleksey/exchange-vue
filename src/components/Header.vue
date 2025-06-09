<script setup lang="ts">
  import OutlineButton from '@/components/base/buttons/OutlineButton.vue'
  import PrimaryButton from '@/components/base/buttons/PrimaryButton.vue'
  import LogoComponent from '@/components/base/LogoComponent.vue'
  import { useRouter } from 'vue-router'

  const { isDisplayDashboard = false } = defineProps<{
    isDisplayDashboard?: boolean
  }>()

  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
</script>

<template>
  <header class="header">
    <div class="header__container">
      <LogoComponent variant="dark" />
      <div class="header__controls">
        <OutlineButton v-if="isDisplayDashboard" @click="handleClick" />
        <PrimaryButton />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  //@use '@/assets/styles/_media.scss' as media;

  .header {
    padding: 16px 16px 0 16px;
    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      border-radius: 20px;
      background: #f8f8f8;
      padding: 15px 66px;
      box-shadow: 0px 4px 8.3px 0px rgba(0, 0, 0, 0.09);
    }

    //
    //@include respond(xl) {
    //  background: red;
    //}

    &__logo {
    }

    &__controls {
      display: flex;
      align-items: center;
      gap: 28px;
    }
  }
</style>
