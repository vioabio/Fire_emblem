<template>
  <div class="works-container">
    <h1>作品列表</h1>
    <div class="works-grid">
      <div class="work-card">
        <div class="work-number">01</div>
        <h3>暗黑龙与光之剑</h3>
        <p>1990年 - FC平台</p>
        <p class="work-desc">系列开山之作，奠定了战旗游戏的基础</p>
      </div>
      <div class="work-card">
        <div class="work-number">02</div>
        <h3>圣剑的封印</h3>
        <p>1992年 - FC平台</p>
        <p class="work-desc">续作，继续讲述马尔斯的故事</p>
      </div>
      <div class="work-card">
        <div class="work-number">03</div>
        <h3>纹章之谜</h3>
        <p>1994年 - SFC平台</p>
        <p class="work-desc">结合了前两部作品的精华</p>
      </div>
      <div class="work-card">
        <div class="work-number">04</div>
        <h3>圣战系谱</h3>
        <p>1996年 - SFC平台</p>
        <p class="work-desc">宏大的剧情和复杂的人物关系</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.works-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.works-container h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.work-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.work-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.work-number {
  font-size: 48px;
  font-weight: bold;
  color: rgba(102, 126, 234, 0.2);
  margin-bottom: 15px;
}

.work-card h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.work-card > p:first-of-type {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 10px;
}

.work-desc {
  color: #666;
  line-height: 1.6;
  font-size: 14px;
}
</style>
