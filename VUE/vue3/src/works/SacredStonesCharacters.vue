<!-- 圣魔之光石 - 登场人物 -->
<template>
  <div class="character-display-page">
    <main class="main-content">
      <h1>登场人物</h1>
      <div v-for="group in characterGroups" :key="group.id" class="character-group">
        <h2 class="group-title">{{ group.name }}</h2>
        <div v-for="char in group.characters" :key="char.name" class="character-card">
          <div class="char-image-wrapper">
            <div class="char-image-container">
              <img 
                :src="char.image || 'https://placehold.co/280x400/f0f0f0/999?text=角色图'" 
                :alt="char.name" 
                class="char-main-image"
              >
            </div>
            <p class="char-name-below">{{ char.name }}</p>
          </div>
          <div class="char-info">
            <h3 class="char-name">
              {{ char.name }}
              <span v-if="char.class" class="char-cv">{{ char.class }}</span>
            </h3>
            <p class="char-desc">{{ char.desc }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import eirikaImg from '../assets/img/圣魔之光石/艾瑞珂.webp'
import ephraimImg from '../assets/img/圣魔之光石/伊弗列姆.webp'
import sethImg from '../assets/img/圣魔之光石/塞思.webp'
import rachelImg from '../assets/img/圣魔之光石/拉切尔.webp'
import joshuaImg from '../assets/img/圣魔之光石/约书亚.webp'
import salehImg from '../assets/img/圣魔之光石/塞勒夫.webp'
import myrrhImg from '../assets/img/圣魔之光石/梅尔.webp'

const characterGroups = ref([
  {
    id: 'protagonist',
    name: '主角',
    characters: [
      {
        name: '艾瑞珂',
        image: eirikaImg,
        class: '公主',
        desc: '鲁内斯王国的公主。心地善良，气质高雅，喜欢与别人和平友善的相处，但也有着直面苦难的勇气和坚强的内心。虽然不喜欢争斗又没有实战经验，但艾瑞珂还是跟着哥哥学了剑术——虽然她所学的只是根据哥哥枪法演变而来的。战争暴发后，在父王身死，哥哥下落不明的境况下，她开始了寻兄复国之旅。'
      },
      {
        name: '伊弗列姆',
        image: ephraimImg,
        class: '王子',
        desc: '鲁内斯王国的王子，艾瑞珂的双胞胎哥哥。正义感强烈，勇敢无畏，充满行动力的性格。身为王子，却完全不是能老老实实呆着王宫里的那种类型，对继承王位不感兴趣，愿望是成为大陆最强的佣兵战士。早年和妹妹一起前往古拉德帝国学习，跟随帝国最强的武将——杜塞尔将军学习枪法，并与帝国皇子利昂结下了深厚友情。'
      }
    ]
  },
  {
    id: 'ally',
    name: '盟军角色',
    characters: [
      {
        name: '塞思',
        image: sethImg,
        class: '将军',
        desc: '鲁内斯王国的年轻将军，沉着冷静且有着敏锐的战略眼光。有着"真银之骑士"的称号。忠诚认真，深得法德王的信赖，在鲁内斯王城陷落之时，法德王将艾瑞珂公主和鲁内斯圣石的秘密托付给了他。其人不仅忠肝义胆，实力在鲁内斯国内也是数一数二的。'
      },
      {
        name: '拉切尔',
        image: rachelImg,
        class: '谜之美少女',
        desc: '自称"正义和秩序的使者"、"退治魔物的谜之美少女"。是个富有正义感，总是自信满满的女孩。似乎有着了不起的身份。听过很多吟游诗人讲的故事，十分崇拜英雄。为了和大陆各地涌现出的魔物们一决高下，带着随从多兹拉和雷纳克一起踏上了状况不断的旅途。'
      },
      {
        name: '约书亚',
        image: joshuaImg,
        class: '流浪剑士',
        desc: '出身于佣兵之国贾哈那，嗜赌如命的流浪剑士。性格潇洒不羁，难以捉摸，不过对于中意的女子很有风度。作为被古拉德军所雇的佣兵，一度和艾瑞珂等人敌对，但因为某些原因而成为了伙伴。'
      },
      {
        name: '塞勒夫',
        image: salehImg,
        class: '贤者',
        desc: '出身于与世隔绝的珀卡拉之里，有着独特的气质的青年贤者。话虽不多但内心善良。魔力高超，能自如操纵理魔法者。是龙人女孩梅尔的守护者。虽然很年轻，但已经有了一个徒弟——见习魔法师尤恩。'
      },
      {
        name: '梅尔',
        image: myrrhImg,
        class: '龙人少女',
        desc: '隐居于暗之树海，既非人类亦非魔族的龙人族少女。虽然年龄已经超过800岁了，但仍然只是个性格单纯，乖巧而有些怕生的女孩。因为感受到了不祥的气息，为了传达大陆上发生异变的消息才出现在世人面前。在战乱中和塞勒夫失散，丢失了化身必须的龙石，所幸被伊弗列姆所救，并在那之后就一直跟随伊弗列姆。'
      }
    ]
  }
])
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.character-display-page {
  display: flex;
  min-height: 100vh;
  padding: 20px;
  background: #fff;
  font-family: system-ui, -apple-system, sans-serif;
}

.main-content {
  flex: 1;
  padding-right: 20px;
}

.main-content h1 {
  font-size: 28px;
  margin-bottom: 30px;
  color: #2c3e50;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.character-group {
  margin-bottom: 40px;
}

.group-title {
  font-size: 22px;
  margin-bottom: 20px;
  color: #2c3e50;
  padding-left: 10px;
  border-left: 4px solid #409eff;
}

.character-card {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.char-image-wrapper {
  flex-shrink: 0;
  width: 280px;
  text-align: center;
}

.char-image-container {
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
}

.char-main-image {
  width: 100%;
  height: auto;
  display: block;
  background: #f5f5f5;
}

.char-name-below {
  font-size: 16px;
  color: #666;
  margin-top: 8px;
}

.char-info {
  flex: 1;
  padding-top: 10px;
}

.char-name {
  font-size: 20px;
  margin-bottom: 12px;
  color: #2c3e50;
}

.char-cv {
  font-size: 16px;
  font-weight: normal;
  color: #409eff;
  margin-left: 12px;
}

.char-desc {
  font-size: 17px;
  line-height: 1.8;
  color: #444;
}

@media screen and (max-width: 768px) {
  .character-card {
    flex-direction: column;
  }
  .char-image-wrapper {
    width: 100%;
  }
}
</style>
