<script setup>
import CoverImg from '@/assets/img/封印之剑/封印之剑封面图.jpg'
</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <!-- 左侧图片区域 -->
      <div class="left-img-area">
        <img 
          :src="CoverImg" 
          alt="火焰之纹章：封印之剑 标题界面" 
          class="game-title-img"
        >
        <!-- 添加点击事件，点击图片跳转到对应界面 -->
        <div class="img-caption">火焰之纹章：封印之剑</div>
      </div>

      <!-- 右侧内容区域 -->
      <div class="right-content-area">
        <h1 class="page-title">《火焰之纹章：封印之剑》</h1>
        <div class="info-row">英文名：Fire Emblem:The Binding Blade</div>
        <div class="info-row">机种：<span class="text-blue">GBA</span></div>
        <div class="info-row">发售日期:2002年3月29日</div>
        <div class="info-row">容量: 64MROM</div>

        <p>
          《火焰之纹章：封印之剑》作为GBA掌机的第一部作品，游戏系统承袭了先前的方式，本作剧情也让玩家有口皆碑，同时享受游戏剧情以及游戏内容。除此之外，也充分利用了GBA的通信对战功能，玩家们可以通过对战线，最多能够4名玩家同时进行对战。
        </p>

        <p>
          《封印之剑》的故事发生在一块名为艾雷布的大陆。很久以前，大陆上的人类与龙族和平共处，彼此友善，但人类日益贪婪的欲望终于促使他们对龙族发动旷日持久的"人龙战争"。当时，以哈尔特姆德为首的八神将以神将器击败了龙族。使龙族消失了数百年。而在《封印之剑》故事发生的时代，哈尔特姆德所创立的国家——伯尔尼王国国王塞菲尔却企图依靠解放龙族来"净化"世界，一个由众多小国组成的联盟国家——利西亚联盟遭到了伯尔尼的入侵，诸侯国之一菲雷国公公子罗伊代替重病的父亲，投入到反抗伯尔尼入侵的战争中。 <sup>[8]</sup>
        </p>

        <p>
          《封印之剑》最初的命名是《灰色巫女》，但是在游戏开发初期，加贺昭三因为和任天堂的矛盾而离职，撂下挑子，当时业界普遍不看好加贺离职后的火纹作品，但是IS社最终推翻了原来的剧本，并将之改名《封印之剑》，剧情模式有点类似于初代的《暗黑龙与光之剑》，在后来的访谈录中，IS社新的掌门人也表示，加贺离开后，火焰纹章系列将迎来自己的转折点，但也是新的起点。《封印之剑》交给了玩家一份让人满意的答卷。
        </p>

        <p>
          《封印之剑》以36分的成绩进入了《FAMI通》的白金殿堂。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-top: 30px;
  margin-bottom: 30px;
}
.container {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  background: #ffffff;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 4px;
}
.left-img-area {
  flex: 0 0 320px;
  padding-top: 20px;
}
.game-title-img {
  width: 100%;
  height: auto;
  border: 1px solid #e0e0e0;
}
.img-caption {
  text-align: center;
  margin-top: 15px;
  font-size: 15px;
  color: #666;
}
.right-content-area {
  flex: 1;
  line-height: 1.8;
  font-size: 15px;
  color: #333;
}
h1.page-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
  padding-bottom: 15px;
  border-bottom: 3px solid #667eea;
}
.info-row {
  margin-bottom: 10px;
  font-size: 15px;
  color: #333;
}
.text-blue {
  color: #667eea;
  font-weight: 500;
}
p {
  margin: 15px 0;
  font-size: 15px;
  color: #333;
  text-align: justify;
  text-indent: 2em;
}
sup {
  font-size: 12px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .container {
      flex-direction: column;
  }
  .left-img-area {
      width: 100%;
  }
}
</style>