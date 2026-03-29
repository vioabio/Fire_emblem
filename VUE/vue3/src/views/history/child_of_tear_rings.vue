<template>
  <div class="tear-ring-content">
    <h3>泪之腕轮物语系列作品</h3>
    <div class="games-list">
      <div class="game-item">
        <div class="game-icon">💧</div>
        <h4>泪之腕轮物语</h4>
        <p class="game-year">2001年 - PS平台</p>
        <p class="game-desc">加贺离开任天堂后的首部作品，继承了火焰纹章的核心玩法。</p>
      </div>
      <div class="game-item">
        <div class="game-icon">💧</div>
        <h4>泪之腕轮物语2：贝尔维克物语</h4>
        <p class="game-year">2005年 - PS2平台</p>
        <p class="game-desc">系列第二部，加入了新的系统和角色，但销量不如前作。</p>
      </div>
    </div>
    <div class="legal-note">
      <p><strong>注：</strong>该系列因与任天堂的版权纠纷而被迫停止开发，加贺昭三也因此退出了游戏业界。</p>
    </div>
  </div>
</template>

<style scoped>
.tear-ring-content {
  max-height: 340px;
  overflow-y: auto;
}

.tear-ring-content h3 {
  color: #333;
  margin-bottom: 20px;
  font-size: 20px;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 10px;
}

.games-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.game-item {
  background: #f0f9ff;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.game-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.game-item h4 {
  color: #333;
  margin: 0 0 8px 0;
  font-size: 16px;
}

.game-year {
  color: #3b82f6;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 6px;
}

.game-desc {
  color: #666;
  line-height: 1.5;
  font-size: 13px;
  margin: 0;
}

.legal-note {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 4px;
  padding: 10px;
  font-size: 13px;
}

.legal-note strong {
  color: #856404;
}

@media (max-width: 768px) {
  .games-list {
    grid-template-columns: 1fr;
  }
}
</style>