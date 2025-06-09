import { defineStore } from 'pinia'
import axios from 'axios'

const bitcoinData = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 107223,
    market_cap: 2130447526270,
    market_cap_rank: 1,
    fully_diluted_valuation: 2130447526270,
    total_volume: 23126190348,
    high_24h: 107202,
    low_24h: 105355,
    price_change_24h: 1868.03,
    price_change_percentage_24h: 1.77308,
    market_cap_change_24h: 38601509276,
    market_cap_change_percentage_24h: 1.84533,
    circulating_supply: 19876393,
    total_supply: 19876393,
    max_supply: 21000000,
    ath: 111814,
    ath_change_percentage: -4.16089,
    ath_date: '2025-05-22T18:41:28.492Z',
    atl: 67.81,
    atl_change_percentage: 157934.62749,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2025-06-09T10:48:23.419Z',
  },
]

const fiatCurrencies: FiatList[] = [
  { code: 'usd', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'eur', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'uah', name: 'Ukrainian Hryvnia', symbol: '₴', flag: '🇺🇦' },
  { code: 'gbp', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'jpy', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { code: 'cny', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  { code: 'inr', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'cad', name: 'Canadian Dollar', symbol: '$', flag: '🇨🇦' },
  { code: 'aud', name: 'Australian Dollar', symbol: '$', flag: '🇦🇺' },
  { code: 'chf', name: 'Swiss Franc', symbol: 'Fr', flag: '🇨🇭' },
  { code: 'sek', name: 'Swedish Krona', symbol: 'kr', flag: '🇸🇪' },
  { code: 'nok', name: 'Norwegian Krone', symbol: 'kr', flag: '🇳🇴' },
  { code: 'dkk', name: 'Danish Krone', symbol: 'kr', flag: '🇩🇰' },
  { code: 'pln', name: 'Polish Zloty', symbol: 'zł', flag: '🇵🇱' },
  { code: 'czk', name: 'Czech Koruna', symbol: 'Kč', flag: '🇨🇿' },
  { code: 'brl', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷' },
  { code: 'mxn', name: 'Mexican Peso', symbol: '$', flag: '🇲🇽' },
  { code: 'rub', name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺' },
  { code: 'hkd', name: 'Hong Kong Dollar', symbol: '$', flag: '🇭🇰' },
  { code: 'sgd', name: 'Singapore Dollar', symbol: '$', flag: '🇸🇬' },
  { code: 'krw', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
  { code: 'try', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷' },
  { code: 'ils', name: 'Israeli New Shekel', symbol: '₪', flag: '🇮🇱' },
  { code: 'zar', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
  { code: 'ron', name: 'Romanian Leu', symbol: 'lei', flag: '🇷🇴' },
  { code: 'huf', name: 'Hungarian Forint', symbol: 'Ft', flag: '🇭🇺' },
]

interface CryptoList {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  roi: null
  last_updated: string
}

interface FiatList {
  code: string
  name: string
  symbol: string
  flag: string
}

export const useStore = defineStore('store', {
  state: () => ({
    fiatList: [...fiatCurrencies] as FiatList,
    cryptoList: [...bitcoinData] as CryptoList,
    crypto: 'BTC',
    fiat: 'USD',
    amount: 10,
    exchangeRate: 1,
    convertedAmount: null,
    cryptoOptions: ['BTC', 'ETH', 'USDT'],
    fiatOptions: ['USD', 'EUR', 'UAH', 'RUB'],
  }),
  actions: {
    async submitExchange() {
      if (!this.amount || this.amount <= 0) return

      const coinGeckoIds = {
        BTC: 'bitcoin',
        ETH: 'ethereum',
        USDT: 'tether',
      }

      try {
        const cryptoId = coinGeckoIds[this.crypto]
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
          params: {
            ids: cryptoId,
            vs_currencies: this.fiat.toLowerCase(),
          },
        })
        this.exchangeRate = response.data[cryptoId][this.fiat.toLowerCase()]
        this.convertedAmount = this.amount * this.exchangeRate
        // const url = 'https://t.me/your_operator_username';
        // window.open(url, '_blank');
      } catch (error) {
        console.error('Ошибка при получении курса:', error)
        this.exchangeRate = null
        this.convertedAmount = null
      }
    },

    async fetchCryptoList() {
      const pages = [1] // хочем 500 элементов, возьмём топ 300
      const result: { id: string; symbol: string; name: string; image: string }[] = []

      for (const page of pages) {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 250,
            page,
            sparkline: false,
          },
        })
        result.push(...res.data)
      }

      this.cryptoList = [...result]
    },

    async fetchFiatList() {
      const res = await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
      return (res.data as string[]).map((code) => code.toUpperCase())
    },
  },
})
