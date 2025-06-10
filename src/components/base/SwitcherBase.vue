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

      <el-tooltip content="Description" placement="top">
        <el-icon><QuestionFilled /></el-icon>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { QuestionFilled } from '@element-plus/icons-vue'
  const value = defineModel<boolean>()
</script>

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
