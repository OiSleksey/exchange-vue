<script setup lang="ts">
  import { onMounted, watch } from 'vue'
  import { useStore } from './store/store.ts'
  import { storeToRefs } from 'pinia'

  const store = useStore()
  const { isReverse, fromAmount, toAmount, fromCoin, toCoin, floatingRate } = storeToRefs(store)
  // document.documentElement.classList.add('dark')

  // import { useHead } from 'unhead'
  // import {onMounted} from "vue";
  //
  // useHead({
  //   htmlAttrs: {
  //     class: 'dark',
  //   },
  // })
  //

  let timeout: null | number = null

  const deepCopyData = <T,>(data: T): T => {
    return JSON.parse(JSON.stringify(data))
  }

  const setExchange = async (stateRevers: boolean): Promise<void> => {
    clearTimeout(timeout)

    try {
      timeout = setTimeout(async () => {
        const fromId = fromCoin.value?.id || ''
        const toId = toCoin.value?.id || ''
        if (!stateRevers) {
          const amount = fromAmount.value || 0
          if (!amount) {
            toAmount.value = 0
            return
          }

          if (fromId && toId) {
            const rate = await store.submitExchange(fromId, toId)
            if (typeof rate === 'number') {
              toAmount.value = amount * rate
            }
          }
        } else {
          const amount = toAmount.value || 0
          if (!amount) {
            fromAmount.value = 0
            return
          }

          if (fromId && toId) {
            const rate = await store.submitExchange(fromId, toId)
            if (typeof rate === 'number') {
              fromAmount.value = amount / rate
            }
          }
        }
      }, 1000) as unknown as number // Приведение типа для Node.js/браузеров
    } catch (error) {
      console.error((error as Error)?.message || error)
    }
  }

  watch(isReverse, (newValue) => {
    setExchange(newValue)
  })

  watch(toAmount, (newValue) => {
    if (isReverse.value) {
      setExchange(isReverse.value)
    }
  })

  watch(
    () => toCoin.value?.id,
    (newValue) => {
      if (newValue) {
        setExchange(isReverse.value)
      }
    },
  )

  watch(
    () => fromCoin.value?.id,
    (newValue) => {
      if (newValue) {
        setExchange(isReverse.value)
      }
    },
  )

  watch(fromAmount, (newValue) => {
    if (!isReverse.value) {
      setExchange(isReverse.value)
    }
  })

  watch(floatingRate, (newValue) => {
    if (newValue) {
      if (!isReverse.value) {
        toAmount.value = toAmount.value * 1.013
      } else {
        fromAmount.value = fromAmount.value * 1.013
      }
    } else {
      if (!isReverse.value) {
        toAmount.value = toAmount.value / 1.013
      } else {
        fromAmount.value = fromAmount.value / 1.013
      }
    }
  })

  onMounted(() => {
    document.documentElement.classList.add('dark')
    store.fetchCryptoList()
    store.fetchFiatList()
    // setStateCoin(isReverse.value)
  })
</script>

<template>
  <router-view />
</template>

<style scoped></style>
