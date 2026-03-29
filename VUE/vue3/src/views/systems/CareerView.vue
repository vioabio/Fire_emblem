<template>
  <div class="system-container">
    <h1>职业系统</h1>
    <div class="content">
      <p>多样化的职业选择与转职机制</p>
      <div class="career-grid">
        <div class="career-card">
          <div class="career-icon">⚔️</div>
          <h3>剑士</h3>
          <p>高速度和回避，适合快速攻击</p>
        </div>
        <div class="career-card">
          <div class="career-icon">🛡️</div>
          <h3>骑士</h3>
          <p>高防御，移动能力强，适合前线作战</p>
        </div>
        <div class="career-card">
          <div class="career-icon">🏹</div>
          <h3>弓手</h3>
          <p>远程攻击，配合其他单位效果更佳</p>
        </div>
        <div class="career-card">
          <div class="career-icon">🧙</div>
          <h3>魔法师</h3>
          <p>魔法攻击，克制高防御单位</p>
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

.career-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.career-card {
  background: #f8f9fa;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
}

.career-card:hover {
  transform: translateY(-3px);
  background: #f0f1f3;
}

.career-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.career-card h3 {
  color: #333;
  margin-bottom: 10px;
  font-size: 18px;
}

.career-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}
</style>
