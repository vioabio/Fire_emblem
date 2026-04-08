<!-- 风花雪月 - 登场人物 -->
<template>
  <div class="game-characters">
    <h2 class="section-title">登场人物</h2>
    <div class="houses-grid">
      <div class="house-section">
        <h3 class="house-title">🔥 青狮线</h3>
        <div class="character-card">
          <div class="character-avatar">👑</div>
          <div class="character-info">
            <h3>帝弥托利</h3>
            <p class="character-class">王子</p>
            <p class="character-desc">法嘉圣国的王子，性格正直热血，领导青狮学级的学生们。</p>
          </div>
        </div>
        <div class="character-card">
          <div class="character-avatar">⚔️</div>
          <div class="character-info">
            <h3>菲力克斯</h3>
            <p class="character-class">剑士</p>
            <p class="character-desc">孤高的剑术天才，嘴硬心软，是帝弥托利的童年好友。</p>
          </div>
        </div>
      </div>
      <div class="house-section">
        <h3 class="house-title">🌙 金鹿线</h3>
        <div class="character-card">
          <div class="character-avatar">💎</div>
          <div class="character-info">
            <h3>库罗德</h3>
            <p class="character-class">贵族</p>
            <p class="character-desc">金鹿学级的领主，精明能干，是商人之子，外表温和内心复杂。</p>
          </div>
        </div>
        <div class="character-card">
          <div class="character-avatar">📚</div>
          <div class="character-info">
            <h3>洛廉兹</h3>
            <p class="character-class">法师</p>
            <p class="character-desc">贵族出身的魔法使，重视礼仪有些傲慢，但内心善良。</p>
          </div>
        </div>
      </div>
      <div class="house-section">
        <h3 class="house-title">🦅 黑鹫线</h3>
        <div class="character-card">
          <div class="character-avatar">🦅</div>
          <div class="character-info">
            <h3>艾黛尔贾特</h3>
            <p class="character-class">皇女</p>
            <p class="character-desc">艾德蒙帝国的皇女，领导黑鹫学级，有着改革世界的强烈意志。</p>
          </div>
        </div>
        <div class="character-card">
          <div class="character-avatar">🖤</div>
          <div class="character-info">
            <h3>贝雷丝</h3>
            <p class="character-class">教师</p>
            <p class="character-desc">士官学校的教师，失去记忆的神秘人物，玩家扮演的主角。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 人物区域 */
.game-characters {
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

/* 学级分区 */
.houses-grid {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.house-section {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
}

.house-title {
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* 人物卡片 */
.character-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.character-card:last-child {
  margin-bottom: 0;
}

/* 人物头像 */
.character-avatar {
  font-size: 32px;
  width: 50px;
  height: 50px;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* 人物信息 */
.character-info h3 {
  font-size: 16px;
  color: #fff;
  margin-bottom: 3px;
}

.character-class {
  font-size: 12px;
  color: #00d2ff;
  margin-bottom: 5px;
}

.character-desc {
  font-size: 12px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
}
</style>
