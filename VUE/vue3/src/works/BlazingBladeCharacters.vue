<!-- 烈火之剑 - 登场人物 -->
<template>
  <div class="game-characters">
    <h2 class="section-title">登场人物</h2>
    <div class="characters-grid">
      <div class="character-card">
        <div class="character-avatar">⚔️</div>
        <div class="character-info">
          <h3>艾利乌德</h3>
          <p class="character-class">佣兵</p>
          <p class="character-desc">本作男主角，封印之剑主角罗伊的父亲。以佣兵身份开始了传奇冒险之旅。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🗡️</div>
        <div class="character-info">
          <h3>琳</h3>
          <p class="character-class">游牧骑兵</p>
          <p class="character-desc">本作女主角，攻击型角色。出身伯尔尼，却因理念不合离开故土，成为可靠的同伴。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🏰</div>
        <div class="character-info">
          <h3>马库斯</h3>
          <p class="character-class">骑士</p>
          <p class="character-desc">埃特鲁王国的老练骑士，忠诚可靠，是艾利乌德初期的重要导师。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🔮</div>
        <div class="character-info">
          <h3>尼诺</h3>
          <p class="character-class">贤者</p>
          <p class="character-desc">神秘的魔法剑士，掌握着古老魔法力量的神秘人物。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🏹</div>
        <div class="character-info">
          <h3>威尔</h3>
          <p class="character-class">弓箭手</p>
          <p class="character-desc">冷静的弓箭手，精准的射击可以远程击杀敌人。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🎭</div>
        <div class="character-info">
          <h3>多门</h3>
          <p class="character-class">盗贼</p>
          <p class="character-desc">身手敏捷的盗贼，擅长开锁和探查隐藏物品。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-characters { padding: 20px 0; }
.section-title { font-size: 20px; color: #00d2ff; margin-bottom: 20px; padding-left: 15px; border-left: 3px solid #00d2ff; }
.characters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.character-card { background: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 20px; display: flex; gap: 15px; border: 1px solid rgba(255, 255, 255, 0.1); transition: transform 0.3s, box-shadow 0.3s; }
.character-card:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); }
.character-avatar { font-size: 40px; width: 60px; height: 60px; background: rgba(102, 126, 234, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.character-info h3 { font-size: 18px; color: #fff; margin-bottom: 5px; }
.character-class { font-size: 13px; color: #00d2ff; margin-bottom: 8px; }
.character-desc { font-size: 13px; line-height: 1.6; color: rgba(255, 255, 255, 0.7); }
@media (max-width: 768px) { .characters-grid { grid-template-columns: 1fr; } }
</style>
