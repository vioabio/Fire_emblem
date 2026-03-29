<template>
  <div class="system-container">
    <h1>武器系统</h1>
    <div class="content">
      <p>武器三角与武器的使用机制</p>
      <div class="weapon-triangle">
        <div class="triangle-item top">
          <div class="weapon-name">剑</div>
          <div class="weapon-desc">克制斧，被枪克制</div>
        </div>
        <div class="triangle-item left">
          <div class="weapon-name">斧</div>
          <div class="weapon-desc">克制枪，被剑克制</div>
        </div>
        <div class="triangle-item right">
          <div class="weapon-name">枪</div>
          <div class="weapon-desc">克制剑，被斧克制</div>
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

.weapon-triangle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.triangle-item {
  width: 300px;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
}

.triangle-item:hover {
  transform: scale(1.05);
}

.triangle-item.top {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  order: 1;
}

.triangle-item.left {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  order: 2;
}

.triangle-item.right {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  order: 3;
}

.weapon-name {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.weapon-desc {
  font-size: 14px;
  opacity: 0.9;
}
</style>
