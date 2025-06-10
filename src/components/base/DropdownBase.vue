<script setup lang="ts">
  import { ArrowDown } from '@element-plus/icons-vue'

  interface SelectOption {
    symbol: string
    image: string
  }

  const emit = defineEmits<{
    select: (item: SelectOption) => SelectOption
  }>()

  const { list } = defineProps<{
    list: SelectOption[]
  }>()

  const select = defineModel<SelectOption>()

  const handleSelect = (item: SelectOption) => {
    emit('select', item)
  }
</script>

<template>
  <el-dropdown @command="handleSelect" class="coin-dropdown-menu" trigger="click">
    <div class="coin-select">
      <div class="coin-option" v-if="select">
        <div class="coin-option__img" v-if="select.image">
          <img :src="select.image" alt="coin" />
        </div>
        <div class="coin-option__unit" v-if="select.unit">
          {{ select.unit }}
        </div>
        <div class="coin-option__label">{{ select.symbol.toUpperCase() }}</div>
      </div>
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </div>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in list" :key="item.symbol" :command="item">
          <div class="coin-option">
            <div class="coin-option__img" v-if="item.image">
              <img :src="item.image" alt="coin" />
            </div>
            <div class="coin-option__unit" v-if="item.unit">
              {{ item.unit }}
            </div>

            <div class="coin-option__label">{{ item.symbol.toUpperCase() }}</div>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss">
  .coin-select {
    display: flex;
    align-items: center;
  }

  .el-popper {
    margin-right: 6px;
    max-height: 300px;
    overflow-y: auto;
    &::-webkit-scrollbar-track {
      background-color: #117af6;
      margin: 16px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: transparent;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #fff;
    }
  }

  //.el-scrollbar {
  //  &::-webkit-scrollbar-track {
  //    //-webkit-box-shadow:
  //    //  0px 5px 5px 0px rgba(0, 0, 0, 0.04),
  //    //  0px 3px 14px 0px rgba(0, 0, 0, 0.01),
  //    //  0px 8px 10px 0px rgba(0, 0, 0, 0.02);
  //    //border-radius: 1rem;
  //    background-color: #cdcdc8;
  //    margin: 2rem;
  //    border-radius: 1rem;
  //  }
  //
  //  &::-webkit-scrollbar {
  //    width: 4px;
  //    height: 4px;
  //    background-color: transparent;
  //    border-radius: 1rem;
  //  }
  //
  //  &::-webkit-scrollbar-thumb {
  //    //outline: 1px solid #cdcdc8;
  //    border-radius: 1rem;
  //    //-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  //    background-color: #fff;
  //  }
  //}

  .coin-option {
    display: flex;
    align-items: center;
    gap: 8px;

    &__img {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__unit {
      min-width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      //border-radius: 50%;
      overflow: hidden;

      color: #fff;
      text-align: center;
      font-size: 28px;
      font-weight: 400;
      line-height: 1;
    }

    &__label {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

      text-align: center;
      font-size: 28px;
      font-weight: 400;
      line-height: 1;

      @include respond(md) {
        min-width: 100px;
      }
    }
  }

  //.el-select-dropdown {
  //  max-width: 200px;
  //}
  .el-dropdown-menu__item {
    height: 64px;
    padding: 12px;
    max-width: 200px;
  }
  .el-popper.el-dropdown__popper {
    border-radius: 20px;
    background: #070b11;
  }
</style>

<style scoped lang="scss"></style>
