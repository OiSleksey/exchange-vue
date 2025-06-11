<template>
  <div class="switcher-component">
    <div class="switcher-component__wrapper">
      <el-switch
        v-model="value"
        :active-value="true"
        :inactive-value="false"
        class="custom-switch"
        size="large"
      >
        <!-- Вставка SVG -->
        <template #active-action>
          <div class="switch-icon">
            <img src="/img/base/lock-icon.svg" alt="lock" />
          </div>
        </template>
        <template #inactive-action>
          <div class="switch-icon">
            <img src="/img/base/unlock-icon.svg" alt="lock" />
          </div>
        </template>
      </el-switch>
    </div>
    <div class="switcher-component__info">
      <span class="switch-label">{{ value ? 'Floating Rate' : 'Fixed Rate' }}</span>

      <el-popover
        :content="description"
        placement="top"
        class="wide-popover"
        popper-class="description-popover"
      >
        <template #reference>
          <el-icon><QuestionFilled /></el-icon>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { QuestionFilled } from '@element-plus/icons-vue'
  const value = defineModel<boolean>()

  const fixedRateDescription =
    'We fix the exchange rate to shield you from market volatility. The rate stays locked as long as the deposit is confirmed within 30 minutes.'
  const floatingRateDescription =
    'With the floating rate option, the final amount of cryptocurrency you receive may be greater or less than the original estimate due to changes in market prices.'

  const description = computed(() => {
    if (!value.value) return fixedRateDescription
    return floatingRateDescription
  })
</script>

<style lang="scss">
  .el-popper.description-popover {
    max-width: none; /* убираем ограничение по умолчанию */
    width: 300px !important;
    background-color: rgba(11, 15, 22, 0.94) !important;
    max-height: none !important;
    overflow: hidden;

    color: #f8f8f8 !important;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33; /* 133.333% */
    border-radius: 20px !important;
    border: 1px solid #117af6 !important;

    &__arrow {
      color: #f8f8f8 !important;

      &:before {
        background-color: rgba(11, 15, 22, 0.94) !important;
      }
    }
  }
</style>

<style scoped lang="scss">
  .switcher-component {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    &__info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .custom-switch {
      --el-switch-on-color: #ffffff;
      --el-switch-off-color: #ffffff;

      border: none;
    }

    :deep(.el-switch__core) {
      padding: 3px;
      border-radius: 87px;
      height: 37px;
      width: 74px;
    }

    :deep(.el-switch--large .el-switch__core .el-switch__action) {
      left: 9px;
    }

    :deep(.el-switch--large.is-checked .el-switch__core .el-switch__action) {
      left: calc(100% - 28px);
    }

    .switch-icon {
      border-radius: 50%;
      background: #117af6;
      /* shad1 */
      box-shadow: 0px 4px 8.3px 0px rgba(0, 0, 0, 0.09);
      width: 31px;
      height: 31px;
      padding: 7px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 100%;
      }
    }
    .switch-label {
      color: #cdcdc8;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
    }
  }
</style>
