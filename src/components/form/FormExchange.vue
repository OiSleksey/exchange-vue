<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue'
  import { useStore } from '@/store/store.ts'
  import axios from 'axios'
  import { storeToRefs } from 'pinia'
  import DropdownBase from '@/components/base/DropdownBase.vue'
  import InputNumberBase from '@/components/base/input/InputNumberBase.vue'
  import SwitcherBase from '@/components/base/SwitcherBase.vue'
  import PrimaryButton from '@/components/base/buttons/PrimaryButton.vue'
  import { useRouter } from 'vue-router'

  const store = useStore()
  const { cryptoList, fromCoin, toCoin, fromAmount, toAmount, floatingRate, fiatList, isReverse } =
    storeToRefs(store)
  const rotation = ref(0)

  const router = useRouter()

  function handleSelectFrom(item: { symbol: string; image: string }) {
    fromCoin.value = item
  }

  function handleSelectTo(item: { symbol: string; image: string }) {
    toCoin.value = item
  }

  const coins = ['asd']

  const state = reactive({
    crypto: 'BTC',
    fiat: 'USD',
    amount: 10,
    exchangeRate: 1,
    convertedAmount: null,
    cryptoOptions: ['BTC', 'ETH', 'USDT'],
    fiatOptions: ['USD', 'EUR', 'UAH', 'RUB'],
  })

  const submitExchange = async () => {
    router.push('/convert')
    return null
    if (!state.amount || state.amount <= 0) return

    const coinGeckoIds = {
      BTC: 'bitcoin',
      ETH: 'ethereum',
      USDT: 'tether',
    }

    try {
      const cryptoId = coinGeckoIds[state.crypto]
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
        params: {
          ids: cryptoId,
          vs_currencies: state.fiat.toLowerCase(),
        },
      })
      state.exchangeRate = response.data[cryptoId][state.fiat.toLowerCase()]
      state.convertedAmount = state.amount * state.exchangeRate
      // const url = 'https://t.me/your_operator_username';
      // window.open(url, '_blank');
    } catch (error) {
      console.error(error?.message || error)
      state.exchangeRate = null
      state.convertedAmount = null
    }
  }

  const handleReverse = () => {
    store.reverseExchange()
    rotation.value -= 360
  }
</script>

<template>
  <div class="exchange-form">
    <h3 class="exchange-form__header">Start Exchange</h3>

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

    <div class="floating-rate">
      <SwitcherBase v-model="floatingRate" />
    </div>

    <PrimaryButton text="Exchange" @click="store.navigateToSupport" class="exchange-form__button" />
  </div>
</template>

<style scoped lang="scss">
  .currency-row {
    background-color: rgba(205, 222, 242, 0.02);
    padding: 16px;
    border-radius: 40px;
    border: 1px solid rgba(18, 48, 87, 0.8);
    display: flex;
    justify-content: space-between;
    margin: 12px 0;
    gap: 12px;
    flex-direction: column;
    align-items: center;

    @include respond(md) {
      padding: 26px;
      border-radius: 60px;
      margin-bottom: 28px;
      gap: 8px;
      flex-direction: row;
    }
  }

  .exchange-form {
    background: rgba(205, 222, 242, 0.02);
    padding: 16px;
    border-radius: 16px;
    color: white;
    margin: auto;
    text-align: center;

    @include respond(md) {
      padding: 24px;
    }

    &__wrapper {
      position: relative;
    }

    &__header {
      margin-bottom: 20px;

      color: #f8f8f8;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 1.12;
      letter-spacing: -0.64px;

      @include respond(md) {
        margin-bottom: 28px;
      }
    }

    &__button {
      width: 100%;
    }
  }

  .exchange-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(18, 48, 87, 0.8);
    background-color: #121826;
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
