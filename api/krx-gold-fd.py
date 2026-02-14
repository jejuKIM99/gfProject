# gfProjext/api/krx-gold-fd.py
import json
from datetime import datetime, timedelta
import FinanceDataReader as fdr

def handler(request, response):
    try:
        # FinanceDataReader에서 KRX 금현물 ETF (ACE KRX금현물: 411060)의 데이터를 가져옴
        # 최신 데이터를 가져오기 위해 오늘 날짜부터 넉넉하게 이전 날짜까지 조회
        today = datetime.now()
        start_date = today - timedelta(days=7) # 일주일 전부터 조회
        
        # FinanceDataReader가 주말/휴일 데이터를 제공하지 않거나,
        # 실시간이 아닌 '종가'를 제공하는 경우를 고려해야 함.
        # ETF는 거래소 개장 시간 동안은 실시간에 가까운 가격 변동을 가짐.
        # 여기서는 가장 최근 거래일의 종가를 가져오는 것으로 가정.
        df = fdr.DataReader('411060', start_date.strftime('%Y-%m-%d'))
        
        if df.empty:
            # 만약 데이터프레임이 비어있다면, 더 이전 날짜부터 다시 시도
            start_date = today - timedelta(days=30) # 한 달 전부터 조회
            df = fdr.DataReader('411060', start_date.strftime('%Y-%m-%d'))
            if df.empty:
                raise ValueError("No data found for ACE KRX Gold ETF (411060) after extended search")

        # 가장 최신 데이터의 'Close' (종가)를 가져옴
        latest_price = df['Close'].iloc[-1]
        
        # 'Change' (변동률)도 계산하여 반환할 수 있도록 이전 종가도 가져옴
        change = 0
        change_percent = 0
        if len(df) >= 2:
            previous_price = df['Close'].iloc[-2]
            change = latest_price - previous_price
            change_percent = (change / previous_price) * 100

        response.status = 200
        response.headers['Content-Type'] = 'application/json'
        response.send(json.dumps({
            'currentPrice': latest_price,
            'change': change,
            'changePercent': change_percent,
            'localDateTime': today.strftime('%Y%m%d%H%M%S') # 현재 시간 추가
        }))

    except Exception as e:
        response.status = 500
        response.headers['Content-Type'] = 'application/json'
        response.send(json.dumps({'error': str(e)}))
