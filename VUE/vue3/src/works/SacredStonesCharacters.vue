<!-- 圣魔之光石 - 登场人物 -->
<template>
  <div class="game-characters">
    <h2 class="section-title">登场人物</h2>
    <div class="characters-grid">
      <div class="character-card">
        <div class="character-avatar">⚔️</div>
        <div class="character-info">
          <h3>伊弗列姆</h3>
          <p class="character-class">王子/骑士</p>
          <p class="character-desc">格拉王子，擅长使用枪。性格热血，为复国而战。玩家可选择扮演他体验哥哥路线。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🛡️</div>
        <div class="character-info">
          <h3>艾瑞珂</h3>
          <p class="character-class">公主/骑士</p>
          <p class="character-desc">格拉公主，伊弗列姆的妹妹。擅长剑术，路线不同会与哥哥分开行动。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">💔</div>
        <div class="character-info">
          <h3>里昂</h3>
          <p class="character-class">重甲骑士</p>
          <p class="character-desc">敌方阵营的悲剧皇子里昂，与伊弗列姆有着深厚的友谊。他的故事令人动容。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🔮</div>
        <div class="character-info">
          <h3>艾克</h3>
          <p class="character-class">贤者</p>
          <p class="character-desc">神秘的魔法剑士，掌握着古代的力量，是队伍中重要的魔法输出。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🏹</div>
        <div class="character-info">
          <h3>娜姆</h3>
          <p class="character-class">游牧骑兵</p>
          <p class="character-desc">来自沙漠的弓骑兵，擅长移动射击，是远程输出的好手。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🎵</div>
        <div class="character-info">
          <h3>蒂亚朵拉</h3>
          <p class="character-class">舞娘</p>
          <p class="character-desc">能歌善舞的少女，舞蹈可以恢复同伴的行动力。</p>
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

/* 人物网格 */
.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

/* 人物卡片 */
.character-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  gap: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.character-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* 人物头像 */
.character-avatar {
  font-size: 40px;
  width: 60px;
  height: 60px;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* 人物信息 */
.character-info h3 {
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
}

.character-class {
  font-size: 13px;
  color: #00d2ff;
  margin-bottom: 8px;
}

.character-desc {
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

/* 响应式布局 */
@media (max-width: 768px) {
  .characters-grid {
    grid-template-columns: 1fr;
  }
}
</style>
