<!-- 风花雪月 - 游戏地图 -->
<template>
  <div class="game-map">
    <h2 class="section-title">游戏地图</h2>
    <div class="map-container">
      <div class="map-placeholder">
        <div class="map-icon">🗺️</div>
        <p>弗德兰大陆地图</p>
      </div>
    </div>
    <div class="map-info">
      <h3>地图概述</h3>
      <p>故事发生在三国争霸的弗德兰大陆。三个国家——艾德蒙帝国、法嘉圣国和朵利斯王国——围绕着统治权展开激烈争夺。玩家将作为士官学校的教师，见证这片大陆的命运。</p>
    </div>
    <div class="chapter-list">
      <h3>主线章节</h3>
      <ul>
        <li>序章 - 醒来</li>
        <li>第1章 - 士官学校</li>
        <li>第2章 - 调整天校</li>
        <li>第3章 - 三路战役</li>
        <li>第4章 - 旧贵族的叛乱</li>
        <li>...</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.game-map { padding: 20px 0; }
.section-title { font-size: 20px; color: #00d2ff; margin-bottom: 20px; padding-left: 15px; border-left: 3px solid #00d2ff; }
.map-container { margin-bottom: 25px; }
.map-placeholder { width: 100%; height: 300px; background: rgba(0, 0, 0, 0.3); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px dashed rgba(255, 255, 255, 0.2); }
.map-icon { font-size: 60px; margin-bottom: 15px; }
.map-placeholder p { color: rgba(255, 255, 255, 0.6); font-size: 16px; }
.map-info, .chapter-list { margin-bottom: 25px; }
.map-info h3, .chapter-list h3 { font-size: 16px; color: #fff; margin-bottom: 12px; }
.map-info p { font-size: 14px; line-height: 1.8; color: rgba(255, 255, 255, 0.8); }
.chapter-list ul { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }
.chapter-list li { padding: 10px 15px; background: rgba(102, 126, 234, 0.15); border-radius: 8px; color: rgba(255, 255, 255, 0.85); font-size: 14px; }
</style>
