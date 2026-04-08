<template>
  <div class="character-display-page">
    <!-- 主内容区域 -->
    <main class="main-content">
      <h1>游戏登场人物</h1>
      <!-- 循环渲染各个势力分组 -->
      <div 
        v-for="group in characterGroups" 
        :key="group.id" 
        :id="group.id" 
        class="character-group"
      >
        <h2 class="group-title">{{ group.name }}</h2>
        <div 
          v-for="char in group.characters" 
          :key="char.name" 
          class="character-card"
        >
          <!-- 左侧角色图片区域 -->
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

          <!-- 右侧角色介绍区域 -->
          <div class="char-info">
            <h3 class="char-name">
              {{ char.name }}
              <span class="char-cv">CV：{{ char.cv.join('、') }}</span>
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

// 角色数据：你可以在这里新增/修改角色、扩展势力
const characterGroups = ref([
  {
    id: '主角团',
    name: '主角团',
    characters: [
      {
        name: '男女主角',
        cv: ['小林裕介', '伊藤静'],
        desc: '曾经待在其父杰拉尔特所率领的佣兵团中，因为救出了被盗贼袭击的士官学校学生，其能力得到赏识，遂被邀请至加尔古·玛库大修道院担任教师。游戏开始时可以选择性别，性别不会对能力值产生影响。',
        image: 'https://placehold.co/280/350?text=男女主角'
      },
      {
        name: '苏谛斯',
        cv: ['黑泽朋世'],
        desc: '出现在主角梦境中的存在。自从使用回溯时间的能力拯救主角后，便如同住在主角脑海中一般，能够与主角进行交谈，但除了主角之外没有人察觉到她的存在。她完全不记得自己的身份，虽然外表看起来是一名年幼的少女，但说话的口气却完全是个老婆婆。',
        image: 'https://placehold.co/280/400?text=苏谛斯'
      }
    ]
  },
  {
    id: '黑鹫学级',
    name: '黑鹫学级',
    characters: [
      {
        name: '修伯特·冯·贝斯特拉',
        cv: ['小西克幸'],
        desc: '黑鹫学级的参谋。自幼年时期便侍奉艾黛尔贾特的贝斯特拉侯爵家的嫡子。会不择手段地排除阻碍艾黛尔贾特的人。按照艾黛尔贾特的说法，他是个「冷酷但通情达理」的人。',
        image: 'https://placehold.co/280/350?text=修伯特'
      },
      {
        name: '多洛缇雅·雅尔诺尔德',
        cv: ['长妻树里'],
        desc: '入学前是帝都的人气歌姬。十分尊敬同样出身于米提尔法兰克歌剧团的玛努艾拉前辈。黑鹫学级内只有她是平民出身，虽然有时会感到有些格格不入，但她把任何人都当做是和自己同龄的朋友般平等对待。',
        image: 'https://placehold.co/280/350?text=多洛缇雅'
      },
      {
        name: '菲尔迪南特·冯·艾吉尔',
        cv: ['坂泰斗'],
        desc: '艾吉尔大公家的长子，以贵族身份为荣，一直和艾黛尔贾特竞争皇储之位，性格积极好胜。',
        image: 'https://placehold.co/280/350?text=菲尔迪南特'
      }
    ]
  },
  { id: '金鹿学级', name: '金鹿学级', characters: [] },
  { id: '青狮子学级', name: '青狮子学级', characters: [] },
  { id: '赛罗司教', name: '赛罗司教', characters: [] },
  { id: '其他势力', name: '其他势力', characters: [] },
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

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .character-card {
    flex-direction: column;
  }
  .char-image-wrapper {
    width: 100%;
  }
}
</style>