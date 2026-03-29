<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
const ctx = ref(null)
const particlesArray = ref([])
const animationId = ref(null)

// 粒子效果类
class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 2 + 1
    this.speedX = (Math.random() - 0.5) * 1.5
    this.speedY = (Math.random() - 0.5) * 1.5
  }

  update() {
    this.y += this.speedY
    this.x += this.speedX
  }

  draw() {
    if (ctx.value) {
      ctx.value.beginPath()
      ctx.value.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.value.fillStyle = "rgba(255, 255, 255, 0.9)"
      ctx.value.fill()

      // 添加发光效果
      ctx.value.shadowBlur = 10
      ctx.value.shadowColor = "rgba(255, 255, 255, 0.5)"
    }
  }
}

function createParticle() {
  const x = Math.random() * (canvas.value?.width || 0)
  const y = Math.random() * (canvas.value?.height || 0)
  particlesArray.value.push(new Particle(x, y))
}

function handleParticle() {
  for (let i = 0; i < particlesArray.value.length; i++) {
    const particle = particlesArray.value[i]
    particle.update()
    particle.draw()

    if (particle.x < 0 || particle.x > (canvas.value?.width || 0) ||
        particle.y < 0 || particle.y > (canvas.value?.height || 0)) {
      particlesArray.value.splice(i, 1)
      i--
      continue
    }

    // 重置阴影效果以提高性能
    if (ctx.value) {
      ctx.value.shadowBlur = 0
    }

    for (let j = i; j < particlesArray.value.length; j++) {
      const dx = particlesArray.value[i].x - particlesArray.value[j].x
      const dy = particlesArray.value[i].y - particlesArray.value[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // 增加连线距离和提高透明度
      if (distance < 150) {
        if (ctx.value) {
          ctx.value.beginPath()
          const opacity = Math.max(0.1, 1 - distance / 150)
          ctx.value.strokeStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.value.lineWidth = 0.8
          ctx.value.moveTo(particlesArray.value[i].x, particlesArray.value[i].y)
          ctx.value.lineTo(particlesArray.value[j].x, particlesArray.value[j].y)
          ctx.value.stroke()
        }
      }
    }
  }
}

function draw() {
  if (ctx.value && canvas.value) {
    ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)

    // 增加粒子数量
    const count = Math.floor((canvas.value.height / 80) * (canvas.value.width / 80))
    if (particlesArray.value.length < count) {
      createParticle()
    }

    handleParticle()

    animationId.value = requestAnimationFrame(draw)
  }
}

function handleResize() {
  if (canvas.value) {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
    particlesArray.value = []
  }
}

onMounted(() => {
  canvas.value = document.getElementById('homeParticleCanvas')
  if (canvas.value) {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
    ctx.value = canvas.value.getContext('2d')

    console.log('Canvas initialized:', canvas.value.width, 'x', canvas.value.height)
    console.log('Context:', ctx.value ? 'created' : 'failed')

    // 开始动画
    draw()

    // 窗口大小改变时重新设置canvas
    window.addEventListener('resize', handleResize)
  } else {
    console.error('Canvas element not found')
  }
})

onBeforeUnmount(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="home-container">
    <!-- 粒子效果背景 -->
    <canvas id="homeParticleCanvas" ref="canvas"></canvas>

    <!-- 欢迎内容 -->
    <div class="welcome-content">
      <h1 class="welcome-title">火焰纹章</h1>
      <p class="welcome-subtitle">任天堂经典SRPG游戏系列</p>
      <div class="welcome-description">
        <p>欢迎来到火焰纹章百科，这里汇集了游戏的历史沿革、作品列表、特色系统介绍等内容。</p>
        <p>探索这个经典游戏系列的精彩世界，了解其深厚的背景故事和丰富的游戏机制。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 粒子效果背景 */
#homeParticleCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

/* 欢迎内容 */
.welcome-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  padding: 40px;
  max-width: 800px;
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-title {
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.welcome-subtitle {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.welcome-description {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 30px 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.welcome-description p {
  font-size: 18px;
  line-height: 1.8;
  margin: 12px 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .welcome-title {
    font-size: 48px;
  }

  .welcome-subtitle {
    font-size: 22px;
  }

  .welcome-description {
    padding: 20px 25px;
  }

  .welcome-description p {
    font-size: 16px;
    line-height: 1.6;
  }
}
</style>
