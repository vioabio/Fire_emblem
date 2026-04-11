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
import protagonistImage from '@/assets/img/风花雪月/主角.jpg'
import suditisImage from '@/assets/img/风花雪月/苏谛斯.jpeg'
import edelgardImage from '@/assets/img/风花雪月/艾维尔.png'
import hubertImage from '@/assets/img/风花雪月/修伯特.png'
import dorotheaImage from '@/assets/img/风花雪月/多洛媞雅.png'
import ferdinandImage from '@/assets/img/风花雪月/菲尔迪南特.png'
import bernadettaImage from '@/assets/img/风花雪月/贝尔.png'
import casparImage from '@/assets/img/风花雪月/卡斯帕尔.png'
import petraImage from '@/assets/img/风花雪月/佩托拉.png'
import linhardtImage from '@/assets/img/风花雪月/林哈尔特.png'
import claudeImage from '@/assets/img/风花雪月/金鹿学级/库罗德‧冯‧里刚.webp'
import lorenzImage from '@/assets/img/风花雪月/金鹿学级/洛廉兹‧冯‧古罗斯塔尔.webp'
import hildaImage from '@/assets/img/风花雪月/金鹿学级/希尔妲‧凡伦汀‧哥纳利尔.webp'
import raphaelImage from '@/assets/img/风花雪月/金鹿学级/拉斐尔‧克里斯汀.webp'
import lysitheaImage from '@/assets/img/风花雪月/金鹿学级/莉丝缇亚‧冯‧科迪利亚.webp'
import ignatzImage from '@/assets/img/风花雪月/金鹿学级/伊古纳兹‧维克特.webp'
import MarianneImage from '@/assets/img/风花雪月/金鹿学级/玛莉安奴‧冯‧艾德蒙.webp'
import leonieImage from '@/assets/img/风花雪月/金鹿学级/雷欧妮‧皮聂利.webp'
import dimitriImage from '@/assets/img/风花雪月/青狮子学级/帝弥托利‧亚历山大‧布雷达德.webp'
import dedueImage from '@/assets/img/风花雪月/青狮子学级/杜笃‧莫利纳洛.webp'
import felixImage from '@/assets/img/风花雪月/青狮子学级/菲利克斯‧尤果‧伏拉鲁达力乌斯.webp'
import mercedesImage from '@/assets/img/风花雪月/青狮子学级/梅尔赛德司‧冯‧马尔特利兹.webp'
import asheImage from '@/assets/img/风花雪月/青狮子学级/亚修‧多蓝.webp'
import annetteImage from '@/assets/img/风花雪月/青狮子学级/雅妮特‧方提努‧多米尼克.webp'
import sylvainImage from '@/assets/img/风花雪月/青狮子学级/希尔凡‧乔瑟‧戈迪耶.webp'
import ingridImage from '@/assets/img/风花雪月/青狮子学级/英谷莉特‧布兰多尔‧贾拉提雅.webp'
import rheaImage from '@/assets/img/风花雪月/赛罗司教/蕾雅.webp'
import manuelaImage from '@/assets/img/风花雪月/赛罗司教/玛努艾拉.webp'
import hannemanImage from '@/assets/img/风花雪月/赛罗司教/汉尼曼.webp'
import setethImage from '@/assets/img/风花雪月/赛罗司教/西提司.webp'
import flaynImage from '@/assets/img/风花雪月/赛罗司教/芙莲.webp'
import jeritzaImage from '@/assets/img/风花雪月/赛罗司教/伊艾里扎.webp'
import thomasImage from '@/assets/img/风花雪月/赛罗司教/托马修.webp'
import cyrilImage from '@/assets/img/风花雪月/赛罗司教/锥里尔.webp'
import jeraltImage from '@/assets/img/风花雪月/赛罗司教/杰拉尔特.webp'
import aloisImage from '@/assets/img/风花雪月/赛罗司教/阿罗伊斯‧兰贾尔特.webp'
import catherineImage from '@/assets/img/风花雪月/赛罗司教/卡多莉奴.webp'
import gilbertImage from '@/assets/img/风花雪月/赛罗司教/吉尔伯特・普罗尼斯拉夫.webp'
import shamirImage from '@/assets/img/风花雪月/赛罗司教/萨米亚.webp'
import flameEmperorImage from '@/assets/img/风花雪月/其他势力/炎帝.webp'
import deathKnightImage from '@/assets/img/风花雪月/其他势力/死神骑士.webp'

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
        image: protagonistImage
      },
      {
        name: '苏谛斯',
        cv: ['黑泽朋世'],
        desc: '出现在主角梦境中的存在。自从使用回溯时间的能力拯救主角后，便如同住在主角脑海中一般，能够与主角进行交谈，但除了主角之外没有人察觉到她的存在。她完全不记得自己的身份，虽然外表看起来是一名年幼的少女，但说话的口气却完全是个老婆婆。',
        image: suditisImage
      }
    ]
  },
  {
    id: '黑鹫学级',
    name: '黑鹫学级',
    characters: [
      {
        name: '艾黛尔贾特·冯·弗雷斯贝尔古',
        cv: ['加隈亚衣'],
        desc: '在加尔古·玛库大修道院创办的士官学校中，与王都的贵族子女一起学习的皇族少女。因拥有「黑色种马」之称号的纹章，使得她成为了暗杀的目标。',
        image: edelgardImage
      },
      {
        name: '修伯特·冯·贝斯特拉',
        cv: ['小西克幸'],
        desc: '黑鹫学级的参谋。自幼年时期便侍奉艾维尔，是贝斯特拉侯爵家的嫡子。会不择手段地排除阻碍艾维尔的人。按照艾维尔的说法，他是个「冷酷但通情达理」的人。',
        image: hubertImage
      },
      {
        name: '多洛媞雅·雅尔诺尔德',
        cv: ['长妻树里'],
        desc: '入学前是帝都的人气歌姬。十分尊敬同样出身于米提尔法兰克歌剧团的玛努艾拉前辈。黑鹫学级内只有她是平民出身，虽然有时会感到有些格格不入，但她把任何人都当做是和自己同龄的朋友般平等对待。',
        image: dorotheaImage
      },
      {
        name: '菲尔迪南特·冯·艾吉尔',
        cv: ['坂泰斗'],
        desc: '艾吉尔大公家的长子，以贵族身份为荣，一直和艾维尔竞争皇储之位，性格积极好胜。',
        image: ferdinandImage
      },
      {
        name: '贝尔娜提塔‧冯‧瓦立',
        cv: ['辻步美'],
        desc: '父亲是一勇者，而她却是被幽禁在馆里的深闺千金。不擅长与人相处，害怕与人见面，总是躲在自己的房间里，一被搭话就会感到困惑。为了改变这样的自己，她进入了士官学校。',
        image: bernadettaImage
      },
      {
        name: '卡斯帕尔·冯·贝格',
        cv: ['石川界人'],
        desc: '贝格侯爵家的次子。虽然他作为武人的能力很高，但因为是次子，所以无法继承家业，只能以佣兵的身份在战场上生存。性格自由奔放，讨厌摆架子。',
        image: casparImage
      },
      {
        name: '佩托拉‧马克聂阿利',
        cv: ['石上静香'],
        desc: '从比尔格兰公国作为留学生进入士官学校的少女。拥有出色的刺客才能，被比安岛评为「天才是如何在瞬间杀死三十人」。平时总是精神抖擞，但实际上不擅长读书。',
        image: petraImage
      },
      {
        name: '林哈尔特‧冯‧海弗林格 ',
        cv: ['堀江瞬'],
        desc: '海弗林格伯爵家的嫡子。喜欢在没人经过的教堂睡午觉的悠闲青年。平时很少展现自己的实力，但实际上是全学级首屈一指的厉害人物。',
        image: linhardtImage
      }
    ]
  },
  {
    id: '金鹿学级',
    name: '金鹿学级',
    characters: [
      {
        name: '库罗德·冯·里刚',
        cv: ['丰永利行'],
        desc: '新贵族共和体制「雷斯塔诸侯同盟」的盟主。名门里刚家的嫡子。担任金鹿学级的级长。亲切的笑容和随意的态度令人印象深刻。但他却评价自己有着「极重的疑心」，有着让人不可疏忽的一面。',
        image: claudeImage
      },
      {
        name: '洛廉兹·冯·古罗斯塔尔',
        cv: ['渡边纮'],
        desc: '古罗斯塔尔伯爵家的嫡子。虽然装腔作势的言行引人注目，但其实是个极度认真的人。具有作为名门贵族的荣耀和责任感。总是想要亲近修道院里的女性们，但结果似乎令人不太满意。',
        image: lorenzImage
      },
      {
        name: '希尔妲·凡伦汀·哥纳利尔',
        cv: ['桑原由气'],
        desc: '哥纳利尔公爵家的独生女。被父亲和哥哥溺爱着长大，所以总是想偷懒，也很擅长对周围的人撒娇。无忧无虑，言行轻率，非常引人注目，被评价为典型的「贵族小姐」。喜欢打扮和华丽的东西。',
        image: hildaImage
      },
      {
        name: '拉斐尔·克里斯汀',
        cv: ['大泊贵挥'],
        desc: '雷斯塔商人家庭的儿子。由于父母因意外事故去世而饱尝艰辛，有两个妹妹。本人是个乐天派，每天除了惦记食堂的菜单，就是为了成为一名优秀的骑士而努力「锻炼肌肉」，但好像对学习没什么兴趣。',
        image: raphaelImage
      },
      {
        name: '莉丝缇亚·冯·科迪利亚',
        cv: ['悠木碧'],
        desc: '科迪利亚伯爵家的长女。年仅15岁，在今年入学的学生之中是年纪最小的。擅长魔法，是个早熟的天才，却毫不懈怠，也不会因自己所拥有的才能而骄傲。也有孩子气的一面（比如讨厌妖怪和被当成小孩）。',
        image: lysitheaImage
      },
      {
        name: '伊古纳兹·维克特',
        cv: ['矢野奖吾'],
        desc: '雷斯塔诸侯同盟领地一位商人的次子。由于家业由兄长继承，只好遵循父母的希望以成为骑士为目标进入士官学校学习。但心里似乎另有想法。喜爱美丽的大自然和艺术品，心地善良。',
        image: ignatzImage
      },
      {
        name: '玛莉安奴·冯·艾德蒙',
        cv: ['秦佐和子'],
        desc: '艾德蒙边境伯爵的养女。由于极少与他人交际，许多人甚至连她的声音都没听过。可却会对最喜爱的鸟类和动物们敞开心扉，经常和动物们说话。信仰坚定，每天都不忘向女神祷告。',
        image: MarianneImage
      },
      {
        name: '雷欧妮·皮聂利',
        cv: ['野川樱'],
        desc: '同盟领地萨温村一名猎人的女儿。由于想要成为能够赚大钱的佣兵，从村子里借钱进入了士官学校。为了偿还村民们的恩情和借款，每天都勤于锻炼且生活节俭。崇拜杰拉尔特，把他当作是自己的师父，自称是其大弟子。',
        image: leonieImage
      }
    ]
  },
  {
    id: '青狮子学级',
    name: '青狮子学级',
    characters: [
      {
        name: '帝弥托利·亚历山大·布雷达德',
        cv: ['石川界人'],
        desc: '崇高的骑士之国「法嘉斯神圣王国」的下任国王。青狮子学级的级长。他是一位充分体现出骑士道精神的诚实青年。但有时在开朗的外表下也会露出一丝阴霾。',
        image: dimitriImage
      },
      {
        name: '杜笃·莫利纳洛',
        cv: ['高桥英则'],
        desc: '出身于王国西北部达斯卡地区的平民。帝弥托利的侍从。由于帝弥托利对自己有恩而决心即便牺牲自己也要保护他。表情严肃而又沉默寡言，因此时常遭到误解。实际上是一位温和、好脾气的青年。',
        image: dedueImage
      },
      {
        name: '菲利克斯·尤果·伏拉鲁达力乌斯',
        cv: ['帆世雄一'],
        desc: '伏拉鲁达力乌斯公爵家的嫡子。把青梅竹马的帝弥托利叫做「猪」。总是独来独往，一副爱挖苦人的样子。一心只想着磨练自己的剑术，见到强者就想较量一番。',
        image: felixImage
      },
      {
        name: '梅尔赛德司·冯·马尔特利兹',
        cv: ['花守由美里'],
        desc: '温柔的女性。会仔细留心周围的情况，积极帮助有困难的人。虽为原帝国贵族，但一直以平民身份在王国生活。曾在王都的魔道学院就读。自称比其他学生「稍微年长」一些。',
        image: mercedesImage
      },
      {
        name: '亚修·多蓝',
        cv: ['井上雄贵'],
        desc: '王国内盖斯巴尔领地城主罗纳特公卿的养子。对于将平民家庭出身的自己视如己出，还送自己到士官学校学习的罗纳特公卿怀抱着深深的感谢和尊敬之情。为了成为和罗纳特公卿一样优秀的大人而努力学习、锻炼，是个踏实认真的少年。',
        image: asheImage
      },
      {
        name: '雅妮特·方提努·多米尼克',
        cv: ['田中贵子'],
        desc: '多米尼克男爵的侄女。以优异的成绩毕业于王都的魔道学院。虽然个性开朗努力，但有时也会因迷糊而白忙一场。与梅尔赛德司从魔道学院时代开始关系就十分亲密，彼此之间互称「梅戚」和「雅妮」。',
        image: annetteImage
      },
      {
        name: '希尔凡·乔瑟·戈迪耶',
        cv: ['古川慎'],
        desc: '戈迪耶边境伯爵的嫡子。很会为同伴着想，作为学级里的可靠大哥受到周围人的仰慕。但是极度喜好女色，为此惹出不少麻烦。有一位因没有纹章而被废除嫡子权利的哥哥。',
        image: sylvainImage
      },
      {
        name: '英谷莉特·布兰多尔·贾拉提雅',
        cv: ['石见舞菜香'],
        desc: '贾拉提雅伯爵家的千金。与帝弥托利、菲利克斯和希尔凡是儿时玩伴。由于对骑士的憧憬和与生俱来认真的性格，帝弥托利称她已经「比某些半吊子的骑士更具骑士风范」。但是在美味的食物面前会变得忘我。',
        image: ingridImage
      }
    ]
  },
  {
    id: '赛罗司教',
    name: '赛罗司教',
    characters: [
      {
        name: '蕾雅',
        cv: ['井上喜久子'],
        desc: '身为赛罗司圣教会最高领导人的大司教。从杰拉尔特仍在骑士团时就已经是大司教了。高度评价主角的资质，并邀请其进入士官学校。如同慈母一般平和待人，但也有著会无情制裁向教会刀刃相向之人的严厉一面。',
        image: rheaImage
      },
      {
        name: '玛努艾拉',
        cv: ['小岛幸子'],
        desc: '曾是在帝都的米特尔弗兰克歌剧团达到顶峰的歌姬。现作为教师兼医生隶属于士官学校。学校里的人经常见到她感叹自己无法邂逅命运中的男性。虽然有些大大咧咧的地方，但很会照顾人，对作为新人教师的主角也十分亲切。',
        image: manuelaImage
      },
      {
        name: '汉尼曼',
        cv: ['滨田贤二'],
        desc: '研究女神赐予力量"纹章"的纹章学者，也是士官学校的老师。平常是个很冷静的人，但一到和纹章相关的事情，就会变得专注忘我。尤其是对主角所拥有的神秘纹章。',
        image: hannemanImage
      },
      {
        name: '西提司',
        cv: ['子安武人'],
        desc: '赛罗司圣教会的主教助理。十分重视秩序和规律，对于将主角特招进士官学校这件事，虽然表示尊重主教蕾雅的决定，但一直深怀戒备。非常溺爱他的妹妹芙莲，时刻担心她的安全，但有些保护过度。',
        image: setethImage
      },
      {
        name: '芙莲',
        cv: ['大野柚布子'],
        desc: '主教助理西提司的妹妹。虽然在修道院生活，但不是士官学校的学生。她性格温和，对所有人都没有戒心，但好奇心强，经常做出古怪的举动，时常让哥哥西提司担心。',
        image: flaynImage
      },
      {
        name: '伊艾里扎',
        cv: ['伊丸冈笃'],
        desc: '士官学校的老师。他作为剑术老师，主要负责训练学生。不喜欢和别人有过多的牵扯，对随意搭话的人会毫不犹豫地拒绝。虽说是个神秘的人，但是他在训练学生方面的确很有一手。',
        image: jeritzaImage
      },
      {
        name: '托马修',
        cv: ['福松进纱'],
        desc: '男性角色，为加尔古·玛库大修道院的图书馆工作了40多年。非常了解馆内的藏书，由于在大修道院生活了很久，对于院内的事情也了若指掌，还是个虔诚的赛罗司教教徒。',
        image: thomasImage
      },
      {
        name: '锥里尔',
        cv: ['河西健吾'],
        desc: '是在主教蕾雅身边担任随从的年轻男孩。蕾雅把他从战争孤儿的困境中救出，锥里尔对此非常感激。在修道院工作时非常严肃，有时甚至给人一种性格冷漠的印象。为了能够帮上蕾雅的忙，锥里尔向萨米亚学习使用弓箭的技术。',
        image: cyrilImage
      },
      {
        name: '杰拉尔特',
        cv: ['大冢明夫'],
        desc: '主角的父亲，曾在赛罗司骑士团中担任团长，是一位被誉为历代最强骑士的身经百战的战士。离开骑士团后，率领著佣兵团踏上了一段旅程。妻子已经过世。他曾从盗贼手中救出了士官学校的学生们，并以此为转机再度回到了骑士团中。',
        image: jeraltImage
      },
      {
        name: '阿罗伊斯·兰贾尔特',
        cv: ['坂卷学'],
        desc: '赛罗司骑士团的骑士。非常敬爱杰拉尔特，是杰拉尔特担任骑士团团长时期的部下。向蕾雅推荐了从盗贼手中救下了学生的主角。性格开朗直爽。喜欢开玩笑，尽管并不怎么好笑。',
        image: aloisImage
      },
      {
        name: '卡多莉奴',
        cv: ['松浦知惠'],
        desc: '加尔古·玛库士官学校的毕业生，也是赛罗司骑士团的骑士。能够熟练使用被称为"英雄的遗产"的传说中的武器之一："雷霆"，是一名强悍的剑客，以骑士身份发誓为大司教蕾雅效忠。',
        image: catherineImage
      },
      {
        name: '吉尔伯特·普罗尼斯拉夫',
        cv: ['小上裕通'],
        desc: '王国出身的骑士，属于赛罗司骑士团。吉尔伯特信仰虔诚，是个严肃而有礼貌的人。他经常面无表情，也很少谈及自己的事，因此很难了解他，不过他看起来很喜欢钓鱼和烹饪。',
        image: gilbertImage
      },
      {
        name: '萨米亚',
        cv: ['渡边优里奈'],
        desc: '是赛罗司骑士团的弓箭高手。曾是一名雇佣兵，为了回报蕾雅过去对她的恩惠，成了蕾雅的骑士。萨米亚是骑士团中少有的非赛罗司教徒，只对蕾雅宣誓效忠。',
        image: shamirImage
      }
    ]
  },
  {
    id: '其他势力',
    name: '其他势力',
    characters: [
      {
        name: '炎帝',
        cv: [],
        desc: '在大修道院的周围暗中活动的谜一样的人物。虽然看不懂面具下隐藏的感情，但明显是对教会不友善。为了某些目的而指使盗贼偷袭营地里的学生们，但因为主角的介入而失败了。从那时起，对主角一面防范一面产生兴趣。',
        image: flameEmperorImage
      },
      {
        name: '死神骑士',
        cv: [],
        desc: '穿戴著如死神般的巨大镰刀和不祥的盔甲的骑士，每晚把人们拐走…加尔古·玛库的街上，随着人们人云亦云而被当真的"死神骑士"的传闻。总有一天不再是谎言，变成真实存在的威胁出现在主角们的面前。',
        image: deathKnightImage
      }
    ]
  },
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