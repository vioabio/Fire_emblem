<script setup>
</script>

<template>
  <div class="background-view">
    <!-- 装饰性光晕 -->
    <div class="bg-decoration">
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
    </div>
    <!-- 背景网格 -->
    <div class="bg-grid"></div>
  </div>
</template>

<style scoped>
.background-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  z-index: -1;
  overflow: hidden;
}

/* 装饰性光晕 */
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.circle-1 {
  width: 500px;
  height: 500px;
  background: rgba(102, 126, 234, 0.25);
  top: -150px;
  right: -100px;
  animation: float1 20s ease-in-out infinite;
}

.circle-2 {
  width: 400px;
  height: 400px;
  background: rgba(118, 75, 162, 0.2);
  bottom: -50px;
  left: -100px;
  animation: float2 25s ease-in-out infinite;
}

.circle-3 {
  width: 250px;
  height: 250px;
  background: rgba(236, 72, 153, 0.15);
  top: 50%;
  left: 40%;
  animation: float3 18s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 30px); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, -20px); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, 20px) scale(1.1); }
}

/* 背景网格 */
.bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>
