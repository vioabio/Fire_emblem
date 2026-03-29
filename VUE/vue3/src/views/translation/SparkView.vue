<template>
  <div class="translation-container">
    <h1>火花狼组汉化组</h1>
    <div class="content">
      <div class="group-info">
        <div class="info-card">
          <h3>汉化组简介</h3>
          <p>火花狼组是活跃于火焰纹章汉化领域的优秀团队，以高质量和及时更新著称。</p>
        </div>
        <div class="works-list">
          <h3>主要作品</h3>
          <ul>
            <li>《封印之剑》中文版</li>
            <li>《烈火之剑》中文版</li>
            <li>《圣魔之光石》中文版</li>
            <li>《苍炎之轨迹》中文版</li>
          </ul>
        </div>
        <div class="contribution">
          <h3>特色与贡献</h3>
          <ul>
            <li>高质量的翻译与本地化</li>
            <li>及时的更新与技术支持</li>
            <li>活跃的社区交流与反馈</li>
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
