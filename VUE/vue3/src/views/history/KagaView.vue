<script setup>
// 导入图片资源
import kagaImage from '@/assets/img/kaga.jpg'
</script>

<template>
  <div class="person-container">
    <!-- 顶部区域：图片 + 基本信息 -->
    <div class="header-section">
      <!-- 左侧图片区域 -->
      <div class="image-section">
        <div class="person-image">
          <img :src="kagaImage" alt="加贺昭三" />
        </div>
        <div class="image-caption">
          <h2 class="person-name">加贺昭三</h2>
          <p class="person-title">日本游戏制作人</p>
        </div>
      </div>
      
      <!-- 右侧信息表格 -->
      <div class="info-section">
        <table class="info-table">
          <tr>
            <td class="label">中文名</td>
            <td class="value">加贺昭三</td>
            <td class="label">出生日期</td>
            <td class="value">1950年</td>
          </tr>
          <tr>
            <td class="label">外文名</td>
            <td class="value">Shouzou Kaga</td>
            <td class="label">职业</td>
            <td class="value">游戏制作人</td>
          </tr>
          <tr>
            <td class="label">别名</td>
            <td class="value">火纹之父</td>
            <td class="label">主要成就</td>
            <td class="value">创造了《火焰之纹章》</td>
          </tr>
          <tr>
            <td class="label">国籍</td>
            <td class="value">日本</td>
            <td class="label">出生地</td>
            <td class="value">日本</td>
          </tr>
          <tr>
            <td class="label">民族</td>
            <td class="value">大和民族</td>
            <td class="label">代表作品</td>
            <td class="value">《火焰之纹章》、《泪之腕轮物语》、《维斯塔利亚传说》</td>
          </tr>
        </table>
      </div>
    </div>
    
    <!-- 下方详细介绍 -->
    <div class="detail-section">
      <p class="intro-text">
        加贺昭三（Shouzou Kaga），日本游戏制作人，1950年出生于日本，因主导开发《火焰之纹章》系列被誉为火纹之父。其任职于任天堂子公司Intelligent Systems期间，相继推出《暗黑龙与光之剑》《纹章之谜》《圣战系谱》等作品，确立了战略角色扮演游戏的基本框架。1999年离职后创立Tirnanog公司，开发《泪之腕轮物语》系列，其中PS版《Tear Ring Saga》销量突破30万套，后因版权纠纷退出游戏业界。
      </p>
      <p class="intro-text">
        2016年，加贺昭三宣布使用SRPG Studio制作同人游戏《维斯塔利亚传说：亡国骑士与星辰巫女》，并于2019年发布两部外传作品，均以免费形式发行。
      </p>
    </div>
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

/* 下方详细介绍 */
.detail-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.intro-text {
  font-size: 15px;
  color: #333;
  line-height: 1.8;
  margin: 0 0 15px 0;
  text-indent: 2em;
}

.intro-text:last-child {
  margin-bottom: 0;
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
