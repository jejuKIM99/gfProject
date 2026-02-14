// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: { // 클라이언트 사이드에서도 접근 가능하게 하려면 public 아래에 둡니다.
      exchangeRateApiBaseUrl: 'https://api.frankfurter.app', // Frankfurter API URL로 변경
      exchangeRateApiKey: '', // API 키가 필요 없으므로 빈 문자열로 설정
      dollarIndexApiBaseUrl: 'https://api.stlouisfed.org/fred', // FRED API URL 추가
      dollarIndexApiKey: 'b87cc208337a57919ffb7bd1e655a3c0', // FRED API 키 (필요시 추가)
      krxGoldApiBaseUrl: 'https://data.krx.co.kr' // KRX API URL로 변경
    }
  }
})
