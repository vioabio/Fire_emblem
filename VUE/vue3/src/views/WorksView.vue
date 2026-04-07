<template>
  <div class="timeline-page">
    <!-- 背景图（固定） -->
    <!-- 是否可以添加随机背景图片 -->
    <div class="fixed-bg"></div>

    <div class="timeline-container">
      <!-- 中间的竖线 -->
      <div class="timeline-line"></div>

      <!-- 时间轴项 1 -->
      <div class="timeline-item" :class="{ active: activeItems.has(0) }" :data-index="0">
        <div class="timeline-content">
          <div class="image-box">
            <img src="https://picsum.photos/400/250?random=1" alt="2005">
            <h2 class="year">2005</h2>
          </div>
          <div class="text-box">
            <h3>《小王子》</h3>
            <p>如果你爱上了某个星球的一朵花。那么，只要在夜晚仰望星空，就会觉得漫天的繁星就像一朵朵盛开的花。</p>
          </div>
        </div>
      </div>

      <!-- 时间轴项 2 -->
      <div class="timeline-item" :class="{ active: activeItems.has(1) }" :data-index="1">
        <div class="timeline-content">
          <div class="image-box">
            <img src="https://picsum.photos/400/250?random=2" alt="2006">
            <h2 class="year">2006</h2>
          </div>
          <div class="text-box">
            <h3>星空物语</h3>
            <p>所有的大人都曾经是小孩，虽然，只有少数的人记得。岁月在我们的指尖静静流淌。</p>
          </div>
        </div>
      </div>

      <!-- 时间轴项 3 -->
      <div class="timeline-item" :class="{ active: activeItems.has(2) }" :data-index="2">
        <div class="timeline-content">
          <div class="image-box">
            <img src="https://picsum.photos/400/250?random=3" alt="2010">
            <h2 class="year">2010</h2>
          </div>
          <div class="text-box">
            <h3>梦幻旅程</h3>
            <p>在这里，时间似乎停止了跳动，每一帧画面都定格成了永恒的诗篇。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeItems = ref(new Set())

let observer = null

onMounted(() => {
  const items = document.querySelectorAll('.timeline-item')

  const options = {
    root: null,
    rootMargin: '-45% 0% -45% 0%',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = parseInt(entry.target.dataset.index)
      if (entry.isIntersecting) {
        activeItems.value.add(index)
      } else {
        activeItems.value.delete(index)
      }
      // 触发响应式更新
      activeItems.value = new Set(activeItems.value)
    })
  }, options)

  items.forEach(item => {
    observer.observe(item)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.timeline-page {
  min-height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #1a1a2e;
  font-family: "Microsoft YaHei", sans-serif;
  color: white;
  overflow-x: hidden;
}

/* 固定背景 */
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1f4068, #16213e);
  z-index: -1;
  background-image: url('https://picsum.photos/1920/1080?blur=10');
  background-size: cover;
}

/* 时间轴容器 */
.timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 100px auto;
  padding: 40px 0;
}

/* 中间那条竖线 */
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-50%);
}

/* 每一行项目 */
.timeline-item {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 150px;
  transition: 0.8s all ease;
  opacity: 0.2;
  filter: blur(5px);
  transform: translateY(50px);
}

/* 偶数项显示在右侧 */
.timeline-item:nth-child(even) {
  justify-content: flex-end;
}

/* 激活状态 */
.timeline-item.active {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}

/* 内容卡片 */
.timeline-content {
  width: 45%;
  position: relative;
}

.image-box {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.image-box img {
  width: 100%;
  display: block;
  transition: 0.5s transform;
}

/* 年份文字 */
.year {
  position: absolute;
  bottom: -10px;
  left: 10px;
  font-size: 80px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
  pointer-events: none;
}

.text-box {
  padding: 20px 10px;
}

.text-box h3 {
  margin-bottom: 10px;
  color: #00d2ff;
  border-left: 3px solid #00d2ff;
  padding-left: 10px;
}

.text-box p {
  line-height: 1.6;
  color: #ddd;
}

/* 响应式适配移动端 */
@media screen and (max-width: 768px) {
  .timeline-line {
    left: 20px;
  }
  .timeline-item, .timeline-item:nth-child(even) {
    justify-content: flex-start;
    padding-left: 50px;
  }
  .timeline-content {
    width: 90%;
  }
  .year {
    font-size: 50px;
  }
}
</style>
