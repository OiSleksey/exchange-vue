<script setup lang="ts">
  import { nextTick, computed } from 'vue'

  const {
    symbol,
    disabled = false,
    modelValue = 0,
  } = defineProps<{
    symbol: string
    disabled?: boolean
    modelValue: number
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void
  }>()

  // const innerValue = computed({
  //   get: () => modelValue,
  //   set: (val: number | string) => {
  //     console.log('val ', val)
  //     const digitsOnly = String(val).replace(/\D/g, '')
  //     const parsed = parseFloat(val)
  //     const safeValue = Number.isFinite(parsed) ? parsed : 0
  //     console.log('safeValue ', safeValue)
  //     emit('update:modelValue', safeValue)
  //   },
  // })
  const innerValue = computed({
    get: () => modelValue,
    set: (val: number | string) => {
      // Преобразуем в строку и удаляем все НЕ цифры
      let digitsOnly = String(val).replace(/\D/g, '')

      // Удаляем начальные нули (но оставляем один ноль, если строка пуста)
      if (digitsOnly.length > 1 && digitsOnly.startsWith('0')) {
        digitsOnly = digitsOnly.replace(/^0+/, '')
      }

      const parsed = parseInt(digitsOnly, 10)
      const safeValue = Number.isFinite(parsed) ? parsed : 0
      emit('update:modelValue', safeValue)
    },
  })
</script>

<template>
  <div class="input-number-base">
    <!--    @input="handleInput"-->
    <el-input-number
      v-model="innerValue"
      class="input-number-base__input"
      :disabled="disabled"
      :controls="false"
      placeholder="0"
    />
    <div class="input-number-base__symbol">{{ symbol?.toUpperCase() }}</div>
  </div>
</template>

<style lang="scss">
  .input-number-base {
    display: flex;
    align-items: center;
    //gap: 10px;

    .el-input-number {
      //width: min-content;
      //max-width: 100px;
      width: auto;
    }

    .el-input.is-disabled {
      .el-input__wrapper {
        background-color: transparent;
        box-shadow: none;
      }
    }
    &__input {
      //max-width: 144px;

      & .el-input__inner {
        text-align: right;
        color: #f8f8f8;
        font-size: 32px;
        font-weight: 400;
        line-height: 1;
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
