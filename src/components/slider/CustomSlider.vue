<script setup lang="ts">
  import { computed, watch, ref, onMounted, nextTick } from 'vue'

  interface Props {
    modelValue: number
    min: number
    max: number
    step?: number
    label?: string
    suffix?: string
    count?: number
    marks?: number[]
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['update:modelValue'])

  const CURRENCY_TYPE = 'currency'
  const DAY_TYPE = 'day'

  const sliderPercent = ref(0)

  function mapPercentToValue(percent: number): number {
    const arr = props.marks
    const maxPercent = 100
    const stepPercent = maxPercent / (arr.length - 1)

    for (let i = 1; i < arr.length; i++) {
      const p0 = stepPercent * (i - 1)
      const p1 = stepPercent * i
      if (percent >= p0 && percent <= p1) {
        const localPercent = (percent - p0) / (p1 - p0)
        return arr[i - 1] + (arr[i] - arr[i - 1]) * localPercent
      }
    }
    return arr[arr.length - 1]
  }

  function mapValueToPercent(value: number): number {
    const arr = props.marks
    const stepPercent = 100 / (arr.length - 1)

    for (let i = 1; i < arr.length; i++) {
      const v0 = arr[i - 1]
      const v1 = arr[i]
      if (value >= v0 && value <= v1) {
        const localPercent = (value - v0) / (v1 - v0)
        return stepPercent * (i - 1) + localPercent * stepPercent
      }
    }
    return 100
  }

  const getDayWord = (num: number): string => {
    const mod10 = num % 10
    const mod100 = num % 100

    if (mod10 === 1 && mod100 !== 11) return 'день'
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'дня'
    return 'дней'
  }

  const getSuffix = (value: number, suffix: string): string => {
    if (props.suffix === DAY_TYPE) {
      return getDayWord(value)
    }
    return '$'
  }

  const onSliderChange = (percent: number) => {
    emit('update:modelValue', mapPercentToValue(percent))
  }

  const displayData = computed(() => {
    return Math.round(props.modelValue)
  })

  onMounted(() => {
    nextTick(() => {
      sliderPercent.value = mapValueToPercent(props.modelValue)
    })
  })
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider-value">
      <span class="slider-value__label">{{ label }}:</span>
      <span class="slider-value__count">{{ displayData }}{{ getSuffix(displayData, suffix) }}</span>
    </div>
    <!--    :marks="generatedMarks"-->
    <el-slider
      v-model="sliderPercent"
      :min="0"
      :max="100"
      :step="1"
      :show-tooltip="false"
      :format-tooltip="(val) => `${val} ${suffix}`"
      height="10px"
      :show-stops="false"
      @input="onSliderChange"
    />
    <div class="slider-marks">
      <div v-for="value in marks" :key="value" class="slider-marks__item">
        {{ `${value} ${getSuffix(value)}` }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .slider-marks {
    display: flex;
    justify-content: space-between;
    padding-top: 11px;

    @include respond(md) {
      font-size: 13px;
    }

    &__item {
      color: #414141;
      font-size: 8px;
      font-style: normal;
      font-weight: 800;
      line-height: 1;
      text-transform: uppercase;
      width: 28px;
      white-space: nowrap;
      text-align: center;
      //text-align: right;

      &:first-child {
        text-align: left;
      }

      &:last-child {
        text-align: right;
      }

      @include respond(sm) {
        font-size: 11px;
      }

      @include respond(md) {
        min-width: 46px;
        font-size: 12px;
      }

      @include respond(xl) {
        min-width: 50px;
      }
    }
  }

  .slider-wrapper {
    //background: #0b0b0c;
    //padding: 0 0 20px;
    border-radius: 12px;
    color: #fff;
  }

  .slider-value {
    margin-bottom: 11px;
    display: flex;
    align-items: center;
    gap: 8px;

    @include respond(md) {
      margin-bottom: 14px;
    }

    &__label {
      color: #fff;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 1;

      @include respond(md) {
        font-size: 16px;
      }
    }

    &__count {
      color: #fff;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;

      @include respond(md) {
        font-size: 16px;
      }
    }
  }

  :deep(.el-slider__runway) {
    background-color: #3a3a3a;
    height: 10px;
    border-radius: 100px;
  }

  :deep(.el-slider__bar) {
    background-color: #03ed66;
    height: 10px;
    border-radius: 100px;
  }

  :deep(.el-slider__button-wrapper) {
    transform: translate(-50%, 2px);
  }

  :deep(.el-slider__button) {
    width: 10px;
    height: 20px;
    background-color: #03ed66;
    border: none;
    border-radius: 42px;
    //top: -0px;
  }

  :deep(.el-slider__marks) {
    //padding: 0 12px; // отступы внутри, чтобы крайние метки не прилипали
    //overflow: hidden;
    //width: 100%;
    //box-sizing: border-box;
  }

  :deep(.el-slider__marks-text) {
    //transform: translateX(-50%);
    //white-space: nowrap;
    //max-width: 50px;
    //text-align: center;
    //overflow: hidden;
    //text-overflow: ellipsis;

    margin-top: 26px;

    //white-space: nowrap;
    //overflow: hidden;
    //text-overflow: ellipsis;
    //max-width: 40px;
    //text-align: center;

    color: #414141;
    font-size: 8px;
    font-style: normal;
    font-weight: 800;
    line-height: 1.33;
    text-transform: uppercase;

    @include respond(sm) {
      font-size: 12px;
    }
  }

  :deep(.el-slider__stop) {
    display: none;
  }
</style>
