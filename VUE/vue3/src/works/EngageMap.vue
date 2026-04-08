<!-- ENGAGE - 游戏地图 -->
<template>
  <div class="game-map">
    <h2 class="section-title">游戏地图</h2>
    <div class="map-container">
      <img 
        :src="mapImage" 
        alt="艾雷欧斯大陆地图" 
        class="map-image"
      />
    </div>
    <div class="map-info">
      <h3>里特司王国</h3>
      <p>神龙琉尔及其母亲琉弥艾尔所在的王城所在地，是故事的重要起点。玩家最初在此了解大陆历史，并展开初步战斗。</p>

      <h3>费列聂王国</h3>
      <p>一个面临异形兵威胁的王国，其公主锡莉奴与王子阿尔弗雷德在剧情中先后加入主角阵营。花之风车村等地点位于此王国境内。</p>

      <h3>布罗帝亚王国</h3>
      <p>由二王子史塔卢克及其护卫代表，在穿越边境线时与主角团相遇。</p>

      <h3>伊尔席翁王国</h3>
      <p>一个敌对势力，其二公主奥尔坦希亚率领部队占领了古兰斯尔大桥，旨在夺取纹章士戒指。</p>

      <h3>圣地索拉涅尔</h3>
      <p>一处浮空岛，在主角沉睡后成为行动大本营。岛上设有广场、大厅、牧场、纹章士之间、钟乳洞等设施，可用于与伙伴互动、投资、训练、强化戒指及收集材料。</p>
    </div>
  </div>
</template>

<script>
import mapImage from '@/assets/img/ENGAGE/火焰纹章ENGAGE大陆地图.jpg'

export default {
  name: 'EngageMap',
  data() {
    return {
      mapImage
    }
  }
}
</script>

<style scoped>
/* 地图区域 */
.game-map {
  padding: 20px 0;
}

/* 区域标题 */
.section-title {
  font-size: 20px;
  color: #00d2ff;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 3px solid #00d2ff;
}

/* 地图容器 */
.map-container {
  margin-bottom: 25px;
}

/* 地图占位符 */
.map-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* 地图信息 */
.map-info {
  margin-bottom: 25px;
}

.map-info h3 {
  font-size: 16px;
  color: #00d2ff;
  margin-bottom: 12px;
  margin-top: 20px;
}

.map-info h3:first-child {
  margin-top: 0;
}

.map-info p {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
}
</style>
