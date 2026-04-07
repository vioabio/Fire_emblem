<script setup>
// 导入图片资源
import chengImage from '@/assets/img/cheng.jpg'
// 导入子组件
import ChengSubDesc from './cheng_subdesc.vue'
import ChengTimeline from './cheng_timeline.vue'
import ChengWorks from './cheng_works.vue'
</script>

<template>
  <div class="person-container">
    <!-- 顶部区域：图片 + 基本信息 -->
    <div class="header-section">
      <!-- 左侧图片区域 -->
      <div class="image-section">
        <div class="person-image">
          <img :src="chengImage" alt="成广通" />
        </div>
        <div class="image-caption">
          <h2 class="person-name">成广通</h2>
          <p class="person-title">日本游戏制作人</p>
        </div>
      </div>
      
      <!-- 右侧信息表格 -->
      <div class="info-section">
        <table class="info-table">
          <tr>
            <td class="label">中文名</td>
            <td class="value">成广通</td>
            <td class="label">职业</td>
            <td class="value">游戏制作人</td>
          </tr>
          <tr>
            <td class="label">国籍</td>
            <td class="value">日本</td>
            <td class="label">出生地</td>
            <td class="value">冈山县</td>
          </tr>
          <tr>
            <td class="label">出生日期</td>
            <td class="value">1963年1月14日</td>
            <td class="label">职务</td>
            <td class="value">任天堂IS会社开发部长</td>
          </tr>
        </table>
      </div>
    </div>

    <!-- 简介描述 -->
    <ChengSubDesc />

    <!-- 人物生平时间线 -->
    <ChengTimeline />

    <!-- 主要作品 -->
    <ChengWorks />
  </div>
</template>

<style scoped>
.person-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

/* 顶部区域布局 */
.header-section {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* 左侧图片区域 */
.image-section {
  flex-shrink: 0;
  width: 200px;
}

.person-image {
  width: 200px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

.person-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.image-caption {
  text-align: center;
  margin-top: 15px;
}

.person-name {
  font-size: 24px;
  color: #333;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.person-title {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* 右侧信息表格 */
.info-section {
  flex: 1;
  display: flex;
  align-items: center;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
}

.info-table tr {
  border-bottom: 1px solid #f0f0f0;
}

.info-table tr:last-child {
  border-bottom: none;
}

.info-table td {
  padding: 15px 10px;
  vertical-align: top;
}

.info-table .label {
  width: 80px;
  color: #999;
  font-size: 14px;
  background: #f8f9fa;
  text-align: center;
  font-weight: 500;
}

.info-table .value {
  width: calc(50% - 80px);
  color: #333;
  font-size: 14px;
  padding-left: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-section {
    flex-direction: column;
    align-items: center;
  }
  
  .image-section {
    width: 100%;
    max-width: 200px;
  }
  
  .info-section {
    width: 100%;
  }
  
  .info-table .label,
  .info-table .value {
    width: auto;
    display: block;
    padding: 8px 10px;
  }
  
  .info-table tr {
    display: block;
    margin-bottom: 10px;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
  }
  
  .info-table td {
    display: block;
    padding: 8px 10px;
  }
}
</style>
