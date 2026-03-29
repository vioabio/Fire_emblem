<template>
  <div class="system-container">
    <h1>支援系统</h1>
    <div class="content">
      <p>角色间的羁绊与支援对话</p>
      <div class="support-info">
        <div class="support-levels">
          <h3>支援等级</h3>
          <div class="level-item">
            <span class="level">C级</span>
            <span>初级支援，对话1-2次</span>
          </div>
          <div class="level-item">
            <span class="level">B级</span>
            <span>中级支援，对话3-4次</span>
          </div>
          <div class="level-item">
            <span class="level">A级</span>
            <span>高级支援，对话5-6次</span>
          </div>
          <div class="level-item">
            <span class="level">S级</span>
            <span>最高支援，特殊对话和加成</span>
          </div>
        </div>
        <div class="support-benefits">
          <h3>支援效果</h3>
          <ul>
            <li>提升命中率与回避率</li>
            <li>增加暴击率</li>
            <li>提高防御能力</li>
            <li>展现角色间的情感故事</li>
          </ul>
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

.support-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.support-levels, .support-benefits {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
}

.support-levels h3, .support-benefits h3 {
  color: #333;
  margin-bottom: 20px;
  font-size: 20px;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
}

.level-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
}

.level-item:last-child {
  border-bottom: none;
}

.level {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 14px;
}

.support-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.support-benefits li {
  padding: 12px 0;
  color: #666;
  border-bottom: 1px solid #e9ecef;
  padding-left: 25px;
  position: relative;
}

.support-benefits li:last-child {
  border-bottom: none;
}

.support-benefits li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}
</style>
