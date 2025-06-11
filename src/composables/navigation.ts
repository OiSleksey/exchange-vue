import { useRouter } from 'vue-router'

export function useNavigation() {
  const router = useRouter()

  const navigateToSupport = () => {
    const url = 'https://t.me/globall_ex'
    window.open(url, '_blank')
  }

  const navigateToConvert = () => {
    router.push('/convert')
  }

  const navigateToHome = () => {
    router.push('/')
  }
  return {
    navigateToSupport,
    navigateToConvert,
    navigateToHome,
  }
}
