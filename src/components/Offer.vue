<script setup lang="ts">
  import { ref, reactive, onMounted, computed } from 'vue'
  import { useStore } from '@/store/store.ts'
  import axios from 'axios'
  import { storeToRefs } from 'pinia'
  import DropdownBase from '@/components/base/DropdownBase.vue'
  import InputNumberBase from '@/components/base/input/InputNumberBase.vue'
  import SwitcherBase from '@/components/base/SwitcherBase.vue'
  import PrimaryButton from '@/components/base/buttons/PrimaryButton.vue'
  import { useRouter } from 'vue-router'
  import type { FormInstance, FormRules } from 'element-plus'
  import { useNavigation } from '@/composables/navigation.ts'

  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const { navigateToSupport, navigateToConvert, navigateToHome } = useNavigation()

  const store = useStore()
  const { cryptoList, fromCoin, toCoin, fromAmount, toAmount, floatingRate, isReverse, fiatList } =
    storeToRefs(store)

  const router = useRouter()
  const isLoading = ref<boolean>(false)
  const ruleFormRef = ref<FormInstance>(null)
  const rotation = ref(0)

  const state = reactive({
    crypto: 'BTC',
    fiat: 'USD',
    amount: 10,
    exchangeRate: 1,
    convertedAmount: null,
    cryptoOptions: ['BTC', 'ETH', 'USDT'],
    fiatOptions: ['USD', 'EUR', 'UAH', 'RUB'],
  })

  function handleSelectFrom(item: { symbol: string; image: string }) {
    fromCoin.value = item
  }

  function handleSelectTo(item: { symbol: string; image: string }) {
    toCoin.value = item
  }

  const track = computed(()=> {
    return [
      {
        title: t("convert_hero_1_stack"),
        isActive: true,
      },
      {
        title: t("convert_hero_2_stack"),
        isActive: false,
      },
      {
        title: t("convert_hero_3_stack"),
        isActive: false,
      },
      {
        title: t("convert_hero_4_stack"),
        isActive: false,
      },
    ]


  })
  const form = reactive({
    address: '',
  })

  const rules = reactive({
    address: [
      { required: true, address: 'Please enter a  XMR Address ', trigger: 'change' },
      { min: 3, message: 'Length must be more than 3 characters', trigger: 'change' },
    ],
  })

  const onSubmit = async (event, formEl: FormInstance | undefined) => {
    const el = event?.currentTarget
    // postbackFunc()
    if (!formEl) return

    await formEl.validate((valid: boolean) => {
      if (valid) {
        navigateToSupport()
      }
    })
  }

  const handleReverse = () => {
    store.reverseExchange()
    rotation.value -= 360
  }
</script>

<template>
  <!--  <div>-->
  <div class="offer">
    <div class="track offer__track">
      <div class="track__list">
        <div
          class="track__item"
          v-for="(item, index) in track"
          :key="index"
          :class="{ active: item.isActive }"
        >
          <div class="track__title">
            {{ item.title }}
          </div>
          <div v-if="track.length !== index + 1" class="track__arrow">
            <svg
              class="track__svg desktop"
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="12"
              viewBox="0 0 99 12"
              fill="none"
            >
              <path d="M99 6L89 0.226497V11.7735L99 6ZM0 6V7H90V6V5H0V6Z" fill="#596376" />
            </svg>

            <svg
              class="track__svg mobile"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
            >
              <path d="M20 6L10 0.226497V11.7735L20 6ZM0 6V7H11V6V5H0V6Z" fill="#596376" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="offer__header">{{t('convert_hero_title')}}</div>
    <div class="offer__description">{{t('convert_hero_1_select')}}</div>
    <div class="exchange-form">
      <div class="exchange-form__wrapper">
        <template v-if="!isReverse">
          <div class="currency-row">
            <DropdownBase :list="cryptoList" v-model="fromCoin" @select="handleSelectFrom" />
            <InputNumberBase v-model="fromAmount" :symbol="fromCoin.symbol" />
          </div>
        </template>
        <template v-else>
          <div class="currency-row">
            <DropdownBase :list="fiatList" v-model="toCoin" @select="handleSelectTo" />
            <InputNumberBase v-model="toAmount" :symbol="toCoin.symbol" />
          </div>
        </template>

        <div class="exchange-icon">
          <div
            class="exchange-icon__img"
            @click="handleReverse"
            :style="{ transform: `rotate(${rotation}deg)` }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C10.75 22 9.57917 21.7625 8.4875 21.2875C7.39583 20.8125 6.44583 20.1708 5.6375 19.3625C4.82917 18.5542 4.1875 17.6042 3.7125 16.5125C3.2375 15.4208 3 14.25 3 13H5C5 14.95 5.67917 16.6042 7.0375 17.9625C8.39583 19.3208 10.05 20 12 20C13.95 20 15.6042 19.3208 16.9625 17.9625C18.3208 16.6042 19 14.95 19 13C19 11.05 18.3208 9.39583 16.9625 8.0375C15.6042 6.67917 13.95 6 12 6H11.85L13.4 7.55L12 9L8 5L12 1L13.4 2.45L11.85 4H12C13.25 4 14.4208 4.2375 15.5125 4.7125C16.6042 5.1875 17.5542 5.82917 18.3625 6.6375C19.1708 7.44583 19.8125 8.39583 20.2875 9.4875C20.7625 10.5792 21 11.75 21 13C21 14.25 20.7625 15.4208 20.2875 16.5125C19.8125 17.6042 19.1708 18.5542 18.3625 19.3625C17.5542 20.1708 16.6042 20.8125 15.5125 21.2875C14.4208 21.7625 13.25 22 12 22Z"
                fill="#070B11"
              />
            </svg>
          </div>
        </div>
        <template v-if="!isReverse">
          <div class="currency-row">
            <DropdownBase :list="fiatList" v-model="toCoin" @select="handleSelectTo" />
            <InputNumberBase v-model="toAmount" :symbol="toCoin.symbol" disabled />
          </div>
        </template>
        <template v-else>
          <div class="currency-row">
            <DropdownBase :list="cryptoList" v-model="fromCoin" @select="handleSelectFrom" />
            <InputNumberBase v-model="fromAmount" :symbol="fromCoin.symbol" disabled />
          </div>
        </template>
      </div>

      <el-form
        ref="ruleFormRef"
        :model="form"
        :rules="rules"
        label-width="auto"
        class="exchange-form__form"
      >
        <el-form-item :label="t('convert_address_label')" label-position="top" prop="address">
          <el-input v-model="form.address" :placeholder="t('convert_address_placeholder')" />
        </el-form-item>

        <div class="floating-rate">
          <SwitcherBase v-model="floatingRate" />
        </div>

        <PrimaryButton
          text="Exchange"
          class="exchange-form__button"
          @click.prevent="
            (event) => {
              onSubmit(event, ruleFormRef)
            }
          "
          :disabled="isLoading"
        >      {{ t("exchange_button") }}</PrimaryButton>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .offer {
    max-width: $max-width-container-3xl;
    margin: 0 auto;
    padding: 40px 20px 100px 20px;

    @include respond(md) {
      padding: 56px 45px 100px 45px;
    }

    @include respond(lg) {
      padding: 56px 0 100px 0;
      max-width: $max-width-container-lg;
    }

    @include respond(xl) {
      max-width: $max-width-container-3xl;
      padding: 56px 76px 100px 76px;
    }

    @include respond(2xl) {
      max-width: $max-width-container-3xl;
      padding: 58px 0 190px 0;
    }

    &__header {
      margin-bottom: 50px;

      color: #f8f8f8;
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 56px;

      @include respond(md) {
        margin-bottom: 48px;
      }

      @include respond(2xl) {
        margin-bottom: 50px;
      }
    }

    &__description {
      margin-bottom: 30px;

      color: #f8f8f8;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.2;

      @include respond(md) {
        margin-bottom: 30px;
        font-size: 28px;
      }

      @include respond(xl) {
        margin-bottom: 30px;
      }

      @include respond(2xl) {
        margin-bottom: 30px;
      }
    }

    &__track {
      margin-bottom: 70px;

      @include respond(xl) {
        margin-bottom: 70px;
      }

      @include respond(2xl) {
        margin-bottom: 70px;
      }
    }
  }

  .track {
    &__list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;

      @include respond(md) {
        gap: 12px;
        justify-content: space-between;
      }

      @include respond(xl) {
        gap: 12px;
      }

      @include respond(2xl) {
        gap: 24px;
      }
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;

      @include respond(xl) {
        gap: 12px;
      }

      @include respond(2xl) {
        gap: 24px;
      }

      &.active {
        & .track__title {
          color: #117af6;
        }
        & .track__arrow svg {
          path[fill] {
            fill: #117af6;
          }
        }
      }
    }

    &__title {
      color: #596376;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 1.75;

      @include respond(md) {
        font-size: 16px;
      }

      @include respond(lg) {
        font-size: 16px;
      }

      @include respond(xl) {
        font-size: 32px;
      }

      @include respond(2xl) {
        font-size: 32px;
      }
    }

    &__arrow {
      width: 20px;

      @include respond(md) {
        width: 50px;
      }

      @include respond(lg) {
        width: 50px;
      }

      @include respond(xl) {
        width: 50px;
      }

      @include respond(2xl) {
        width: 99px;
      }

      //svg {
      //  width: 100%;
      //}
    }

    &__svg {
      width: 100%;

      &.desktop {
        display: none;

        @include respond(md) {
          display: block;
        }
      }

      &.mobile {
        display: block;

        @include respond(md) {
          display: none;
        }
      }
    }
  }

  .exchange-form {
    //background: #111827;
    //padding: 24px;
    border-radius: 16px;
    color: white;
    margin: auto;
    text-align: center;

    @include respond(lg) {
      padding: 0;
    }

    @include respond(xl) {
      padding: 0;
    }

    @include respond(2xl) {
      padding: 24px;
    }

    &__wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 20px;
      flex-direction: column;

      @include respond(xl) {
        flex-direction: row;
        gap: 10px;
      }

      & .currency-row {
        flex: 1 1 100%;
        //max-width: calc(50% - 5px);

        @include respond(xl) {
          flex: 1 1 50%;
          max-width: calc(50% - 5px);
        }
      }
    }

    &__header {
      margin-bottom: 28px;

      color: #f8f8f8;
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.12;
      letter-spacing: -0.64px;
    }

    &__button {
      width: 100%;
    }

    &__form {
      :deep(.el-form-item__label) {
        display: flex;
        justify-content: flex-start;

        color: #fff;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
      }

      :deep(.el-input__wrapper) {
        border-radius: 20px;
        background-color: rgba(205, 222, 242, 0.02);
        border: 1px solid rgba(18, 48, 87, 0.8);
        //box-shadow: 0px 0px 0px 1px rgba(18, 48, 87, 0.8);
        padding: 16px 20px;

        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 1;

        @include respond(xl) {
          padding: 16px 20px;
          font-size: 24px;
        }
      }
    }
  }

  .currency-row {
    background-color: rgba(205, 222, 242, 0.02);
    padding: 16px;
    border-radius: 40px;
    border: 1px solid rgba(18, 48, 87, 0.8);
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    gap: 8px;
    align-items: center;

    @include respond(md) {
      padding: 26px;
      border-radius: 60px;
      //margin-bottom: 28px;
      gap: 8px;
      flex-direction: row;
    }

    @include respond(xl) {
      margin: 12px 0;
    }
  }

  .exchange-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(18, 48, 87, 0.8);
    background-color: #070b11;
    width: 50px;
    height: 50px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      border-radius: 50%;
      background: #f8f8f8;
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: transform 0.4s ease;

      svg {
        width: 100%;
        max-height: 100%;
        max-width: 100%;
      }
    }
  }

  .floating-rate {
    margin: 24px 0;
    display: flex;
    justify-content: flex-start;
  }
</style>
