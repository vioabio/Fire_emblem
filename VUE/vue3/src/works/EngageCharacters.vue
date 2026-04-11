<!-- ENGAGE - 登场人物 -->
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
import lyerImage from '../assets/img/ENGAGE/琉尔.jpg'
import fantImage from '../assets/img/ENGAGE/凡德雷.jpg'
import korynImage from '../assets/img/ENGAGE/柯岚.jpg'
import farrantImage from '../assets/img/ENGAGE/芙岚.jpg'
import alfredImage from '../assets/img/ENGAGE/艾缇耶.jpg'
import etiqueImage from '../assets/img/ENGAGE/艾缇耶.jpg'
import buchuronImage from '../assets/img/ENGAGE/布修隆.jpg'
import cillinyImage from '../assets/img/ENGAGE/锡莉奴.jpg'
import louisImage from '../assets/img/ENGAGE/路易.jpg'
import cloweImage from '../assets/img/ENGAGE/克罗艾.jpg'
import jeanImage from '../assets/img/ENGAGE/贾恩.jpg'
import stlukeImage from '../assets/img/ENGAGE/史塔卢克.jpg'
import hitrinImage from '../assets/img/ENGAGE/希特莉妮卡.jpg'
import lapisImage from '../assets/img/ENGAGE/拉琵丝.jpg'
import diarmuidImage from '../assets/img/ENGAGE/帝亚曼德.jpg'
import amberImage from '../assets/img/ENGAGE/安巴.jpg'
import jadeImage from '../assets/img/ENGAGE/洁德.jpg'
import yunakaImage from '../assets/img/ENGAGE/尤娜卡.jpg'
import ivyImage from '../assets/img/ENGAGE/艾比.jpg'
import hortensiaImage from '../assets/img/ENGAGE/奥尔坦希亚.jpg'
import seadallImage from '../assets/img/ENGAGE/花月.jpg'
import geraldImage from '../assets/img/ENGAGE/杰尔科巴.jpg'

const characterGroups = ref([
  {
    id: 'protagonist',
    name: '主角',
    characters: [
      {
        name: '琉尔',
        image: lyerImage,
        class: '神龙',
        desc: '本作主角，沉睡了千年后苏醒的神龙。被动与前作相比涅槃提供的三点伤害变成了真实伤害，使得低伤害角色在前期能够依靠主角强行破防，吃不吃资源都能在队伍构筑中发挥重要作用，是通关流程不可或缺的一部分。'
      }
    ]
  },
  {
    id: 'main-ally',
    name: '主要同伴',
    characters: [
      {
        name: '凡德雷',
        image: fantImage,
        class: '保姆骑士',
        desc: '标准保姆骑士定位，前期为队伍垫垫刀抗下伤害，后期退休享福即可。'
      },
      {
        name: '柯岚',
        image: korynImage,
        class: '法师/物理',
        desc: '物理成长很优秀但是初始是法师容易养废，依赖转职证，好在可塑性不错，能够在队伍中发挥一定作用。'
      },
      {
        name: '芙岚',
        image: farrantImage,
        class: '附魔师',
        desc: '附魔师简直是为小红量身打造的职业，带上露琪娜队伍的反手强度能提升一个档次。没有dlc的情况下，狼骑/皇骑也能成为队伍内优秀的辅助。'
      },
      {
        name: '阿尔弗雷德',
        image: alfredImage,
        class: 'Brodian王子',
        desc: '阿弗入队较早，所以有充足的培养空间，hp（65）和幸运（40）成长很优秀，还有金莲的伤害减半，使阿尔弗雷德的伤害和耐久双端都很出色。'
      },
      {
        name: '艾缇耶',
        image: etiqueImage,
        class: '弓手',
        desc: '本作普遍肌无力，所以艾缇耶相比其他弓手有天然优势，和琳的相性也非常好。缺点是中后期很依赖琳和妙尔葛雷的提速。在通关流程中非常好用。'
      }
    ]
  },
  {
    id: 'second-ally',
    name: '次要同伴',
    characters: [
      {
        name: '布修隆',
        image: buchuronImage,
        class: '角色',
        desc: '前期属性较差，有效成长率很高，需要刻意培养。力量短板，要吃一定的资源，养起来之后通关流程内很舒服。'
      },
      {
        name: '锡莉奴',
        image: cillinyImage,
        class: '角色',
        desc: '有dlc还不错，没dlc就是力魔速三渣，随机成长下容易长歪，对通关流程不太友好。'
      },
      {
        name: '路易',
        image: louisImage,
        class: '神军',
        desc: '前期的神，但是十一章后由于没有西格尔特，不转勇骑在机动性上很吃亏，而且速度幸运都不高，抗线有一定的风险，竞争不过玛德琳。'
      },
      {
        name: '克罗艾',
        image: cloweImage,
        class: '角色',
        desc: '综合属性成长很高，尤其是速度是独一档的55，但是力魔成长有点平均，会导致中期力度不足。好在玩法很多，入队也比较早，穷养富养都能玩的起来，是很推荐培养的角色。'
      },
      {
        name: '贾恩',
        image: jeanImage,
        class: '医生',
        desc: '只能说你尽到了做医生的本分。'
      },
      {
        name: '史塔卢克',
        image: stlukeImage,
        class: '角色',
        desc: '史塔卢克是一个后期很强的角色，高频率的月光让史塔卢克的正手输出非常夸张，但是游戏流程中期他的发挥实在过于蹩脚，不是很推荐没有dlc的玩家全程带他参战。推荐有dlc玩家在22章后培养。'
      },
      {
        name: '希特莉妮卡',
        image: hitrinImage,
        class: '角色',
        desc: '高魔力，技巧偏低，个人特技比较白板。'
      },
      {
        name: '拉琵丝',
        image: lapisImage,
        class: '角色',
        desc: '平平无奇农家女，没有当c位的命，只能勉为其难当我老婆了。'
      },
      {
        name: '帝亚曼德',
        image: diarmuidImage,
        class: '角色',
        desc: '高hp高体格，中高力速；神级职业特技太阳；实用被动。'
      },
      {
        name: '安巴',
        image: amberImage,
        class: '物理角色',
        desc: '非常强的物理角色，主流玩法是中期勇士过渡，最终转枪斧飞龙，技能通常继承枪刚/速吸/再移动，助跑和接二连三等技能也可以考虑继承，纹章士给个琳就能大s四方，有dlc也可以考虑带卡美拉补魔防，不需要大量消耗资源也能c，不脑抽转魔法职业怎么玩都很强。'
      },
      {
        name: '洁德',
        image: jadeImage,
        class: '斧角色',
        desc: '斧圣骑/斧将军/斧勇骑，要玩的话纹章士可以考虑带米妈也许还能有点发挥。相比另一位波聂占个容易出高级料理，面板和综合耐久也比洁德好。有无dlc强度都非常有限，不推荐一周目或超难培养该角色。'
      },
      {
        name: '尤娜卡',
        image: yunakaImage,
        class: '角色',
        desc: '优秀的成长率面板，入队即上级职业，前期偷脆皮伤害很高，超强被动。'
      },
      {
        name: '艾比',
        image: ivyImage,
        class: '飞法',
        desc: '飞法体格上限高，魔力补正高，能用B杖（相比格里芬）不吃资源。'
      },
      {
        name: '奥尔坦希亚',
        image: hortensiaImage,
        class: '飞法飞杖',
        desc: '治疗范围+1，高魔抗。'
      },
      {
        name: '花月',
        image: seadallImage,
        class: '角色',
        desc: '超高的物理成长率和基础属性，实用的个人特技。'
      },
      {
        name: '杰尔科巴',
        image: geraldImage,
        class: '角色',
        desc: 'hp力量较高，被动降命中，体格较高，初始sp高。'
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
