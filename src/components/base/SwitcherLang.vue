<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n()

  const changeLocale = (lang) => {
    locale.value = lang
    localStorage.setItem('locale', lang) // чтобы сохранялось
  }
</script>

<template>
<!--  <div class="header__container">-->
<!--    -->
<!--  </div>-->
  <select :value="locale" @change="changeLocale($event.target.value)" class="select-lang">
    <option class="select-lang__option" value="en">EN</option>
    <option  class="select-lang__option" value="ru">RU</option>
    <option  class="select-lang__option" value="uk">UA</option>
  </select>
</template>

<style lang="scss" scoped>
 .select-lang {
   background-color: transparent;
   border: none;
   color: #020C19;
   text-align: center;
   font-size: 20px;
   font-style: normal;
   font-weight: 500;
   line-height: 1.4;
   outline: none;

   &:focus, &:active, &:focus-within, &:focus-visible {
     background-color: transparent;
     border: none;
     outline: none;
   }

   &__option {
     text-align: center;
     font-size: 20px;
     font-style: normal;
     font-weight: 500;
     line-height: 1.4;
     //background-color: #409eff;
   }
 }
</style>
