<!-- 封印之剑游戏详情组件 -->
<template>
  <div class="game-detail-page">
    <div class="game-detail-container">
      <!-- 主界面：游戏基础信息 -->
      <div class="game-header">
        <img src="@/assets/img/封印之剑/封印之剑封面图.jpg" alt="封印之剑" class="game-cover">
        <div class="game-info">
          <h1 class="game-title">《火焰之纹章：封印之剑》</h1>
          <p class="game-subtitle">Fire Emblem: The Binding Blade</p>
          <div class="game-meta">
            <span class="meta-item">📱 机种：GBA</span>
            <span class="meta-item">📅 发售日期：2002年3月29日</span>
            <span class="meta-item">💾 容量：64MROM</span>
          </div>
        </div>
      </div>

      <!-- 游戏简介 -->
      <div class="game-intro">
        <h2>游戏简介</h2>
        <p>《火焰之纹章：封印之剑》是火焰纹章系列的GBA首作，游戏系统承袭了先前的方式，本作剧情也让玩家有口皆碑。</p>
      </div>

      <!-- 导航切换 -->
      <div class="game-nav">
        <button 
          v-for="tab in tabs" 
          :key="tab.path"
          :class="['nav-btn', { active: currentTab === tab.path }]"
          @click="switchTab(tab.path)"
        >
          {{ tab.icon }} {{ tab.name }}
        </button>
      </div>

      <!-- 子界面内容 -->
      <div class="game-content">
        <transition name="fade" mode="out-in">
          <component :is="currentComponent" :key="currentTab" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// eslint-disable-next-line no-unused-vars
const route = useRoute()
// eslint-disable-next-line no-unused-vars
const router = useRouter()

// 懒加载子组件
const BindingBladeMap = defineAsyncComponent(() => 
  import('./BindingBladeMap.vue')
)
const BindingBladeCharacters = defineAsyncComponent(() => 
  import('./BindingBladeCharacters.vue')
)
const BindingBladeGuide = defineAsyncComponent(() => 
  import('./BindingBladeGuide.vue')
)

// 导航标签
const tabs = [
  { path: 'map', name: '游戏地图', icon: '🗺️', component: BindingBladeMap },
  { path: 'characters', name: '登场人物', icon: '👥', component: BindingBladeCharacters },
  { path: 'guide', name: '游戏攻略', icon: '📖', component: BindingBladeGuide }
]

// 默认显示地图
const currentTab = ref('map')

// 当前显示的组件
const currentComponent = computed(() => {
  const tab = tabs.find(t => t.path === currentTab.value)
  return tab ? tab.component : BindingBladeMap
})

// 切换标签
function switchTab(path) {
  currentTab.value = path
}
</script>

<style scoped>
.game-detail-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  z-index: 99;
  overflow-y: auto;
  padding: 60px 20px;
}

.game-detail-container {
  max-width: 1000px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.game-header {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.game-cover {
  width: 280px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.game-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.game-title {
  font-size: 32px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: 700;
}

.game-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
}

.game-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.meta-item {
  background: rgba(102, 126, 234, 0.2);
  padding: 10px 18px;
  border-radius: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
}

.game-intro {
  margin-bottom: 30px;
}

.game-intro h2 {
  font-size: 20px;
  color: #00d2ff;
  margin-bottom: 12px;
  padding-left: 15px;
  border-left: 3px solid #00d2ff;
}

.game-intro p {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  text-align: justify;
}

.game-nav {
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 15px;
}

.nav-btn {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: rgba(102, 126, 234, 0.2);
  color: #fff;
}

.nav-btn.active {
  background: rgba(102, 126, 234, 0.4);
  border-color: #667eea;
  color: #fff;
}

.game-content {
  min-height: 400px;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .game-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .game-cover {
    width: 200px;
  }

  .game-title {
    font-size: 24px;
  }

  .game-meta {
    justify-content: center;
  }

  .game-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-btn {
    padding: 10px 16px;
    font-size: 13px;
  }
}
</style>
