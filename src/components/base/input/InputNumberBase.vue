<script setup lang="ts">
  const value = defineModel<number>()

  const { symbol } = defineProps<{
    symbol: string
  }>()
</script>

<template>
  <div class="input-number-base">
    <el-input v-model="value" type="number" class="input-number-base__input" />
    <div class="input-number-base__symbol">{{ symbol?.toUpperCase() }}</div>
  </div>
</template>

<style lang="scss">
  .input-number-base {
    display: flex;
    align-items: center;
    gap: 10px;

    &__input {
      color: #f8f8f8;
      font-size: 32px;
      font-weight: 700;
      line-height: 1;
      max-width: 144px;

      & input {
        text-align: right;
      }
    }

    &__symbol {
      color: #cdcdc8;
      font-size: 32px;
      font-weight: 400;
      line-height: 1;
    }

    & input::-webkit-outer-spin-button,
    & input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & input[type='number'] {
      -moz-appearance: textfield; /* Firefox */
    }

    //background-color: #409eff;

    .el-input__wrapper {
      border: none;
      outline: none;
      background-color: transparent;
      box-shadow: none;
    }
  }

  //.amount-input input::-webkit-outer-spin-button,
  //.amount-input input::-webkit-inner-spin-button {
  //  -webkit-appearance: none;
  //  margin: 0;
  //}
  //
  //.amount-input input[type='number'] {
  //  -moz-appearance: textfield; /* Firefox */
  //}
</style>
