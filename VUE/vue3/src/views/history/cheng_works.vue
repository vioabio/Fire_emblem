<script setup>
// 无状态组件
</script>

<template>
  <div class="works-section">
    <h2 class="section-title">主要作品</h2>
    
    <!-- 火焰之纹章系列 -->
    <div class="series-section">
      <h3 class="series-title">火焰之纹章系列</h3>
      <ul class="works-list">
        <li class="work-item">
          <span class="work-name">《火焰之纹章：纹章之谜》</span>
          <span class="work-info">（SFC-1994年，担任系统设计）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章：封印之剑》</span>
          <span class="work-info">（GBA-2002年，担任制作人兼主创）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章：烈火之剑》</span>
          <span class="work-info">（GBA-2003年，担任制作人）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章：苍炎之轨迹》</span>
          <span class="work-info">（NGC-2005年，担任制作人）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章：晓之女神》</span>
          <span class="work-info">（Wii-2007年，担任制作人）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章：觉醒》</span>
          <span class="work-info">（3DS-2012年，担任制作人）</span>
        </li>
      </ul>
    </div>

    <!-- 其他作品 -->
    <div class="series-section">
      <h3 class="series-title">其他作品</h3>
      <ul class="works-list">
        <li class="work-item">
          <span class="work-name">《Famicom Wars》</span>
          <span class="work-info">（FC-1988年，担任开发组长）</span>
        </li>
      </ul>
    </div>

    <!-- 补充说明 -->
    <div class="works-note">
      <p>成广通作为开发组长主导完成《Famicom Wars》，是《高级战争》系列的奠基之作，首次确立了战棋游戏的直观操作与兵种克制系统。</p>
      <p>在《火焰之纹章》系列中，推动系列从FC向SFC平台过渡，引入双线叙事与角色支援系统。《封印之剑》在加贺昭三离职后接手，成功挽救系列危机。后续作品《觉醒》融合养成与策略元素，实现销量与口碑双丰收，被称作"战棋界的最终幻想"。</p>
    </div>
  </div>
</template>

<style scoped>
.works-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid #667eea;
}

/* 系列区块样式 */
.series-section {
  margin-bottom: 35px;
}

.series-section:last-child {
  margin-bottom: 0;
}

.series-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  padding-left: 12px;
  border-left: 4px solid #667eea;
  font-weight: 600;
}

/* 作品列表样式 */
.works-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.work-item {
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  transition: background-color 0.2s ease;
}

.work-item:hover {
  background-color: #f8f9ff;
}

.work-item:last-child {
  border-bottom: none;
}

.work-name {
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

.work-info {
  font-size: 13px;
  color: #888;
  margin-left: 10px;
}

/* 补充说明样式 */
.works-note {
  margin-top: 30px;
  padding: 20px;
  background: #f8f9ff;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.works-note p {
  margin: 0 0 15px 0;
  font-size: 14px;
  line-height: 1.8;
  color: #555;
}

.works-note p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .work-item {
    flex-direction: column;
    padding: 12px 15px;
  }

  .work-info {
    margin-left: 0;
    margin-top: 4px;
  }

  .works-note {
    padding: 15px;
  }
}
</style>
