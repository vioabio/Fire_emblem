<template>
  <div class="vestaria-content">
    <h3>维斯塔利亚传说系列作品</h3>
    <div class="games-list">
      <div class="game-item">
        <div class="game-icon">⚔️</div>
        <h4>维斯塔利亚传说：亡国骑士与星辰巫女</h4>
        <p class="game-year">2016年 - PC平台（同人游戏）</p>
        <p class="game-desc">加贺复出后的首部作品，使用SRPG Studio制作，免费发行。</p>
      </div>
      <div class="game-item">
        <div class="game-icon">⚔️</div>
        <h4>维斯塔利亚传说外传：银色火焰</h4>
        <p class="game-year">2019年 - PC平台（同人游戏）</p>
        <p class="game-desc">第一部外传作品，延续了本传的故事和风格。</p>
      </div>
      <div class="game-item">
        <div class="game-icon">⚔️</div>
        <h4>维斯塔利亚传说外传2：圣剑之纹章</h4>
        <p class="game-year">2019年 - PC平台（同人游戏）</p>
        <p class="game-desc">第二部外传作品，进一步丰富了游戏世界。</p>
      </div>
    </div>
    <div class="creator-note">
      <p><strong>注：</strong>这是加贺昭三在退出业界多年后，使用同人游戏制作工具开发的作品，完全免费提供给玩家，体现了对游戏的热爱。</p>
    </div>
  </div>
</template>

<style scoped>
.vestaria-content {
  max-height: 340px;
  overflow-y: auto;
}

.vestaria-content h3 {
  color: #333;
  margin-bottom: 20px;
  font-size: 20px;
  border-bottom: 2px solid #22c55e;
  padding-bottom: 10px;
}

.games-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.game-item {
  background: #f0fdf4;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #22c55e;
}

.game-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.game-item h4 {
  color: #333;
  margin: 0 0 8px 0;
  font-size: 15px;
}

.game-year {
  color: #22c55e;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 6px;
}

.game-desc {
  color: #666;
  line-height: 1.5;
  font-size: 13px;
  margin: 0;
}

.creator-note {
  background: #d1fae5;
  border: 1px solid #0d9488;
  border-radius: 4px;
  padding: 10px;
  font-size: 13px;
}

.creator-note strong {
  color: #0f766e;
}

@media (max-width: 768px) {
  .games-list {
    grid-template-columns: 1fr;
  }
}
</style>