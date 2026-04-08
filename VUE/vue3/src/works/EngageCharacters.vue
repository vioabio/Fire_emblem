<!-- ENGAGE - 登场人物 -->
<template>
  <div class="game-characters">
    <h2 class="section-title">登场人物</h2>
    <div class="characters-grid">
      <div class="character-card">
        <div class="character-avatar">🐉</div>
        <div class="character-info">
          <h3>琉尔</h3>
          <p class="character-class">神龙</p>
          <p class="character-desc">本作主角，沉睡了千年后苏醒的神龙。通过纹章戒指与各时代的英雄结合，获得强大力量。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">👑</div>
        <div class="character-info">
          <h3>艾提耶</h3>
          <p class="character-class">神龙王</p>
          <p class="character-desc">琉尔的父亲，将琉尔封印的人。隐藏着关于邪龙的重要秘密。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">⚔️</div>
        <div class="character-info">
          <h3>路易</h3>
          <p class="character-class">神军</p>
          <p class="character-desc">神龙教团的神军，在旅程中与琉尔相遇并结为伙伴。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🛡️</div>
        <div class="character-info">
          <h3>阿尔弗雷德</h3>
          <p class="character-class"> Brodian王子</p>
          <p class="character-desc">Brodean王国的王子，擅长枪术，性格开朗热情。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🔮</div>
        <div class="character-info">
          <h3>席亚</h3>
          <p class="character-class">Solm</p>
          <p class="character-desc">Solm王国的战士，擅长使用飞刀，是可靠的伙伴。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">💫</div>
        <div class="character-info">
          <h3>可可莉</h3>
          <p class="character-class">Firene公主</p>
          <p class="character-desc">Firene王国的公主，性格温柔，擅长使用弓。</p>
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
