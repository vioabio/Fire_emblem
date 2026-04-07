<!-- 封印之剑 - 登场人物 -->
<template>
  <div class="game-characters">
    <h2 class="section-title">登场人物</h2>
    <div class="characters-grid">
      <div class="character-card">
        <div class="character-avatar">⚔️</div>
        <div class="character-info">
          <h3>罗伊</h3>
          <p class="character-class">领主</p>
          <p class="character-desc">本作品的男主角，火焰之纹章的持有者，裴波港侯爵的次子。虽然年纪轻轻，但在战斗中展现出非凡的才能。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🛡️</div>
        <div class="character-info">
          <h3>琳</h3>
          <p class="character-class">游牧骑兵</p>
          <p class="character-desc">伊坦的美少女，是最早加入队伍的同伴之一。性格直率，擅长使用弓和投掷武器。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🔮</div>
        <div class="character-info">
          <h3>艾尔文</h3>
          <p class="character-class">贤者</p>
          <p class="character-desc">神秘的贤者，知晓封印之纹章的秘密。拥有强大的魔法能力，是队伍中重要的魔法输出。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🗡️</div>
        <div class="character-info">
          <h3>阿姆巴斯</h3>
          <p class="character-class">重甲骑士</p>
          <p class="character-desc">艾特鲁大陆的守护骑士。忠诚可靠，是队伍中最坚实的防线。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🏹</div>
        <div class="character-info">
          <h3>杜卡</h3>
          <p class="character-class">弓骑士</p>
          <p class="character-desc">远程攻击专家，精准的箭术让敌人闻风丧胆。</p>
        </div>
      </div>
      <div class="character-card">
        <div class="character-avatar">🎵</div>
        <div class="character-info">
          <h3>辛西娅</h3>
          <p class="character-class">舞娘</p>
          <p class="character-desc">能歌善舞的少女，她的舞蹈可以恢复同伴的体力。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-characters {
  padding: 20px 0;
}

.section-title {
  font-size: 20px;
  color: #00d2ff;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 3px solid #00d2ff;
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.character-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  gap: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.character-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.character-avatar {
  font-size: 40px;
  width: 60px;
  height: 60px;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.character-info h3 {
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
}

.character-class {
  font-size: 13px;
  color: #00d2ff;
  margin-bottom: 8px;
}

.character-desc {
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .characters-grid {
    grid-template-columns: 1fr;
  }
}
</style>
