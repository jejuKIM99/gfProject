// gfProjext/server/api/krx-gold.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  // Vercel에 배포된 Python 서버리스 함수의 엔드포인트
  // 로컬 개발 환경에서도 /api/krx-gold-fd 경로로 접근 가능
  const pythonServerlessApiUrl = '/api/krx-gold-fd'; 

  try {
    const apiResponse = await $fetch(pythonServerlessApiUrl);
    // apiResponse는 { currentPrice, change, changePercent, localDateTime } 형태
    console.log('Received response from Python serverless function:', apiResponse);
    return apiResponse;
  } catch (error) {
    console.error('Error calling Python serverless function for KRX Gold:', error);
    return { error: 'Failed to fetch KRX Gold from Python serverless function', details: error.message };
  }
});
