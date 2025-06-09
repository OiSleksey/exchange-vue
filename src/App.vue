<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useStore } from './store/store.ts'

  const { fetchCryptoList } = useStore()
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
  onMounted(() => {
    document.documentElement.classList.add('dark')
    fetchCryptoList()
  })
</script>

<template>
  <router-view />
</template>

<style scoped></style>
