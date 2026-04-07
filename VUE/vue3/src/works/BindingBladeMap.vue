<!-- 封印之剑 - 游戏地图 -->
<template>
  <div class="game-map">
    <h2 class="section-title">游戏地图</h2>
    <div class="map-container">
      <div class="map-placeholder">
        <div class="map-icon">🗺️</div>
        <p>艾雷布大陆地图</p>
      </div>
    </div>
    <div class="map-info">
      <h3>地图概述</h3>
      <p>故事发生在一块名为艾雷布的大陆。这片大陆被分成了数个王国和势力，玩家将跟随主角罗伊的脚步，穿越这片广袤的土地，对抗邪恶的伯丹帝国。</p>
    </div>
    <div class="chapter-list">
      <h3>章节列表</h3>
      <ul>
        <li>序章 - 首次战斗</li>
        <li>第1章 - 沙漠奇袭</li>
        <li>第2章 - 神秘男子</li>
        <li>第3章 - 古代的王国</li>
        <li>第4章 - 重新燃起的火焰</li>
        <li>...</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.game-map {
  padding: 20px 0;
}

.section-title {
  font-size: 20px;
  color: #00d2ff;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 3px solid #00d2ff;
}

.map-container {
  margin-bottom: 25px;
}

.map-placeholder {
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255, 255, 255, 0.2);
}

.map-icon {
  font-size: 60px;
  margin-bottom: 15px;
}

.map-placeholder p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
}

.map-info,
.chapter-list {
  margin-bottom: 25px;
}

.map-info h3,
.chapter-list h3 {
  font-size: 16px;
  color: #fff;
  margin-bottom: 12px;
}

.map-info p {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  text-align: justify;
}

.chapter-list ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.chapter-list li {
  padding: 10px 15px;
  background: rgba(102, 126, 234, 0.15);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
}
</style>
