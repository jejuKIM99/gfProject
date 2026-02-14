// gfProjext/server/api/dollar-index.ts
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  const apiUrl = `${config.public.dollarIndexApiBaseUrl}/series/observations`;
  const params = {
    series_id: 'DTWEXBGS', // Nominal Broad U.S. Dollar Index (Daily)
    file_type: 'json',
    api_key: config.public.dollarIndexApiKey, // API 키가 필요하면 여기에 추가
    sort_order: 'desc', // 최신 데이터를 먼저 가져오기 위해 내림차순 정렬
    limit: 1 // 최신 데이터 1개만 가져옴
  };

  // API 키가 비어있으면 제거 (FRED는 키 없이도 일부 데이터 접근 가능)
  if (!params.api_key) {
    delete params.api_key;
  }
  
  console.log('Fetching Dollar Index from:', apiUrl, 'with params:', params);

  try {
    const apiResponse = await $fetch(apiUrl, {
      query: params,
    });
    console.log('Received API response (FRED Dollar Index):', apiResponse);

    if (apiResponse && apiResponse.observations && apiResponse.observations.length > 0) {
      const latestObservation = apiResponse.observations[0];
      if (latestObservation.value && latestObservation.value !== '.') { // '.'은 데이터 없음
        return {
          value: parseFloat(latestObservation.value),
          date: latestObservation.date
        };
      } else {
        throw new Error('Dollar Index value not found or invalid in FRED API response');
      }
    } else {
      throw new Error('No observations found in FRED API response');
    }

  } catch (error) {
    console.error('Error proxying Dollar Index API (FRED):', error);
    return { error: 'Failed to fetch Dollar Index from external API', details: error.message };
  }
});
