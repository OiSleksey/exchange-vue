<script setup lang="ts">
  const value = defineModel<string>()

  const { placeholder = '' } = defineProps<{
    placeholder?: string
  }>()
</script>

<template>
  <div class="input-text-base">
    <el-input v-model="value" class="input-text-base__input" :placeholder="placeholder" />
  </div>
</template>

<style lang="scss" scoped>
  .input-text-base {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    &__input {
      color: #f8f8f8;
      font-size: 32px;
      font-weight: 700;
      line-height: 1;
    }

    .el-input__wrapper {
      //border: none;
      //outline: none;
      //background-color: transparent;
      //box-shadow: none;
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
