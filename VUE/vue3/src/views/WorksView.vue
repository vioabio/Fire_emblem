<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const activeItems = ref(new Set())

let observer = null

// 游戏详情路由映射
const gameRoutes = [
  '/works/binding-blade',   // 封印之剑
  '/works/blazing-blade',   // 烈火之剑
  '/works/sacred-stones',   // 圣魔之光石
  '/works/three-houses',    // 风花雪月
  '/works/engage'           // ENGAGE
]

// 判断是否在子页面
const isInDetailPage = computed(() => {
  return route.path !== '/works'
})

// 点击图片跳转到游戏详情页
function navigateToGame(index) {
  const targetRoute = gameRoutes[index]
  if (targetRoute) {
    router.push(targetRoute)
  }
}

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

<template>
  <div class="works-page">
    <!-- 背景图（固定） -->
    <div class="fixed-bg"></div>

    <!-- 时间轴容器 - 仅在非详情页显示 -->
    <div class="timeline-container" v-show="!isInDetailPage">
      <!-- 中间的竖线 -->
      <div class="timeline-line"></div>

      <!-- 封印之剑 -->
      <div class="timeline-item" :class="{ active: activeItems.has(0) }" :data-index="0">
        <div class="timeline-content">
          <div class="image-box clickable" @click="navigateToGame(0)">
            <img src="@/assets/img/封印之剑/封印之剑封面图.jpg" alt="封印之剑">
            <h2 class="year">2002</h2>
          </div>
          <div class="text-box">
            <h3>《封印之剑》</h3>
            <p>《火焰之纹章：封印之剑》是火焰纹章系列的GBA首作，延续系列系统并获剧情好评。故事围绕人龙战争后，
              反派欲解放龙族净化世界，主角罗伊率军反抗。开发中经历制作人离职、剧本重构，
              最终以类似初代模式赢得好评，进入《FAMI通》白金殿堂。</p>
          </div>
        </div>
      </div>

      <!-- 烈火之剑 -->
      <div class="timeline-item" :class="{ active: activeItems.has(1) }" :data-index="1">
        <div class="timeline-content">
          <div class="image-box clickable" @click="navigateToGame(1)">
            <img src="@/assets/img/烈火之剑/烈火之剑封面图.jpg" alt="烈火之剑">
            <h2 class="year">2003</h2>
          </div>
          <div class="text-box">
            <h3>《烈火之剑</h3>
            <p>《烈火之剑》是《封印之剑》的前传，画面表现力更强，剧情温馨感人。
              系统新增天气与指挥值，创新有限但平衡性佳。人设出色，
              首部登陆欧美市场，全球销量逾50万。</p>
          </div>
        </div>
      </div>

      <!-- 圣魔之光石 -->
      <div class="timeline-item" :class="{ active: activeItems.has(2) }" :data-index="2">
        <div class="timeline-content">
          <div class="image-box clickable" @click="navigateToGame(2)">
            <img src="@/assets/img/圣魔之光石/圣魔之光石封面图.jpg" alt="圣魔之光石">
            <h2 class="year">2004</h2>
          </div>
          <div class="text-box">
            <h3>《圣魔之光石》</h3>
            <p>《圣魔之光石》以新大陆为舞台，主角兄妹伊弗列姆与艾瑞珂为复国而战。
              游戏拥有分支剧情与世界地图系统，角色塑造深刻，
              尤其通过悲剧皇子里昂的故事，将"友情"主题推向高潮。</p>
          </div>
        </div>
      </div>

      <!-- 风花雪月 -->
      <div class="timeline-item" :class="{ active: activeItems.has(3) }" :data-index="3">
        <div class="timeline-content">
          <div class="image-box clickable" @click="navigateToGame(3)">
            <img src="@/assets/img/风花雪月/风花雪月封面图.jpg" alt="风花雪月">
            <h2 class="year">2019</h2>
          </div>
          <div class="text-box">
            <h3>《风花雪月》</h3>
            <p>《火焰纹章：风花雪月》是系列时隔12年回归家用机的作品。
              故事背景设定于三国争霸的弗德兰大陆，副标题"风花雪月"体现岁月感。
              战斗引入"兵队"系统，并大幅强化养成要素以降低策略门槛，配合NS机能实现了画面革新。</p>
          </div>
        </div>
      </div>

      <!-- ENGAGE -->
      <div class="timeline-item" :class="{ active: activeItems.has(4) }" :data-index="4">
        <div class="timeline-content">
          <div class="image-box clickable" @click="navigateToGame(4)">
            <img src="@/assets/img/ENGAGE/ENGAGE封面图.jpg" alt="ENGAGE">
            <h2 class="year">2023</h2>
          </div>
          <div class="text-box">
            <h3>《ENGAGE》</h3>
            <p>《火焰纹章：Engage》的舞台为艾雷欧斯大陆。
              主角神龙琉尔为阻止邪龙复活而战，可通过戒指与异界英雄"纹章士"结合，
              获得强大力量，并与各国伙伴共同展开冒险。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 子路由页面展示区域 - 全屏覆盖 -->
    <router-view v-slot="{ Component, route }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.works-page {
  min-height: 100vh;
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
  aspect-ratio: 16/9;
}

.image-box.clickable {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-box.clickable:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4);
}

.image-box img {
  width: 100%;
  display: block;
  transition: 0.5s transform;
  aspect-ratio: 16/9;
  object-fit: cover;
}

/* 年份文字 - 始终位于图片左下角 */
.year {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 80px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
  pointer-events: none;
  margin: 0;
  line-height: 1;
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

/* 页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 页面滑动过渡动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
