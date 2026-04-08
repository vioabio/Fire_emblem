<!-- 圣魔之光石 - 游戏地图 -->
<template>
  <div class="game-map">
    <h2 class="section-title">游戏地图</h2>
    <div class="map-container">
      <img 
        :src="mapImage" 
        alt="玛达尼亚大陆地图" 
        class="map-image"
      />
    </div>
    <div class="map-info">
      <h3>鲁内斯王国</h3>
      <p>位于玛基·维尔大陆的西北部，是主角艾瑞珂的故乡，地形以开阔平原与坚固要塞为主。作为故事的起点，这里见证了古拉德帝国的突袭与王国的陷落，初始剧情在此展开，奠定了整个战争的导火索。</p>

      <h3>弗雷利亚王国</h3>
      <p>坐落于大陆中部偏东，被茂密森林覆盖，是精灵信仰与自然崇拜的核心区域。作为艾瑞珂线早期的重要据点，其"精灵之森"不仅是战略要地，更提供了关键的地形掩护，深刻影响了早期战役的战术布局。</p>

      <h3>罗斯顿圣教国</h3>
      <p>位于大陆西南部，是圣石信仰的宗教中心，地形以高耸高原与古老神殿遗迹为主。这里不仅是信仰的圣地，更是剧情转折的关键节点，承载着圣石真相与宗教权力的深层冲突。</p>

      <h3>贾哈那王国</h3>
      <p>地处东南部，以广袤沙漠与零星绿洲交织的游牧文化为特色，拥有"沙漠迷宫"与"古代遗迹"等复杂地形。这片土地既是贸易通道的枢纽，也隐藏着失落文明的秘密，为探索与解谜提供了重要舞台。</p>

      <h3>古拉德帝国</h3>
      <p>雄踞大陆东部，凭借开阔平原与密集军事要塞控制着主要交通命脉。作为敌对势力的中枢，其强大的军团与战略纵深构成了对西部诸国的全面压制，是贯穿全篇的军事威胁核心。</p>
    </div>
  </div>
</template>

<script>
import mapImage from '@/assets/img/圣魔之光石/圣魔之光石大陆地图.jpg'

export default {
  name: 'SacredStonesMap',
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
}

.map-info p {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

.map-info strong {
  color: #00d2ff;
}
</style>
