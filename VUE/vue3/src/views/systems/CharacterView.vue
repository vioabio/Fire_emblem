<template>
  <div class="system-container">
    <h1>角色养成系统</h1>
    <div class="content">
      <p>角色成长与能力培养机制</p>
      <div class="growth-list">
        <div class="growth-item">
          <div class="growth-icon">📊</div>
          <h3>能力值提升</h3>
          <p>通过战斗获得经验，提升各项能力值</p>
        </div>
        <div class="growth-item">
          <div class="growth-icon">⬆️</div>
          <h3>等级成长</h3>
          <p>每升一级都有机会提升基础能力</p>
        </div>
        <div class="growth-item">
          <div class="growth-icon">🎯</div>
          <h3>武器熟练度</h3>
          <p>使用武器增加熟练度，解锁更强武器</p>
        </div>
        <div class="growth-item">
          <div class="growth-icon">💎</div>
          <h3>特殊能力</h3>
          <p>某些角色拥有独特的个人技能</p>
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
  margin-bottom: 40px;
  text-align: center;
}

.growth-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.growth-item {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.growth-item:hover {
  background: #f0f1f3;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.growth-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.growth-item h3 {
  color: #333;
  margin-bottom: 12px;
  font-size: 18px;
}

.growth-item p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}
</style>
