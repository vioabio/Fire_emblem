<script setup>
import { ref } from 'vue'

const carouselWrapper = ref(null)
const carouselTrack = ref(null)

const scrollLeft = () => {
  if (carouselWrapper.value && carouselTrack.value) {
    const cardWidth = 300 // 卡片宽度 + gap
    const scrollAmount = cardWidth * 2 // 每次滚动2个卡片
    const currentScroll = carouselWrapper.value.scrollLeft
    carouselWrapper.value.scrollTo({
      left: Math.max(0, currentScroll - scrollAmount),
      behavior: 'smooth'
    })
  }
}

const scrollRight = () => {
  if (carouselWrapper.value && carouselTrack.value) {
    const cardWidth = 300 // 卡片宽度 + gap
    const scrollAmount = cardWidth * 2 // 每次滚动2个卡片
    const maxScroll = carouselTrack.value.scrollWidth - carouselWrapper.value.clientWidth
    const currentScroll = carouselWrapper.value.scrollLeft
    carouselWrapper.value.scrollTo({
      left: Math.min(maxScroll, currentScroll + scrollAmount),
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="works-container">
    <h1>作品列表</h1>
    <div class="carousel-container">
      <button class="carousel-btn prev-btn" @click="scrollLeft">←</button>
      <div class="carousel-wrapper" ref="carouselWrapper">
        <div class="carousel-track" ref="carouselTrack">
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
          <div class="work-card">
            <div class="work-number">05</div>
            <h3>多拉基亚776</h3>
            <p>1999年 - SFC平台</p>
            <p class="work-desc">外传性质作品，讲述圣战系谱后的故事</p>
          </div>
          <div class="work-card">
            <div class="work-number">06</div>
            <h3>封印之剑</h3>
            <p>2000年 - GBA平台</p>
            <p class="work-desc">GBA平台首作，引入了支援系统</p>
          </div>
          <div class="work-card">
            <div class="work-number">07</div>
            <h3>烈火之剑</h3>
            <p>2003年 - GBA平台</p>
            <p class="work-desc">系列最受喜爱的作品之一</p>
          </div>
          <div class="work-card">
            <div class="work-number">08</div>
            <h3>圣魔之光石</h3>
            <p>2004年 - GBA平台</p>
            <p class="work-desc">双主角设定，世界观扩展</p>
          </div>
        </div>
      </div>
      <button class="carousel-btn next-btn" @click="scrollRight">→</button>
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

/* 轮播图容器 */
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
}

/* 轮播图包装器 */
.carousel-wrapper {
  flex: 1;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* 轮播轨道 */
.carousel-track {
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease;
  padding: 20px;
}

/* 作品卡片 */
.work-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 280px;
  flex-shrink: 0;
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

/* 轮播按钮 */
.carousel-btn {
  position: absolute;
  width: 50px;
  height: 50px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.carousel-btn:active {
  transform: scale(0.95);
}

.prev-btn {
  left: -25px;
}

.next-btn {
  right: -25px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .carousel-container {
    gap: 10px;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .prev-btn {
    left: -10px;
  }
  
  .next-btn {
    right: -10px;
  }
  
  .work-card {
    min-width: 250px;
    padding: 20px;
  }
}
</style>
