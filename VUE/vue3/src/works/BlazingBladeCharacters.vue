<!-- 烈火之剑 - 登场人物 -->
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
import lynImg from '../assets/img/烈火之剑/琳.webp'
import eliwoodImg from '../assets/img/烈火之剑/艾利乌德.webp'
import hectorImg from '../assets/img/烈火之剑/赫克托耳.webp'
import ninianImg from '../assets/img/烈火之剑/妮妮安.webp'
import nilsImg from '../assets/img/烈火之剑/尼尔斯.webp'

const characterGroups = ref([
  {
    id: 'protagonist',
    name: '主要角色',
    characters: [
      {
        name: '艾利乌德',
        image: eliwoodImg,
        class: '领主',
        desc: '利西亚地方十分有影响力的贵族，费雷侯爵之子。是前作主人公罗伊的父亲。性格温柔，对任何人都十分有礼，但有着强烈的正义感和坚定的意志。对失踪的父亲费雷侯十分担心，带着寥寥数名随从踏上了搜寻的旅程。虽然没有什么实战经验，但是用剑的实力还是值得肯定的。'
      },
      {
        name: '琳',
        image: lynImg,
        class: '剑士',
        desc: '萨卡的少女剑士，本名琳迪斯。利西亚同盟基亚兰侯爵的外孙女，基亚兰的公女。父亲是萨卡人，在15岁之前一直都在草原上过着游牧生活。起初对利西亚的贵族抱有反感，但在和艾利乌德等人相遇之后逐渐改变了看法。性格刚强的女中豪杰，有着冷静的洞察力。虽然是女孩子，但剑技相当不俗。'
      },
      {
        name: '赫克托耳',
        image: hectorImg,
        class: '奥斯迪亚侯爵之弟',
        desc: '出身于利西亚同盟拥有最大领地的奥斯迪亚侯爵家，是当代侯爵乌瑟尔的弟弟。虽然看上去有些鲁莽粗暴，实际上是个清爽利落的好青年。为人豪爽重视友情，与艾利乌德是从小玩到大的好朋友，加入了艾利乌德的寻父之旅，并且在那之后就一直一起行动。能够自如使用大斧，是个武力过人的战将。'
      }
    ]
  },
  {
    id: 'companion',
    name: '同伴角色',
    characters: [
      {
        name: '妮妮安',
        image: ninianImg,
        class: '舞娘',
        desc: '和弟弟尼尔斯一起，一边从事艺术表演一边继续旅行的舞女。拥有着能够预知危险的不可思议的能力。因为这种力量的缘故，受到神秘的杀手组织"黑之牙"追捕。因为被艾利乌德搭救，对艾利乌德有着微妙的感情，但是没有表现出来。眼中总是露出悲伤的神色，笼罩着梦幻气息的少女。'
      },
      {
        name: '尼尔斯',
        image: nilsImg,
        class: '演奏家',
        desc: '开朗元气，总是为姐姐着想的少年。流浪期间用自己的笛子和姐姐的舞蹈卖艺来维持生计。和姐姐一样能够预知危险。被神秘组织盯上，所以不信任别人，但为了寻回被抓走的姐姐而向琳求助。'
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
