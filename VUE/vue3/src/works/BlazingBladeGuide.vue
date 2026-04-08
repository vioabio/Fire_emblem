<!-- 烈火之剑 - 游戏攻略 -->
<template>
  <div class="game-guide">
    <h2 class="section-title">游戏攻略</h2>
    <div class="guide-section">
      <h3>🎮 新手入门</h3>
      <div class="guide-content">
        <p>《烈火之剑》是火焰纹章封印之剑的前传，作为系列首个登陆欧美的作品，本作难度适中，适合新手入坑。</p>
        <ul>
          <li>序章琳的攻击难度较高，建议先熟悉基本操作</li>
          <li>艾利乌德和琳是主力输出，优先培养</li>
          <li>利用地形优势，森林和高地提供回避加成</li>
          <li>及时购买武器，注意耐久度管理</li>
        </ul>
      </div>
    </div>
    <div class="guide-section">
      <h3>⚔️ 战斗技巧</h3>
      <div class="guide-content">
        <ul>
          <li><strong>天气系统</strong>：雨天会降低远程命中率，善用这一点</li>
          <li><strong>指挥系统</strong>：特定角色可以指挥相邻单位，提供额外支援</li>
          <li><strong>武器克制</strong>：剑克斧，斧克枪，枪克剑</li>
          <li><strong>职业转职</strong>：达到一定等级后可转职，获得更高成长率</li>
        </ul>
      </div>
    </div>
    <div class="guide-section">
      <h3>💕 支援系统</h3>
      <div class="guide-content">
        <p>支援系统是本作的重要组成。通过战斗中的相邻行动提升支援等级，高支援等级在战斗中获得额外加成。</p>
        <div class="support-tips">
          <div class="tip"><span class="tip-icon">🔶</span><span>C级支援 +5%</span></div>
          <div class="tip"><span class="tip-icon">🔷</span><span>B级支援 +10%</span></div>
          <div class="tip"><span class="tip-icon">🔴</span><span>A级支援 +15%</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 攻略区域 */
.game-guide {
  padding: 20px 0;
}

/* 区域标题 */
.section-title {
  font-size: 20px;
  color: #00d2ff;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 3px solid #00d2ff;
}

/* 攻略章节 */
.guide-section {
  margin-bottom: 30px;
}

.guide-section h3 {
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* 攻略内容 */
.guide-content p {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
}

.guide-content ul {
  list-style: none;
  padding: 0;
}

.guide-content li {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 0 8px 20px;
  position: relative;
}

.guide-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #00d2ff;
}

.guide-content strong {
  color: #00d2ff;
}

/* 支援提示 */
.support-tips {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
}

.tip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  background: rgba(102, 126, 234, 0.15);
  border-radius: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
}

.tip-icon {
  font-size: 18px;
}
</style>
