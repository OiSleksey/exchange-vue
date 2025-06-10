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

  const handleChange = () => {}
</script>

<template>
  <div class="faq">
    <div class="faq__container">
      <h2 class="faq__header">FAQ — Frequently Asked Questions</h2>
      <div class="faq__content">
        <div class="faq__collapse">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item
              v-for="item in list"
              :title="item.title"
              :name="item.id"
              :key="item.id"
            >
              <div class="el-collapse-item__description">
                {{ item.description }}
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .faq {
    margin: 0 auto;
    //background-image: url('/img/fag/question.png');
    //background-repeat: no-repeat;
    //background-position: right center;
    //background-size: 50%;
    position: relative;
    padding: 0 20px 20px 20px;
    max-width: $max-width-container-3xl;

    @include respond(md) {
      padding: 0 52px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('/img/fag/question.png');
      background-repeat: no-repeat;
      background-position: right top 60%;
      background-size: 70%;
      opacity: 0.2;
      z-index: 0;
    }

    @include respond(sm) {
      &::before {
        background-position: right top 50%;
      }
    }

    @include respond(md) {
      &::before {
        background-size: 70%;
      }
    }

    @include respond(lg) {
      &::before {
        background-position: right bottom 30%;
        background-size: 70%;
      }
    }

    @include respond(xl) {
      padding: 0 52px;

      &::before {
        opacity: 0.8;
        background-position: right center;
        background-size: 50%;
      }
    }

    @include respond(3xl) {
      padding: 0;
    }

    &__container {
      //max-width: 10px;
      margin: 0 auto;

      @include respond(lg) {
        max-width: $max-width-container-lg;
      }

      @include respond(xl) {
        max-width: $max-width-container-3xl;
      }

      @include respond(3xl) {
      }
    }

    &__header {
      margin-bottom: 20px;

      color: #f8f8f8;
      text-align: center;
      font-family: 'JetBrains Mono';
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 1.4;
      letter-spacing: -1.92px;
      max-width: 90%;

      @include respond(md) {
        font-size: 64px;
        max-width: none;
        line-height: 1;
      }
    }

    &__content {
      min-height: 600px;
      width: 100%;
      display: flex;
      align-items: center;
      margin: 0 auto;

      @include respond(md) {
        min-height: 700px;
        font-size: 64px;
        max-width: none;
        line-height: 1;
      }

      @include respond(lg) {
        max-width: $max-width-container-lg;
      }

      @include respond(xl) {
        margin: 0;
        max-width: 50%;
      }
    }

    &__collapse {
      width: 100%;
      :deep(.el-collapse-item) {
        //padding-bottom: 50px;
      }

      :deep(.el-collapse-item__header) {
        color: #08b570;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.33;
        text-align: left;
        padding: 20px 0;
        height: auto;

        @include respond(md) {
          font-size: 24px;
          text-align: center;
        }
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

      .el-collapse-item__description {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.25;
        padding-top: 20px;
      }
    }
  }
</style>
