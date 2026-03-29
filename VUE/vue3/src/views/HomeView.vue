<template>
  <div class="home-container">
    <section class="hero-section">
      <h1>欢迎来到火焰纹章百科</h1>
      <p>探索经典战旗游戏的历史与发展</p>
      <button class="cta-button" @click="navigateToHistory">开始探索</button>
    </section>

    <section class="feature-section">
      <div class="feature-card" @click="navigateToHistory">
        <div class="feature-icon">📚</div>
        <h3>历史沿革</h3>
        <p>深入了解加贺昭三时代与成广通时代的辉煌历史</p>
      </div>
      <div class="feature-card" @click="navigateToWorks">
        <div class="feature-icon">🎮</div>
        <h3>作品列表</h3>
        <p>全系列作品介绍与详细解析</p>
      </div>
      <div class="feature-card" @click="navigateToSystems">
        <div class="feature-icon">⚔️</div>
        <h3>特色系统</h3>
        <p>战旗、职业、武器、角色养成、支援等核心系统</p>
      </div>
      <div class="feature-card" @click="navigateToVersions">
        <div class="feature-icon">💿</div>
        <h3>发售版本</h3>
        <p>各平台版本发布信息与特色</p>
      </div>
      <div class="feature-card" @click="navigateToTranslation">
        <div class="feature-icon">🌏</div>
        <h3>汉化信息</h3>
        <p>外星科技、火花狼组等汉化组贡献</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHistory = () => router.push('/history')
const navigateToWorks = () => router.push('/works')
const navigateToSystems = () => router.push('/systems')
const navigateToVersions = () => router.push('/versions')
const navigateToTranslation = () => router.push('/translation')
</script>

<style scoped>
.home-container {
  min-height: calc(100vh - 70px - 200px);
}

.hero-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 100px 20px;
  text-align: center;
}

.hero-section h1 {
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero-section p {
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
}

.cta-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
}

.feature-section {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 22px;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 32px;
  }

  .hero-section p {
    font-size: 16px;
  }

  .feature-section {
    grid-template-columns: 1fr;
  }
}
</style>
