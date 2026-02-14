<template>
    <div class="gf-dashboard">
      <div class="sidebar-overlay" id="sidebarOverlay"></div>
  
      <aside class="sidebar" id="sidebar">
          <div class="sidebar-header">
              <div class="logo">GF<span>GROUP</span></div>
              <button class="mobile-close" id="closeMenu">&times;</button>
          </div>
  
          <div class="user-profile-card">
              <div class="profile-main">
                  <div class="avatar-wrapper">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" class="avatar-img">
                      <div class="badge-icon">🏆</div>
                  </div>
                  <div class="user-info">
                      <span class="user-name">John Doe</span>
                      <span class="user-rank">Premium Member</span>
                  </div>
              </div>
              <div class="profile-actions">
                  <button class="btn-profile-edit">정보 수정</button>
                  <button class="btn-logout">로그아웃</button>
              </div>
          </div>
  
          <div class="asset-status-card">
              <div class="asset-header">
                  <span class="label">TOTAL ASSETS</span>
                  <span class="total-value-krw" id="totalAssetValue">0원</span>
              </div>
              
              <div class="asset-items">
                  <div class="asset-item">
                      <div class="item-left">
                          <label>보유 금 (g)</label>
                          <div class="item-market">
                              <span class="m-price">87,450원</span>
                              <span class="m-trend down">▼ 0.2%</span>
                          </div>
                          <div class="item-total-value" id="goldTotalValue">0원</div>
                      </div>
                      <div class="input-container">
                          <div class="edit-toolkit" id="toolkit-holdGold">Enter를 눌러 적용</div>
                          <input type="number" id="holdGold" value="100" class="asset-input" readonly>
                      </div>
                  </div>
  
                  <div class="asset-item">
                      <div class="item-left">
                          <label>보유 달러 ($)</label>
                          <div class="item-market">
                              <span class="m-price">1,335.2원</span>
                              <span class="m-trend up">▲ 1.1%</span>
                          </div>
                          <div class="item-total-value" id="usdTotalValue">0원</div>
                      </div>
                      <div class="input-container">
                          <div class="edit-toolkit" id="toolkit-holdUsd">Enter를 눌러 적용</div>
                          <input type="number" id="holdUsd" value="2500" class="asset-input" readonly>
                      </div>
                  </div>
              </div>
          </div>
  
          <nav class="nav-links">
              <a href="#" class="nav-item active"><i>📊</i> <span>시장 대시보드</span></a>
              <a href="#" class="nav-item locked"><i>🔑</i> <span>GF 멤버스 룸</span></a>
              <div class="nav-divider">PRO TOOLS</div>
              <a href="#" class="nav-item"><i>🛠️</i> <span>cojusplan</span><span class="badge-pro">CP</span></a>
              <a href="#" class="nav-item"><i>🛡️</i> <span>cojuscan</span></a>
              <a href="#" class="nav-item"><i>📈</i> <span>수익률 분석</span></a>
              <a href="#" class="nav-item"><i>📅</i> <span>경제 캘린더</span></a>
              <a href="#" class="nav-item"><i>🔔</i> <span>알림 설정</span></a>
          </nav>
      </aside>
  
      <main class="main-wrapper">
          <header class="top-bar">
              <div class="left-section">
                  <button class="menu-toggle" id="openMenu">☰</button>
                  <div class="breadcrumb">GF Dashboard / <span class="active">Market Analysis</span></div>
              </div>
              <div class="top-actions">
                  <span class="update-timer">Next Sync: 42m</span>
                  <button class="btn-refresh">↻ Refresh</button>
              </div>
          </header>
  
          <section class="content-body">
              <div class="stats-grid">
                  <div class="card stat-card">
                      <label>국제 금 시세 (Spot)</label>
                      <div class="value-group">
                          <span class="main-value" id="intlGoldPrice">$2,042.50</span>
                          <span class="sub-trend up" id="intlGoldTrend">▲ 0.8%</span>
                      </div>
                  </div>
                  <div class="card stat-card">
                      <label>국내 금 시세 (KRX)</label>
                      <div class="value-group">
                          <span class="main-value" id="krxGoldPrice">87,450원</span>
                          <span class="sub-trend down" id="krxGoldTrend">▼ 0.2%</span>
                      </div>
                  </div>
                  <div class="card stat-card">
                      <label>원/달러 환율 (USD/KRW)</label>
                      <div class="value-group">
                          <span class="main-value" id="usdKrwRate">1,335.20</span>
                          <span class="sub-trend up" id="usdKrwTrend">▲ 2.4</span>
                      </div>
                  </div>
                  <div class="card stat-card highlight">
                      <label>달러 인덱스 (DXY)</label>
                      <div class="value-group">
                          <span class="main-value gold-text" id="dxyValue">104.15</span>
                          <span class="status-tag">LIVE</span>
                      </div>
                  </div>
              </div>
  
              <div class="quad-chart-grid">
                  <div class="card chart-item">
                      <div class="chart-header"><h4>International Gold ($)</h4></div>
                      <div class="canvas-holder"><canvas id="chartIntl"></canvas></div>
                  </div>
                  <div class="card chart-item">
                      <div class="chart-header"><h4>Domestic Gold (₩)</h4></div>
                      <div class="canvas-holder"><canvas id="chartDom"></canvas></div>
                  </div>
                  <div class="card chart-item">
                      <div class="chart-header"><h4>Exchange Rate (USD/KRW)</h4></div>
                      <div class="canvas-holder"><canvas id="chartEx"></canvas></div>
                  </div>
                  <div class="card chart-item gap-analysis">
                      <div class="chart-header"><h4>Premium Gap Ratio (%) <span id="gapRatio" class="gold-text"></span></h4></div>
                      <div class="canvas-holder"><canvas id="chartGap"></canvas></div>
                  </div>
              </div>
          </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  useHead({
    title: 'GF GROUP | Market Quad-Analysis Dashboard',
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap'
      }
    ],
    bodyAttrs: {
      class: 'gf-dashboard'
    }
  });
  
  onMounted(() => {
      // Chart.js is already loaded via 'chart.js/auto' import
  
      // Sidebar interaction
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      const openMenu = document.getElementById('openMenu');
      const closeMenu = document.getElementById('closeMenu');
  
      const toggleMenu = (isOpen) => {
          sidebar.classList.toggle('open', isOpen);
          overlay.classList.toggle('active', isOpen);
          document.body.style.overflow = isOpen ? 'hidden' : '';
      };
  
      openMenu.addEventListener('click', () => toggleMenu(true));
      closeMenu.addEventListener('click', () => toggleMenu(false));
      overlay.addEventListener('click', () => toggleMenu(false));
  
      // Asset management logic
      const assetInputs = document.querySelectorAll('.asset-input');
  
      assetInputs.forEach(input => {
          const toolkit = document.getElementById(`toolkit-${input.id}`);
  
          input.addEventListener('click', function() {
              if (this.hasAttribute('readonly')) {
                  this.removeAttribute('readonly');
                  this.focus();
                  this.select();
                  showToolkit(toolkit, "Enter를 눌러 적용", false);
              }
          });
  
          input.addEventListener('input', function() {
              if (this.value.includes('.')) {
                  this.value = Math.floor(this.value);
                  showToolkit(toolkit, "1g 단위 정수만 가능합니다!", true);
              }
          });
  
          input.addEventListener('keydown', function(e) {
              if (e.key === 'Enter') this.blur();
          });
  
          input.addEventListener('blur', function() {
              this.setAttribute('readonly', true);
              toolkit.classList.remove('visible');
              calculateAssets();
          });
      });
  
      function showToolkit(el, msg, isError) {
          if (!el) return;
          el.innerText = msg;
          el.classList.add('visible');
          isError ? el.classList.add('error') : el.classList.remove('error');
          if (isError) setTimeout(() => el.classList.remove('error'), 2000);
      }
  
      function calculateAssets() {
          const GOLD_PRICE = 87450;
          const USD_PRICE = 1335.2;
  
          const goldQty = parseInt(document.getElementById('holdGold').value) || 0;
          const usdQty = parseInt(document.getElementById('holdUsd').value) || 0;
  
          const goldTotal = goldQty * GOLD_PRICE;
          const usdTotal = usdQty * USD_PRICE;
          const grandTotal = goldTotal + usdTotal;
  
          document.getElementById('goldTotalValue').innerText = Math.round(goldTotal).toLocaleString() + '원';
          document.getElementById('usdTotalValue').innerText = Math.round(usdTotal).toLocaleString() + '원';
          document.getElementById('totalAssetValue').innerText = Math.round(grandTotal).toLocaleString() + '원';
      }
  
      // Chart initialization
      const createConfig = (label, color, data, fill = false) => ({
          type: 'line',
          data: {
              labels: [], // Initial empty labels
              datasets: [{ label, data, borderColor: color, backgroundColor: fill ? `${color}1A` : 'transparent', fill, tension: 0.4, borderWidth: 2, pointRadius: 0 }]
          },
          options: {
              responsive: true, maintainAspectRatio: false,
              plugins: {
                  legend: { display: false },
                  tooltip: {
                      enabled: true,
                      mode: 'index',
                      intersect: false,
                      callbacks: {
                          label: function(context) {
                              let label = context.dataset.label || '';
                              if (label) {
                                  label += ': ';
                              }
                              if (context.parsed.y !== null) {
                                  if (context.dataset.label.includes('Gold')) {
                                      label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                  } else if (context.dataset.label.includes('FX Rate')) {
                                      label += `${context.parsed.y.toFixed(2)} KRW`; // Assuming KRW for exchange rate
                                  } else {
                                      label += context.parsed.y;
                                  }
                              }
                              return label;
                          }
                      }
                  }
              },
              scales: {
                  x: { grid: { display: false }, ticks: { color: '#555', font: { size: 10 } } },
                  y: { grid: { color: '#222' }, ticks: { color: '#555', font: { size: 10 } } }
              }
          }
      });
  
      calculateAssets();
      const chartIntl = new Chart(document.getElementById('chartIntl'), createConfig('Intl Gold', '#d4af37', [])); // No dummy data
      new Chart(document.getElementById('chartDom'), createConfig('Dom Gold', '#ffffff', [87200, 87450, 87300, 87600, 87450, 87550]));
      const chartEx = new Chart(document.getElementById('chartEx'), createConfig('FX Rate', '#4a90e2', [])); // No dummy data
      new Chart(document.getElementById('chartGap'), createConfig('Premium Gap', '#d4af37', [1.02, 1.05, 1.08, 1.04, 1.05, 1.07], true));
  
      // Real-time gap calculation simulation
      function calculateGap() {
          const intl = 2042.50;
          const kr = 87450;
          const rate = 1330; // 환율
          
          const gap = ((kr / ((intl / 31.1035) * rate)) - 1) * 100;
          const gapRatioEl = document.getElementById('gapRatio');
          if(gapRatioEl) {
              gapRatioEl.innerText = gap.toFixed(2) + " %";
          }
      }
  
      setInterval(calculateGap, 5000);
  
      // Gold price fetching
      let lastPrice = 0;
      async function fetchGoldPrice() {
          try {
              const response = await fetch('https://api.gold-api.com/price/XAU');
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
              const data = await response.json();
              const newPrice = data.price;
  
              const mainValueEl = document.getElementById('intlGoldPrice');
              if (mainValueEl) mainValueEl.innerText = `$${newPrice.toFixed(2)}`;
  
              if (lastPrice !== 0) {
                  const change = newPrice - lastPrice;
                  const changePercent = (change / lastPrice) * 100;
                  const subTrendEl = document.getElementById('intlGoldTrend');
                  if (subTrendEl) {
                      subTrendEl.innerText = `${change >= 0 ? '▲' : '▼'} ${Math.abs(changePercent).toFixed(2)}%`;
                      subTrendEl.classList.remove('up', 'down');
                      subTrendEl.classList.add(change >= 0 ? 'up' : 'down');
                  }
              }
              lastPrice = newPrice;
  
              // Update the chart
              if (chartIntl) {
                  const now = new Date();
                  const timeLabel = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
                  chartIntl.data.labels.push(timeLabel);
                  chartIntl.data.datasets[0].data.push(newPrice);
                  if (chartIntl.data.labels.length > 10) { // Keep last 10 data points
                      chartIntl.data.labels.shift();
                      chartIntl.data.datasets[0].data.shift();
                  }
                  chartIntl.update();
              }
          } catch (error) {
              console.error('Error fetching gold price:', error);
          }
      }
  
      fetchGoldPrice();
      setInterval(fetchGoldPrice, 10000); // every 10 seconds
  
      // USD/KRW Exchange Rate fetching
      let lastExchangeRate = 0;
      // API_KEY와 EXCH_RATE_API_URL은 이제 서버에서 관리됩니다.
  
      async function fetchExchangeRate() {
          try {
              // Nuxt 서버의 프록시 엔드포인트 호출
              const response = await fetch('/api/exchange-rate');
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
              const apiResponse = await response.json();
              
              if (apiResponse.error) {
                throw new Error(apiResponse.details || apiResponse.error);
              }
  
                            // Frankfurter API 응답에 맞게 직접 price를 사용
                            const newRate = apiResponse.price;
              
                            const mainValueEl = document.getElementById('usdKrwRate');
                            if (mainValueEl) mainValueEl.innerText = newRate.toFixed(2);
              
                            if (lastExchangeRate !== 0) {
                                    const change = newRate - lastExchangeRate;
                                    const changePercent = (change / lastExchangeRate) * 100;
                                    const subTrendEl = document.getElementById('usdKrwTrend');
                                    if (subTrendEl) {
                                        subTrendEl.innerText = `${change >= 0 ? '▲' : '▼'} ${Math.abs(changePercent).toFixed(2)}`;
                                        subTrendEl.classList.remove('up', 'down');
                                        subTrendEl.classList.add(change >= 0 ? 'up' : 'down');
                                    }
                                }
                                lastExchangeRate = newRate;
              
                                // Update the chart
                                if (chartEx) {
                                    const now = new Date();
                                    const timeLabel = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
                                    chartEx.data.labels.push(timeLabel);
                                    chartEx.data.datasets[0].data.push(newRate);
                                    if (chartEx.data.labels.length > 10) { // Keep last 10 data points
                                        chartEx.data.labels.shift();
                                        chartEx.data.datasets[0].data.shift();
                                    }
                                    chartEx.update();
                                }          } catch (error) {
              console.error('Error fetching exchange rate:', error);
          }
      }
  
      fetchExchangeRate();
      setInterval(fetchExchangeRate, 10000); // every 10 seconds

      // Dollar Index fetching
      let lastDollarIndex = 0;
      async function fetchDollarIndex() {
          try {
              const response = await fetch('/api/dollar-index');
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
              const apiResponse = await response.json();

              if (apiResponse.error) {
                  throw new Error(apiResponse.details || apiResponse.error);
              }

              const newDXYValue = apiResponse.value;
              const dxyValueEl = document.getElementById('dxyValue');
              if (dxyValueEl) {
                  dxyValueEl.innerText = newDXYValue.toFixed(2);
              }

              // No trend calculation for DXY currently, just updating the value
              lastDollarIndex = newDXYValue;

          } catch (error) {
              console.error('Error fetching Dollar Index:', error);
          }
      }

      fetchDollarIndex();
      setInterval(fetchDollarIndex, 10000); // every 10 seconds

      // KRX Gold price fetching
      let lastKrxGoldPrice = 0;
      async function fetchKrxGoldPrice() {
          try {
              const response = await fetch('/api/krx-gold');
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
              const apiResponse = await response.json();

              if (apiResponse.error) {
                  throw new Error(apiResponse.details || apiResponse.error);
              }

              const newKrxGoldPrice = apiResponse.currentPrice;
              const change = apiResponse.change;
              const changePercent = apiResponse.changePercent;

              const krxGoldPriceEl = document.getElementById('krxGoldPrice');
              if (krxGoldPriceEl) {
                  krxGoldPriceEl.innerText = `${newKrxGoldPrice.toLocaleString()}원`;
              }

              const krxGoldTrendEl = document.getElementById('krxGoldTrend');
              if (krxGoldTrendEl) {
                  krxGoldTrendEl.innerText = `${change >= 0 ? '▲' : '▼'} ${Math.abs(changePercent).toFixed(2)}%`;
                  krxGoldTrendEl.classList.remove('up', 'down');
                  krxGoldTrendEl.classList.add(change >= 0 ? 'up' : 'down');
              }
              lastKrxGoldPrice = newKrxGoldPrice;

              // Update the chart (chartDom)
              const chartDom = Chart.getChart('chartDom'); // 기존 chartDom 인스턴스를 가져옵니다.
              if (chartDom) {
                  const now = new Date();
                  const timeLabel = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
                  chartDom.data.labels.push(timeLabel);
                  chartDom.data.datasets[0].data.push(newKrxGoldPrice);
                  if (chartDom.data.labels.length > 10) { // Keep last 10 data points
                      chartDom.data.labels.shift();
                      chartDom.data.datasets[0].data.shift();
                  }
                  chartDom.update();
              }

          } catch (error) {
              console.error('Error fetching KRX Gold Price:', error);
          }
      }

      fetchKrxGoldPrice();
      setInterval(fetchKrxGoldPrice, 10000); // every 10 seconds
  });
  
  </script>
  
  <style>
  :root {
      --sidebar-bg: #12141c;
      --main-bg: #0b0d12;
      --card-bg: #1a1d26;
      --border-color: #2d3139;
      --accent-gold: #d4af37;
      --text-main: #ffffff;
      --text-dim: #8e9297;
      --pro-green: #00ff88;
      --error-red: #ff4444;
  }
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', sans-serif; color: var(--text-main); background: var(--main-bg); overflow-x: hidden; }
  
  /* 사이드바 핵심: 스크롤 활성화 */
  .sidebar {
      width: 280px; background: var(--sidebar-bg); border-right: 1px solid var(--border-color);
      padding: 30px 20px; position: fixed; top: 0; left: 0; bottom: 0; z-index: 10000;
      transform: translateX(-100%); transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      
      /* 스크롤바 허용 및 영역 제한 */
      display: flex;
      flex-direction: column;
      overflow-y: auto; 
      overflow-x: hidden;
  }
  .sidebar.open { transform: translateX(0); box-shadow: 20px 0 50px rgba(0,0,0,0.5); }
  
  /* 커스텀 스크롤바 디자인 (Webkit) */
  .sidebar::-webkit-scrollbar { width: 5px; }
  .sidebar::-webkit-scrollbar-track { background: transparent; }
  .sidebar::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 10px; }
  .sidebar::-webkit-scrollbar-thumb:hover { background: var(--accent-gold); }
  
  /* 배경 딤드 */
  .sidebar-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);
      z-index: 9000; display: none; opacity: 0; transition: opacity 0.3s;
  }
  .sidebar-overlay.active { display: block; opacity: 1; }
  
  /* 프로필 카드 */
  .user-profile-card { background: var(--card-bg); border-radius: 12px; padding: 16px; margin-bottom: 20px; border: 1px solid var(--border-color); flex-shrink: 0; }
  .profile-main { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .avatar-img { width: 44px; height: 44px; border-radius: 50%; border: 2px solid var(--accent-gold); }
  .profile-actions { display: flex; gap: 8px; }
  .btn-profile-edit, .btn-logout { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: var(--text-dim); padding: 6px; border-radius: 6px; font-size: 11px; cursor: pointer; transition: 0.2s; }
  
  /* 자산 카드 */
  .asset-status-card { background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; margin-bottom: 20px; flex-shrink: 0; }
  .asset-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
  .total-value-krw { font-size: 16px; font-weight: 800; color: var(--accent-gold); }
  .asset-items { display: flex; flex-direction: column; gap: 20px; }
  .asset-item { display: flex; justify-content: space-between; align-items: flex-start; }
  .item-total-value { font-size: 11px; color: var(--pro-green); margin-top: 5px; font-weight: 600; }
  
  /* 인라인 입력 및 툴킷 */
  .input-container { position: relative; margin-top: 5px; }
  .asset-input {
      background: transparent; border: 1px solid transparent; color: var(--pro-green);
      font-size: 15px; font-weight: 800; text-align: right; width: 85px; padding: 5px;
      border-radius: 4px; cursor: pointer;
  }
  .asset-input:not([readonly]) { background: #000; border-color: var(--accent-gold); outline: none; }
  .edit-toolkit {
      position: absolute; bottom: 120%; right: 0; background: var(--accent-gold);
      color: #000; padding: 6px 10px; border-radius: 4px; font-size: 10px; font-weight: 800;
      white-space: nowrap; z-index: 101; pointer-events: none;
      opacity: 0; transform: translateY(10px); transition: 0.3s;
  }
  .edit-toolkit.visible { opacity: 1; transform: translateY(0); }
  .edit-toolkit.error { background: var(--error-red); color: #fff; }
  
  /* 메뉴 및 메인 그리드 (동일) */
  .nav-links { display: flex; flex-direction: column; gap: 5px; padding-bottom: 30px; }
  .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px; color: var(--text-dim); text-decoration: none; border-radius: 8px; font-size: 14px; }
  .nav-item.active { background: rgba(212, 175, 55, 0.1); color: var(--accent-gold); }
  .nav-divider { font-size: 10px; color: #444; margin: 15px 0 5px 12px; letter-spacing: 1px; }
  
  .main-wrapper { padding: 20px; transition: 0.3s; }
  .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-bottom: 30px; }
  .quad-chart-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 16px; padding: 20px; }
  .canvas-holder { height: 300px; position: relative; }
  </style>