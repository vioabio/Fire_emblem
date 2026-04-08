<!-- 风花雪月 - 游戏攻略 -->
<template>
  <div class="game-guide">
    <h2 class="section-title">游戏攻略</h2>
    <div class="guide-section">
      <h3>🎮 新手入门</h3>
      <div class="guide-content">
        <p>《风花雪月》是系列时隔12年回归家用机的里程碑之作。游戏融合了战棋、养成和RPG元素，系统更加丰富。</p>
        <ul>
          <li>选择学园线（青狮/金鹿/黑鹫）会影响整个剧情走向</li>
          <li>每月有行动点数，合理规划教学和探索</li>
          <li>支援对话可以深入了解角色背景</li>
          <li>利用休战期培养学生能力</li>
        </ul>
      </div>
    </div>
    <div class="guide-section">
      <h3>⚔️ 兵队系统</h3>
      <div class="guide-content">
        <ul>
          <li><strong>兵队特性</strong>：每个兵种都有独特的技能和属性</li>
          <li><strong>指挥加成</strong>：主角可以指挥学级成员协同作战</li>
          <li><strong>技能学习</strong>：通过教学提升角色的各种技能等级</li>
          <li><strong>个人指令</strong>：派遣学生执行任务获得奖励</li>
        </ul>
      </div>
    </div>
    <div class="guide-section">
      <h3>💕 支援与茶会</h3>
      <div class="guide-content">
        <p>本作支援系统包含传统的战斗支援和独特的茶会对话。通过邀请心仪的角色喝茶，可以大幅提升好感度。</p>
        <div class="support-tips">
          <div class="tip"><span class="tip-icon">🍵</span><span>茶会邀请 - 提升好感度</span></div>
          <div class="tip"><span class="tip-icon">⚔️</span><span>战斗支援 - 战斗加成</span></div>
          <div class="tip"><span class="tip-icon">🎁</span><span>赠送礼物 - 解锁剧情</span></div>
        </div>
      </div>
    </div>
    <div class="guide-section">
      <h3>🏆 结局选择</h3>
      <div class="guide-content">
        <p>游戏有多条路线可供选择：青狮线、金鹿线、黑鹫线以及隐藏的灰狼学级。每条路线都有独特的剧情和结局。</p>
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
