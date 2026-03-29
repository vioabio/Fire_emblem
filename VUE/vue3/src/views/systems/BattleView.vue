<template>
  <div class="system-container">
    <h1>战旗游戏系统</h1>
    <div class="content">
      <p>火焰纹章的核心战斗机制</p>
      <div class="feature-list">
        <div class="feature-item">
          <h3>回合制战斗</h3>
          <p>玩家和敌人在各自的回合中进行行动，策略性的回合管理是关键</p>
        </div>
        <div class="feature-item">
          <h3>兵种克制</h3>
          <p>不同兵种之间存在克制关系，如剑克斧、斧克枪、枪克剑</p>
        </div>
        <div class="feature-item">
          <h3>地形影响</h3>
          <p>地形会影响单位的回避率和移动能力，合理利用地形是制胜关键</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.system-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.system-container h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.content {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.content > p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-item {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.feature-item h3 {
  color: #333;
  margin-bottom: 10px;
  font-size: 18px;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}
</style>
