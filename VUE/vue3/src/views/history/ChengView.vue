<template>
  <div class="history-container">
    <h1>成广通时代</h1>
    <div class="content">
      <p>火焰纹章系列的继承与发展者</p>
      <div class="info-card">
        <h2>主要贡献</h2>
        <ul>
          <li>继承了系列的精神与核心玩法</li>
          <li>在原有基础上进行了创新与扩展</li>
          <li>推动了系列的现代化发展</li>
          <li>为玩家带来了新的游戏体验</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.history-container h1 {
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

.info-card h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.info-card ul {
  list-style: none;
  padding: 0;
}

.info-card li {
  padding: 12px 0;
  color: #666;
  border-bottom: 1px solid #f0f0f0;
}

.info-card li:last-child {
  border-bottom: none;
}

.info-card li::before {
  content: "•";
  color: #667eea;
  font-weight: bold;
  display: inline-block;
  width: 20px;
}
</style>
