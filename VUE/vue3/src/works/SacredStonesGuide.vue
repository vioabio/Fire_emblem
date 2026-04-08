<!-- 圣魔之光石 - 游戏攻略 -->
<template>
  <div class="game-guide">
    <h2 class="section-title">游戏攻略</h2>
    <div class="guide-section">
      <h3>🎮 新手入门</h3>
      <div class="guide-content">
        <p>《圣魔之光石》是GBA平台的最后一部火焰纹章作品，拥有独特的世界地图和分支剧情系统。</p>
        <ul>
          <li>可以选择扮演哥哥伊弗列姆或妹妹艾瑞珂，体验不同路线</li>
          <li>世界地图系统让你可以自由探索和刷级</li>
          <li>怪物可以捕捉培养，增加游戏趣味性</li>
          <li>分支剧情根据你的选择会有所不同</li>
        </ul>
      </div>
    </div>
    <div class="guide-section">
      <h3>⚔️ 战斗技巧</h3>
      <div class="guide-content">
        <ul>
          <li><strong>双重路线</strong>：选择主角后，部分角色会出现路线分歧</li>
          <li><strong>怪物培养</strong>：特定怪物可以捕捉并加入队伍</li>
          <li><strong>职业多样</strong>：本作新增多种职业，如驾驶员等</li>
          <li><strong>武器种类</strong>：剑、斧、枪、弓、魔法等各具特色</li>
        </ul>
      </div>
    </div>
    <div class="guide-section">
      <h3>💕 支援与隐藏</h3>
      <div class="guide-content">
        <p>支援系统与其他作品类似，通过相邻战斗提升等级。里昂的故事是本作最感人的剧情线之一。</p>
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
