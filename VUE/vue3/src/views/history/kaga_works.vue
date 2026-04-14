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
          <span class="work-name">《火焰之纹章：暗黑龙与光之剑》</span>
          <span class="work-info">（游戏设计师4月20日，FC-1990）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章外传—索菲亚风云录》</span>
          <span class="work-info">（FC-1992年3月14日，游戏设计，董事）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章：纹章之谜》</span>
          <span class="work-info">（1994年，首席游戏设计师）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章：圣战之系谱》</span>
          <span class="work-info">（SFC，1996年，首席游戏设计师）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章：阿卡内亚战记》</span>
          <span class="work-info">（（SFCsatellaview交付-10月29年9月25日），1997年）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《火焰之纹章：多拉基亚776》</span>
          <span class="work-info">（（SFC任天堂电源8月28日），1999年，游戏设计，1月21日SFC/ROM盒2000，情景）</span>
        </li>
      </ul>
    </div>

    <!-- 泪之腕轮物语系列 -->
    <div class="series-section">
      <h3 class="series-title">泪之腕轮物语系列</h3>
      <ul class="works-list">
        <li class="work-item">
          <span class="work-name">《泪之腕轮物语：尤特娜英雄战记》</span>
          <span class="work-info">（PS-2000年5月24日）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《泪之腕轮传说2贝尔维克物语》</span>
          <span class="work-info">（PS2-2005年5月26日）</span>
        </li>
      </ul>
    </div>

    <!-- 维斯塔利亚传说系列 -->
    <div class="series-section">
      <h3 class="series-title">维斯塔利亚传说系列</h3>
      <ul class="works-list">
        <li class="work-item">
          <span class="work-name">《维斯塔利亚传说：亡国骑士与星辰巫女》</span>
          <span class="work-info">（官方中文）（PC-2016年9月5日）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《维斯塔利亚传说外传：卢卡村的勇者》</span>
          <span class="work-info">（PC-2019年3月27日）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《维斯塔利亚传说外传：席鲁巴比尔西的圣剑》</span>
          <span class="work-info">（PC-2019年3月27日）</span>
        </li>
      </ul>
    </div>

    <!-- 其他作品 -->
    <div class="series-section">
      <h3 class="series-title">其他作品</h3>
      <ul class="works-list">
        <li class="work-item">
          <span class="work-name">《超级任天堂大战》</span>
          <span class="work-info">（（SFCNintendo力量2008年5月1日），1998年）</span>
        </li>
        <li class="work-item">
          <span class="work-name">《贸易与战斗·卡片英雄》技术顾问</span>
          <span class="work-info">（二月21GB-2000）</span>
        </li>
      </ul>
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

@media (max-width: 768px) {
  .work-item {
    flex-direction: column;
    padding: 12px 15px;
  }

  .work-info {
    margin-left: 0;
    margin-top: 4px;
  }
}
</style>
