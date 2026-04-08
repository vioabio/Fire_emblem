<!-- 封印之剑 - 游戏地图 -->
<template>
  <div class="game-map">
    <h2 class="section-title">游戏地图</h2>
    <div class="map-container">
      <img 
        :src="mapImage" 
        alt="艾雷布大陆地图" 
        class="map-image"
      />
    </div>
    <div class="map-info">
      <h3>利西亚同盟</h3>
      <p>位于大陆西部，由多个自治的骑士领主国联合组成，是故事开始的主角罗伊的故乡。同盟内部并非铁板一块，各领主国对贝伦帝国的威胁态度不一。</p>

      <h3>贝伦帝国</h3>
      <p>位于大陆东部，是一个军事专制、野心勃勃的帝国，由国王泽菲尔统治。帝国国力强盛，拥有强大的龙骑士部队，其入侵利西亚同盟的行为是游戏前半部分的主要冲突根源。</p>

      <h3>伊利亚</h3>
      <p>位于大陆北部，是一片常年被冰雪覆盖的苦寒之地。这里居住着被称为"伊利亚人"的部族，以强悍的战士和飞马骑士闻名。在游戏剧情中，伊利亚内部存在纷争，并卷入大陆战事。</p>

      <h3>西部三岛</h3>
      <p>位于大陆西南海域，包括<strong>奥斯提亚</strong>、<strong>贝伦群岛</strong>等。这些岛屿在游戏中后期剧情中扮演重要角色，是某些章节的战斗舞台。</p>

      <h3>那巴尔</h3>
      <p>一个独立的沙漠王国，位于大陆的偏远地区。其地理位置和环境（沙漠）构成了游戏中的特色关卡。</p>
    </div>
  </div>
</template>

<script>
import mapImage from '@/assets/img/封印之剑/封印之剑大陆地图.jpg'

export default {
  name: 'BindingBladeMap',
  data() {
    return {
      mapImage
    }
  }
}
</script>

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

.map-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

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
