<!-- 风花雪月 - 游戏地图 -->
<template>
  <div class="game-map">
    <h2 class="section-title">游戏地图</h2>
    <div class="map-container">
      <img 
        :src="mapImage" 
        alt="弗德兰大陆地图" 
        class="map-image"
      />
    </div>
    <div class="map-info">
      <h3>地图概述</h3>
      <p>芙朵拉大陆的势力分布如下：</p>
      <p><strong>阿德剌斯忒亚帝国</strong>：位于大陆南方，是一个拥有超过千年历史的古老帝国。</p>
      <p><strong>法嘉斯神圣王国</strong>：统治着大陆北方的寒冷地域。</p>
      <p><strong>雷斯塔诸侯同盟</strong>：位于大陆东方，由诸多贵族联合组成的同盟领地。</p>
      <p>在相当长的时间里，这三股势力相互制衡，维持着芙朵拉大陆表面的和平。</p>
    </div>
  </div>
</template>

<script>
import mapImage from '@/assets/img/风花雪月/风花雪月大陆地图.jpg'

export default {
  name: 'ThreeHousesMap',
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
