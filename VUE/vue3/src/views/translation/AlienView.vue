<template>
  <div class="translation-container">
    <h1>外星科技汉化组</h1>
    <div class="content">
      <div class="group-info">
        <div class="info-card">
          <h3>汉化组简介</h3>
          <p>外星科技汉化组是国内知名的火焰纹章汉化团队，致力于为玩家提供高质量的汉化版本。</p>
        </div>
        <div class="works-list">
          <h3>主要作品</h3>
          <ul>
            <li>《暗黑龙与光之剑》中文版</li>
            <li>《圣剑的封印》中文版</li>
            <li>《纹章之谜》中文版</li>
            <li>《圣战系谱》中文版</li>
          </ul>
        </div>
        <div class="contribution">
          <h3>贡献与影响</h3>
          <ul>
            <li>推动了火焰纹章在中国大陆的普及</li>
            <li>让更多玩家体验到经典战旗游戏</li>
            <li>为后续汉化工作奠定了基础</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.translation-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.translation-container h1 {
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

.group-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.info-card, .works-list, .contribution {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
}

.info-card h3, .works-list h3, .contribution h3 {
  color: #333;
  margin-bottom: 20px;
  font-size: 20px;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
}

.info-card p {
  color: #666;
  line-height: 1.8;
  margin: 0;
}

.works-list ul, .contribution ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.works-list li, .contribution li {
  padding: 12px 0;
  color: #666;
  border-bottom: 1px solid #e9ecef;
  padding-left: 25px;
  position: relative;
}

.works-list li:last-child, .contribution li:last-child {
  border-bottom: none;
}

.works-list li::before {
  content: "🎮";
  position: absolute;
  left: 0;
  font-size: 14px;
}

.contribution li::before {
  content: "★";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}
</style>
