<!-- 烈火之剑 - 游戏地图 -->
<template>
  <div class="game-map">
    <h2 class="section-title">游戏地图</h2>
    <div class="map-container">
      <img 
        :src="mapImage" 
        alt="伊利亚大陆地图" 
        class="map-image"
      />
    </div>
    <div class="map-info">
      <h3>利西亚同盟</h3>
      <p><strong>地理位置</strong>：位于艾雷布大陆西南部，由多个自治的贵族领地联合组成，并非一个集权国家。</p>
      <p><strong>核心领地</strong>：包括奥斯迪亚侯国（主角海克托尔的领地）、帕伦提亚侯国（主角艾利乌德的领地）、卡达茵侯国等。利西亚地区以平原和城镇为主，是游戏初期剧情的主要发生地。</p>

      <h3>贝伦王国</h3>
      <p><strong>地理位置</strong>：雄踞于艾雷布大陆北方，是一个强大的军事帝国。</p>
      <p><strong>地形特征</strong>：境内多山地、城堡与严寒地带，其军事力量与扩张野心是推动主线剧情冲突的关键因素。贝伦王国对利西亚同盟的侵略构成了游戏中期的主要矛盾。</p>

      <h3>那巴尔</h3>
      <p><strong>地理位置</strong>：艾雷布大陆西部的一个独立岛国。</p>
      <p><strong>文化特征</strong>：以其独特的沙漠环境、游牧民族以及强大的骑兵（尤其是游牧骑兵）著称。在剧情中，该地区是主角一行寻求盟友与穿越的重要区域。</p>

      <h3>萨卡草原</h3>
      <p><strong>地理位置</strong>：位于大陆东部，与贝伦王国接壤的广阔草原地带。</p>
      <p><strong>剧情关联</strong>：是主角琳的出身地，也是游牧民族生活的区域。这片草原在故事中连接着琳的过去与大陆东部的政治动态。</p>

      <h3>魔之岛</h3>
      <p><strong>地理位置</strong>：大陆外海的一座孤立岛屿。</p>
      <p><strong>环境与剧情</strong>：被浓密的"树海"覆盖，终年弥漫不祥的雾气，是通往关键地点"龙之门"的必经之路。此处的探索充满危险，视野受限，是游戏后期一场重要战役的发生地。</p>
    </div>
  </div>
</template>

<script>
import mapImage from '@/assets/img/烈火之剑/烈火之剑大陆地图.jpg'

export default {
  name: 'BlazingBladeMap',
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

.map-info strong {
  color: #00d2ff;
}
</style>
