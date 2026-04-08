<!-- ENGAGE - 游戏攻略 -->
<template>
  <div class="game-guide">
    <h2 class="section-title">游戏攻略</h2>
    <div class="guide-section">
      <h3>🎮 新手入门</h3>
      <div class="guide-content">
        <p>《火焰纹章：Engage》是系列回归经典战棋玩法的作品，同时融入了创新的纹章士结合系统。游戏难度适中，非常适合新手入坑。</p>
        <ul>
          <li>纹章士结合是核心系统，灵活运用可大幅提升战力</li>
          <li>每个纹章士都有独特技能，合理搭配队伍</li>
          <li>继承纹章士的戒指可以提前获得高级职业</li>
          <li>利用连携攻击快速清理敌人</li>
        </ul>
      </div>
    </div>
    <div class="guide-section">
      <h3>⚔️ 纹章士系统</h3>
      <div class="guide-content">
        <p>本作的核心创新系统。通过戒指与历代火焰纹章的传说英雄结合，获得特殊能力。</p>
        <ul>
          <li><strong>结合形态</strong>：与纹章士结合后外观和能力都会改变</li>
          <li><strong>纹章技能</strong>：每个纹章士都有独特的被动技能</li>
          <li><strong>结合攻击</strong>：发动结合后可以使用强力攻击</li>
          <li><strong>戒指强化</strong>：通过战斗提升戒指等级</li>
        </ul>
      </div>
    </div>
    <div class="guide-section">
      <h3>🗡️ 经典纹章士</h3>
      <div class="guide-content">
        <div class="emblem-grid">
          <div class="emblem-card">
            <span class="emblem-icon">🔥</span>
            <span>马尔斯</span>
            <small>勇气的纹章士</small>
          </div>
          <div class="emblem-card">
            <span class="emblem-icon">❄️</span>
            <span>罗伊</span>
            <small>封印之剑</small>
          </div>
          <div class="emblem-card">
            <span class="emblem-icon">⚡</span>
            <span>琳</span>
            <small>烈火之剑</small>
          </div>
          <div class="emblem-card">
            <span class="emblem-icon">💎</span>
            <span>艾克</span>
            <small>圣魔之光石</small>
          </div>
          <div class="emblem-card">
            <span class="emblem-icon">🌟</span>
            <span>贝雷丝</span>
            <small>风花雪月</small>
          </div>
          <div class="emblem-card">
            <span class="emblem-icon">🐉</span>
            <span>西格尔德</span>
            <small>霸战之国</small>
          </div>
        </div>
      </div>
    </div>
    <div class="guide-section">
      <h3>💕 支援系统</h3>
      <div class="guide-content">
        <p>通过散步和对话提升与同伴的支援等级，解锁特殊对话和战斗加成。</p>
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

/* 纹章士网格 */
.emblem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}

.emblem-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.emblem-icon {
  font-size: 30px;
  display: block;
  margin-bottom: 8px;
}

.emblem-card span:not(.emblem-icon) {
  display: block;
  color: #fff;
  font-size: 14px;
  margin-bottom: 4px;
}

.emblem-card small {
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
}
</style>
