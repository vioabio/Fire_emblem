<script setup>
import { ref } from 'vue'
import ChildOfFe from './child_of_fe.vue'
import ChildOfTearRings from './child_of_tear_rings.vue'
import ChildOfVestaria from './child_of_vestaria.vue'

const showModal = ref(false)
const currentComponent = ref(null)

// 父组件数据
const parentMessage = ref('来自父组件的消息')
const childReply = ref('等待子组件回复...')
const selectedGame = ref(null)

const openModal = (component) => {
  currentComponent.value = component
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  currentComponent.value = null
}

// 接收子组件emit的事件
const handleChildReply = (reply) => {
  childReply.value = reply
}

// 接收子组件选择的游戏
const handleGameSelect = (game) => {
  selectedGame.value = game
}
</script>

<template>
  <div class="works-section">
    <h2 class="section-title">主要作品</h2>
    
    <!-- 父子组件通信演示区域 -->
    <div class="communication-demo">
      <div class="demo-section">
        <h4>📤 Props 通信演示</h4>
        <p>父组件消息: <strong>{{ parentMessage }}</strong></p>
      </div>
      <div class="demo-section">
        <h4>📥 Emit 通信演示</h4>
        <p>子组件回复: <strong>{{ childReply }}</strong></p>
      </div>
      <div class="demo-section">
        <h4>🎮 选中游戏</h4>
        <p>{{ selectedGame || '暂无选中' }}</p>
      </div>
    </div>

    <div class="works-grid">
      <div class="work-card fire-emblem" @click="openModal(ChildOfFe)">
        <div class="work-icon">🔥</div>
        <h3>火焰之纹章系列</h3>
        <p class="work-period">1990-1998</p>
        <p class="work-desc">在Intelligent Systems期间开发的经典SRPG系列，包括《暗黑龙与光之剑》、《纹章之谜》、《圣战系谱》等作品。</p>
        <div class="click-hint">点击查看详情 →</div>
      </div>
      <div class="work-card tear-ring" @click="openModal(ChildOfTearRings)">
        <div class="work-icon">💧</div>
        <h3>泪之腕轮物语系列</h3>
        <p class="work-period">2001-2005</p>
        <p class="work-desc">创立Tirnanog公司后开发的系列，继承了火焰纹章的核心玩法，包括PS版和GBA版作品。</p>
        <div class="click-hint">点击查看详情 →</div>
      </div>
      <div class="work-card vestaria" @click="openModal(ChildOfVestaria)">
        <div class="work-icon">⚔️</div>
        <h3>维斯塔利亚传说</h3>
        <p class="work-period">2016-2019</p>
        <p class="work-desc">使用SRPG Studio制作的同人游戏系列，包括本传和两部外传作品，均免费发行。</p>
        <div class="click-hint">点击查看详情 →</div>
      </div>
    </div>

    <!-- 弹窗 -->
    <transition name="modal">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal">✕</button>
          <!-- Props传递: 将父组件的数据传给子组件 -->
          <!-- Emit监听: 监听子组件触发的事件 -->
          <component 
            :is="currentComponent" 
            :message-from-parent="parentMessage"
            @child-reply="handleChildReply"
            @game-selected="handleGameSelect"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.works-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid #667eea;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.work-card {
  padding: 25px;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.work-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.work-card.fire-emblem {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
  border-color: #ff6b6b;
}

.work-card.fire-emblem:hover {
  border-color: #ee5a5a;
}

.work-card.tear-ring {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-color: #3b82f6;
}

.work-card.tear-ring:hover {
  border-color: #2563eb;
}

.work-card.vestaria {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-color: #22c55e;
}

.work-card.vestaria:hover {
  border-color: #16a34a;
}

.work-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.work-card h3 {
  color: #333;
  margin-bottom: 10px;
  font-size: 20px;
}

.work-period {
  color: #666;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;
}

.work-desc {
  color: #555;
  line-height: 1.6;
  font-size: 14px;
  margin: 0;
}

.click-hint {
  color: #667eea;
  font-size: 13px;
  margin-top: 15px;
  font-weight: 500;
  text-align: center;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.work-card:hover .click-hint {
  opacity: 1;
}

/* 父子组件通信演示样式 */
.communication-demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 25px;
  padding: 20px;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border-radius: 10px;
  border: 2px dashed #667eea;
}

.demo-section h4 {
  color: #667eea;
  margin: 0 0 10px 0;
  font-size: 14px;
}

.demo-section p {
  margin: 0;
  font-size: 13px;
  color: #555;
}

.demo-section strong {
  color: #333;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  width: 1200px;
  height: 400px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  animation: slideIn 0.3s ease;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border: none;
  background: #f0f0f0;
  color: #666;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1;
}

.close-btn:hover {
  background: #e0e0e0;
  color: #333;
  transform: rotate(90deg);
}

/* 弹窗动画 */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content {
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .communication-demo {
    grid-template-columns: 1fr;
  }
  
  .works-grid {
    grid-template-columns: 1fr;
  }

  .modal-content {
    width: 95%;
    height: 80%;
    max-width: 1200px;
  }
}
</style>
