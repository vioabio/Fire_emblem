<template>
  <div class="versions-container">
    <h1>发售版本</h1>
    <div class="content">
      <p>各平台版本的发布信息</p>
      <div class="versions-grid">
        <div class="version-card">
          <h3>FC版本</h3>
          <p class="platform">任天堂FC主机</p>
          <p class="year">1990-1994</p>
          <p class="desc">系列最初的三部作品</p>
        </div>
        <div class="version-card">
          <h3>SFC版本</h3>
          <p class="platform">超级任天堂</p>
          <p class="year">1996-1999</p>
          <p class="desc">画质提升，系统完善</p>
        </div>
        <div class="version-card">
          <h3>GBA版本</h3>
          <p class="platform">Game Boy Advance</p>
          <p class="year">2003-2005</p>
          <p class="desc">掌机时代的经典</p>
        </div>
        <div class="version-card">
          <h3>NDS版本</h3>
          <p class="platform">任天堂DS</p>
          <p class="year">2007-2010</p>
          <p class="desc">双屏设计，触控操作</p>
        </div>
        <div class="version-card">
          <h3>3DS版本</h3>
          <p class="platform">任天堂3DS</p>
          <p class="year">2012-2016</p>
          <p class="desc">立体视觉，新玩法</p>
        </div>
        <div class="version-card">
          <h3>Switch版本</h3>
          <p class="platform">任天堂Switch</p>
          <p class="year">2019至今</p>
          <p class="desc">高清画质，跨平台</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.versions-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.versions-container h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.content {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.content > p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

.versions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.version-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.version-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

.version-card h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 22px;
}

.platform {
  color: #667eea;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
}

.year {
  color: #666;
  font-size: 13px;
  margin-bottom: 12px;
}

.desc {
  color: #555;
  font-size: 14px;
  line-height: 1.5;
}
</style>
