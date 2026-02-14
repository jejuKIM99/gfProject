import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  // authkey와 dataParam은 Frankfurter API에서 사용되지 않음
  // const authkey = config.public.exchangeRateApiKey;
  // const dataParam = query.data;

  // Frankfurter API 호출 URL 구성
  const apiUrl = `${config.public.exchangeRateApiBaseUrl}/latest`;
  const params = {
    from: 'USD',
    to: 'KRW',
  };
  
  console.log('Fetching exchange rate from:', apiUrl, 'with params:', params); // 추가된 로그

  try {
    const apiResponse = await $fetch(apiUrl, {
      query: params,
    });
    console.log('Received API response (Frankfurter):', apiResponse); // 추가된 로그
    
    // Frankfurter API 응답 형식에 맞게 데이터 추출
    if (apiResponse && apiResponse.rates && apiResponse.rates.KRW) {
        return {
            price: apiResponse.rates.KRW,
            date: apiResponse.date
        };
    } else {
        throw new Error('Invalid response format from Frankfurter API');
    }

  } catch (error) {
    console.error('Error proxying exchange rate API (Frankfurter):', error);
    // 에러를 클라이언트로 전달
    return { error: 'Failed to fetch exchange rate from external API', details: error.message };
  }
});
