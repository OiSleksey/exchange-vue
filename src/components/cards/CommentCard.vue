<script setup lang="ts">
  interface Data {
    count: string
    text: string
  }

  const { data = {} } = defineProps<{
    data?: Data
  }>()
</script>

<template>
  <div class="comment-card">
    <div class="comment-card__avatar">
      <img :src="data.avatar" alt="avatar" />
    </div>
    <div class="comment-card__info">
      <div class="comment-card__name">{{ data.name }}</div>
      <div class="comment-card__profession">{{ data.profession }}</div>
    </div>
    <div class="comment-card__description">{{ data.comment }}</div>
  </div>
</template>

<style scoped lang="scss">
  .comment-card {
    background: rgba(5, 6, 7, 0.88);
    box-shadow:
      2px 2px 3.8px 0px rgba(0, 0, 0, 0.1),
      5px 6px 10px 0px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    padding: 32px;
    gap: 32px;

    &__avatar {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    &__info {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    &__name {
      color: #03ed66;
      text-align: center;
      font-family: 'Montserrat Alternates';
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    &__proffession {
      color: #97989d;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 1.6;
      text-transform: capitalize;
    }

    &__description {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5; /* 150% */
    }
  }
</style>
