<script setup>
import { computed } from 'vue'

// Props: 从父组件接收数据
const props = defineProps({
  messageFromParent: {
    type: String,
    default: '默认消息'
  }
})

// Emit: 向父组件发送事件
const emit = defineEmits(['child-reply', 'game-selected'])

// 接收到的父组件消息
const receivedMessage = computed(() => {
  return props.messageFromParent
})

// 子组件向父组件回复
const replyToParent = () => {
  emit('child-reply', '我收到了你的消息：' + props.messageFromParent)
}

// 选择游戏并向父组件发送
const selectGame = (gameName) => {
  emit('game-selected', gameName)
}
</script>

<template>
  <div class="fire-emblem-content">
    <!-- Props接收演示区 -->
    <div class="props-demo">
      <h4>📤 Props 接收演示</h4>
      <p>父组件传来: <strong>{{ receivedMessage }}</strong></p>
      <button @click="replyToParent" class="demo-btn">点击回复父组件</button>
    </div>

    <h3>火焰之纹章系列作品</h3>
    <div class="games-list">
      <div class="game-item" @click="selectGame('暗黑龙与光之剑')">
        <div class="game-number">01</div>
        <h4>暗黑龙与光之剑</h4>
        <p class="game-year">1990年 - FC平台</p>
        <p class="game-desc">火焰纹章系列的开山之作，马尔斯王子率领义勇军对抗暗黑龙梅迪乌斯的故事。</p>
      </div>
      <div class="game-item" @click="selectGame('圣剑的封印')">
        <div class="game-number">02</div>
        <h4>圣剑的封印</h4>
        <p class="game-year">1992年 - FC平台</p>
        <p class="game-desc">续作，继续讲述马尔斯的故事，进一步完善了游戏系统。</p>
      </div>
      <div class="game-item" @click="selectGame('纹章之谜')">
        <div class="game-number">03</div>
        <h4>纹章之谜</h4>
        <p class="game-year">1994年 - SFC平台</p>
        <p class="game-desc">结合了前两部作品的精华，分为第一部和第二部两个故事。</p>
      </div>
      <div class="game-item" @click="selectGame('圣战系谱')">
        <div class="game-number">04</div>
        <h4>圣战系谱</h4>
        <p class="game-year">1996年 - SFC平台</p>
        <p class="game-desc">宏大剧情和复杂人物关系，被誉为系列巅峰之作。</p>
      </div>
      <div class="game-item" @click="selectGame('多拉基亚776')">
        <div class="game-number">05</div>
        <h4>多拉基亚776</h4>
        <p class="game-year">1999年 - SFC平台</p>
        <p class="game-desc">外传性质作品，讲述圣战系谱后的故事。</p>
      </div>
      <div class="game-item" @click="selectGame('封印之剑')">
        <div class="game-number">06</div>
        <h4>封印之剑</h4>
        <p class="game-year">2000年 - GBA平台</p>
        <p class="game-desc">GBA平台首作，引入了支援系统和武器三角系统。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fire-emblem-content {
  max-height: 340px;
  overflow-y: auto;
}

.props-demo {
  background: linear-gradient(135deg, #fff9e6 0%, #fff7c2 100%);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 2px solid #ffc107;
}

.props-demo h4 {
  color: #ff9800;
  margin: 0 0 10px 0;
  font-size: 14px;
}

.props-demo p {
  margin: 0 0 10px 0;
  font-size: 13px;
  color: #555;
}

.demo-btn {
  background: #ff9800;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.3s ease;
}

.demo-btn:hover {
  background: #f57c00;
  transform: translateY(-2px);
}

.fire-emblem-content h3 {
  color: #333;
  margin-bottom: 20px;
  font-size: 20px;
  border-bottom: 2px solid #ff6b6b;
  padding-bottom: 10px;
}

.games-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.game-item {
  background: #fff5f5;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #ff6b6b;
  cursor: pointer;
  transition: all 0.3s ease;
}

.game-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  background: #fff;
}

.game-number {
  font-size: 36px;
  font-weight: bold;
  color: rgba(255, 107, 107, 0.2);
  margin-bottom: 10px;
}

.game-item h4 {
  color: #333;
  margin: 0 0 8px 0;
  font-size: 16px;
}

.game-year {
  color: #ff6b6b;
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

@media (max-width: 768px) {
  .games-list {
    grid-template-columns: 1fr;
  }
}
</style>