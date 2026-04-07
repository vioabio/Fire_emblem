<!-- 封印之剑 - 游戏攻略 -->
<template>
  <div class="game-guide">
    <h2 class="section-title">游戏攻略</h2>
    
    <div class="guide-section">
      <h3>🎮 新手入门</h3>
      <div class="guide-content">
        <p>《火焰之纹章：封印之剑》是一款经典的回合制战棋游戏。作为系列首款支持女性主角（琳）路线的作品，游戏提供了丰富的角色培养和剧情选择。</p>
        <ul>
          <li>注意角色的职业成长率，每个角色都有不同的擅长领域</li>
          <li>善用武器克制系统：剑克斧，斧克枪，枪克剑</li>
          <li>魔法分为红魔法（攻击）、绿魔法（回复）、光/暗魔法（特殊）</li>
          <li>合理利用地形优势，森林和山地提供额外的回避率</li>
        </ul>
      </div>
    </div>

    <div class="guide-section">
      <h3>⚔️ 战斗技巧</h3>
      <div class="guide-content">
        <ul>
          <li><strong>双击系统</strong>：双击角色可以查看详细的成长预测</li>
          <li><strong>同伴指令</strong>：熟练使用"待命"、"警戒"、"进攻"等指令</li>
          <li><strong>职业搭配</strong>：建议队伍包含坦克、输出、治疗和辅助</li>
          <li><strong>武器耐久</strong>：注意武器的耐久度，及时购买或修理</li>
        </ul>
      </div>
    </div>

    <div class="guide-section">
      <h3>💕 支援系统</h3>
      <div class="guide-content">
        <p>支援系统是本作的重要特色。通过让特定角色在战斗中相邻，可以提升他们的支援等级。支援等级越高，战斗中提供的加成越多，还能解锁特殊的支援对话。</p>
        <div class="support-tips">
          <div class="tip">
            <span class="tip-icon">🔶</span>
            <span>C级支援 - 战斗加成 +5%</span>
          </div>
          <div class="tip">
            <span class="tip-icon">🔷</span>
            <span>B级支援 - 战斗加成 +10%</span>
          </div>
          <div class="tip">
            <span class="tip-icon">🔴</span>
            <span>A级支援 - 战斗加成 +15%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="guide-section">
      <h3>🏆 隐藏要素</h3>
      <div class="guide-content">
        <ul>
          <li>隐藏商店：特定章节结束后会出现秘密商店</li>
          <li>稀有道具：通过完成特定条件获得稀有武器和道具</li>
          <li>角色加入：部分角色需要满足特定条件才会加入</li>
          <li>结局分歧：根据玩家选择和游戏进度，结局会有所不同</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-guide {
  padding: 20px 0;
}

.section-title {
  font-size: 20px;
  color: #00d2ff;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 3px solid #00d2ff;
}

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
