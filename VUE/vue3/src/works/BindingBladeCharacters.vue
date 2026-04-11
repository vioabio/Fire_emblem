<!-- 封印之剑 - 登场人物 -->
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
import royImg from '../assets/img/封印之剑/罗伊.webp'
import lilinaImg from '../assets/img/封印之剑/莉莉娜.webp'
import marcusImg from '../assets/img/封印之剑/马库斯.webp'
import marinusImg from '../assets/img/封印之剑/马利纳斯.webp'
import waltImg from '../assets/img/封印之剑/沃尔特.webp'
import alenImg from '../assets/img/封印之剑/亚伦.webp'
import lanceImg from '../assets/img/封印之剑/兰斯.webp'

const characterGroups = ref([
  {
    id: 'protagonist',
    name: '主要角色',
    characters: [
      {
        name: '罗伊',
        image: royImg,
        class: '领主',
        desc: '艾雷布大陆南方利西亚诸侯之一，费雷侯家的继承人。在贝伦王国入侵之际，代替生病的父亲——费雷侯艾利乌德领军作战。虽然还不是很成熟，但有着很大的器量，年纪轻轻就已经有着优秀的判断力和非凡的统率力。'
      },
      {
        name: '莉莉娜',
        image: lilinaImg,
        class: '利西亚同盟盟主',
        desc: '利西亚同盟盟主，奥斯迪亚侯的女儿，与罗伊青梅竹马。其父赫克托耳是罗伊父亲艾利乌德最好的朋友和战友，两家从很久以前就是世交。有着天才般的魔道才能，师从艾特鲁里亚的魔道军将塞茜莉娅。性格开朗，是个乐于助人的少女。'
      }
    ]
  },
  {
    id: 'ferre',
    name: '费雷家臣',
    characters: [
      {
        name: '马库斯',
        image: marcusImg,
        class: '重甲骑士',
        desc: '从罗伊祖父那代费雷侯开始，侍奉了费雷三代的老骑士。费雷家的重臣，作为罗伊的剑术老师支持着年少的领主。虽然看上去有些顽固难以亲近，却是一位忠于主君、深谋远虑、令人信赖的骑士。'
      },
      {
        name: '马利纳斯',
        image: marinusImg,
        class: '财务官',
        desc: '曾经做过行商人，后来侍奉于费雷家，成为费雷的财务官。在管理物资方面十分有能力，在军队中担当不可或缺的运输队角色。虽然有些胆小懦弱，但知识渊博且忠心耿耿。'
      },
      {
        name: '沃尔特',
        image: waltImg,
        class: '弓箭手',
        desc: '费雷的少年弓箭手。罗伊乳母的儿子，罗伊的乳兄弟。和罗伊像亲兄弟般一起长大，但并不骄纵，忠诚又讲义气。对前辈的骑士们十分仰慕，为了成为一流的弓手和优秀的家臣而努力着。'
      },
      {
        name: '亚伦',
        image: alenImg,
        class: '圣骑士',
        desc: '费雷的年轻骑士。家族世代侍奉费雷家，与费雷家关系紧密，甚至曾有费雷家的女子下嫁。性格耿直坦率，十分勇猛，有成为优秀骑士的天赋，被人们寄予厚望。'
      },
      {
        name: '兰斯',
        image: lanceImg,
        class: '天马骑士',
        desc: '费雷的年轻骑士。曾经在外流浪，后来被费雷侯艾利乌德收留，对费雷家和艾利乌德十分忠诚。喜欢读书，冷静且视野广博，深受主君和旁人的信赖。'
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
