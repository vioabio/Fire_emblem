<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const hoverMenu = ref('')

const menuItems = [
  {
    key: 'home',
    label: '首页',
    path: '/'
  },
  {
    key: 'history',
    label: '历史沿革',
    children: [
      { key: 'kaga', label: '加贺昭三时代', path: '/history/kaga' },
      { key: 'cheng', label: '成广通时代', path: '/history/cheng' }
    ]
  },
  {
    key: 'works',
    label: '作品列表',
    path: '/works'
  },
  {
    key: 'systems',
    label: '特色系统',
    children: [
      { key: 'battle', label: '战旗游戏', path: '/systems/battle' },
      { key: 'career', label: '职业系统', path: '/systems/career' },
      { key: 'weapon', label: '武器系统', path: '/systems/weapon' },
      { key: 'character', label: '角色养成', path: '/systems/character' },
      { key: 'support', label: '支援系统', path: '/systems/support' }
    ]
  },
  {
    key: 'versions',
    label: '发售版本',
    path: '/versions'
  },
  {
    key: 'translation',
    label: '汉化信息',
    children: [
      { key: 'alien', label: '外星科技汉化组', path: '/translation/alien' },
      { key: 'spark', label: '火花狼组汉化组', path: '/translation/spark' }
    ]
  }
]

const activeMenu = ref('home')

// 监听路由变化更新激活菜单
const updateActiveMenu = () => {
  const path = route.path
  if (path === '/') {
    activeMenu.value = 'home'
  } else if (path.startsWith('/history')) {
    activeMenu.value = 'history'
  } else if (path.startsWith('/works')) {
    activeMenu.value = 'works'
  } else if (path.startsWith('/systems')) {
    activeMenu.value = 'systems'
  } else if (path.startsWith('/versions')) {
    activeMenu.value = 'versions'
  } else if (path.startsWith('/translation')) {
    activeMenu.value = 'translation'
  }
}

// 初始化和监听路由变化
updateActiveMenu()
router.afterEach(() => {
  updateActiveMenu()
})
</script>

<template>
  <div class="app-container">
    <!-- 导航栏 -->
    <header class="navbar">
      <div class="nav-content">
        <div class="logo" @click="router.push('/')">
          <h2>火焰纹章</h2>
        </div>
        <nav class="nav-menu">
          <div
            v-for="item in menuItems"
            :key="item.key"
            class="nav-item-container"
            @mouseenter="hoverMenu = item.key"
            @mouseleave="hoverMenu = ''"
          >
            <router-link
              v-if="!item.children"
              :to="item.path"
              :class="['nav-item', { active: activeMenu === item.key }]"
            >
              {{ item.label }}
            </router-link>
            <span
              v-else
              :class="['nav-item', { active: activeMenu === item.key || hoverMenu === item.key }]"
            >
              {{ item.label }}
              <span class="arrow-down">▼</span>
            </span>
            <div
              v-if="item.children"
              :class="['dropdown-menu', { show: hoverMenu === item.key }]"
            >
              <router-link
                v-for="child in item.children"
                :key="child.key"
                :to="child.path"
                class="dropdown-item"
              >
                {{ child.label }}
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>关于网站</h3>
          <p>专注于火焰纹章系列的百科全书，提供详细的游戏历史、角色介绍、系统解析等内容</p>
        </div>
        <div class="footer-section">
          <h3>快速链接</h3>
          <ul>
            <li><a href="/">历史沿革</a></li>
            <li><a href="/works">作品列表</a></li>
            <li><a href="/systems">特色系统</a></li>
            <li><a href="/versions">发售版本</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>联系我们</h3>
          <p>邮箱: fe@fireemblem.com</p>
          <p>欢迎提供意见和建议</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 火焰纹章百科. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  cursor: pointer;
}

.logo h2 {
  color: white;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-item-container {
  position: relative;
}

.nav-item {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-item:not(.router-link-active):hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.nav-item.router-link-active {
  background: white;
  color: #667eea;
}

.nav-item.active {
  background: white;
  color: #667eea;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.nav-item.active {
  background: white;
  color: #667eea;
}

.arrow-down {
  font-size: 10px;
  transition: transform 0.3s ease;
}

.nav-item-container:hover .arrow-down {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 160px;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1001;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.dropdown-item:not(.router-link-active):hover {
  background: #f5f7fa;
  color: #667eea;
  padding-left: 25px;
}

.dropdown-item.router-link-active {
  background: #f5f7fa;
  color: #667eea;
  font-weight: 600;
}

.dropdown-item:first-child {
  border-radius: 8px 8px 0 0;
}

.dropdown-item:last-child {
  border-radius: 0 0 8px 8px;
}

/* 主要内容样式 */
.main-content {
  flex: 1;
}

/* 页脚样式 */
.footer {
  background: #2c3e50;
  color: white;
  padding: 60px 20px 20px;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #fff;
}

.footer-section p {
  color: #bdc3c7;
  line-height: 1.8;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #fff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  color: #95a5a6;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-menu {
    gap: 10px;
  }

  .nav-item {
    padding: 8px 12px;
    font-size: 13px;
  }

  .arrow-down {
    display: none;
  }

  .dropdown-menu {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.95);
    margin-top: 5px;
  }
}
</style>
