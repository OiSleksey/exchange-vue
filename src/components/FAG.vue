<script setup lang="ts">
  import { ref } from 'vue'
  import type { CollapseModelValue } from 'element-plus'

  const list = [
    {
      id: '1',
      title: 'How long does the exchange take?',
      description:
        'Usually between 5 and 30 minutes, depending on network congestion. We begin processing immediately after payment is confirmed.',
    },
    {
      id: '2',
      title: 'Are there any hidden fees?',
      description:
        'No. We lock the rate and show the final amount before the exchange starts. Everything is fully transparent.',
    },
    {
      id: '3',
      title: 'Do I need to register?',
      description:
        'No. You can exchange cryptocurrency without creating an account. It’s simple and confidential.',
    },
    {
      id: '4',
      title: 'What if something goes wrong?',
      description:
        "Contact our 24/7 support team via live chat or email — we're always ready to help.",
    },
  ]
  const activeNames = ref(list.map((item) => item.id))
  const handleChange = (val: CollapseModelValue) => {
    console.log(val)
  }
</script>

<template>
  <div class="faq">
    <h2 class="faq__header">FAQ — Frequently Asked Questions</h2>
    <div class="faq__content">
      <div class="faq__collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item v-for="item in list" :title="item.title" :name="item.id" :key="item.id">
            <div class="el-collapse-item__description">
              {{ item.description }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .faq {
    max-width: $max-width-container-3xl;
    margin: 0 auto;
    background-image: url('/img/fag/question.png');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 50%;

    &__header {
      margin-bottom: 20px;

      color: #f8f8f8;
      text-align: center;
      font-family: 'JetBrains Mono';
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -1.92px;
    }

    &__content {
      min-height: 700px;
      max-width: 50%;
      width: 100%;
      display: flex;
      align-items: center;
    }

    &__collapse {
      width: 100%;

      :deep(.el-collapse-item__header) {
        color: #08b570;
        font-size: 24px;
        font-weight: 700;
        line-height: 1.33;
      }

      :deep(.el-collapse) {
        color: #08b570;
        font-size: 24px;
        font-weight: 700;
        line-height: 1.33;
      }

      :deep(.el-collapse) {
        border-top-color: transparent;
      }

      :deep(.el-icon path) {
        fill: #f8f8f8;
      }
    }
  }
</style>
