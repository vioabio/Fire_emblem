<script setup>
import Vestaria from '@/assets/img/vestaria.jpg'
import LucaVillage from '@/assets/img/Vestaria Saga外传：卢卡村的勇者.webp'
import VestariaSaga from '@/assets/img/VestariaSaga：亡国骑士与星辰巫女.webp'

</script>

<template>
  <div class="biography-section">
    <h2 class="section-title">人物生平</h2>
    <div class="biography-content">
      <p class="biography-text">
        关于加贺昭三我们知之甚少，他的出生时间、教育情况等等都只有一个大概信息，甚至我们很难找到一张他的照片。但他在加入Intelligent Systems后所创造《火焰纹章》系列，其宏伟庞大的故事，个性十足的角色，具有特色的游戏系统却被我们所深深牢记。1999年他离开了任天堂所控制的Intelligent Systems并创立Tirnanog，开发《泪指轮物语》，之后又开发了泪指轮物语的第二作《贝尔维克物语》，两者在故事设定和系统创新方面都值得称道，然而因为和任天堂公司的官司，加贺昭三也在输了官司之后退隐，之后再无消息。
      </p>

      <div class="image-container">
        <img :src="Vestaria" alt="维斯塔利亚传说" class="biography-image" />
        <p class="image-caption">图1</p>
      </div>

      <blockquote class="biography-quote">
        "游戏制作实在是非常严酷而辛苦的工作，而且不这样是做不出好作品的。需要旺盛的热情和充沛的体力，当我意识到这件事时已经50岁了，无力继续。我已决心引退。迄今为止的作品全都是我的骄傲，也是我的人生。我对游戏的热爱，想必到死也不会变吧。"——加贺昭三
      </blockquote>

      <p class="biography-text">
        在加贺退出《火焰纹章》制作组后，火纹系列经多次改革逐渐成为全球性热门的游戏，其销量和评分也远远高于加贺时期《火焰纹章》，但许多玩家依然觉得，加贺创作的火纹和后来的有许多韵味上的不同，希望加贺回归的诉求也一直没有停止。
      </p>

      <p class="biography-text">
        距离加贺昭三最后一款游戏，PS2《泪指轮传说2：贝尔维克物语》发售已经过了10年的今天，加贺昭三在其个人博客上宣布他正在利用同人游戏制作软件《SRPG Studio》开始了新的创作，并在网上招募画师、素材师等。游戏做成后也会以免费游戏的形式发表。这个消息如同重磅炸弹一般在SRPG届引起了一片讨论热潮，暌违10年的加贺竟然又开始做游戏了。
      </p>

      <p class="biography-text">
        现在是一个"精神续作"的时代，许多知名制作人都因为种种原因与原公司分道扬镳，其代表作也成为其他制作人的产品，有的甚至永远成为了历史。《洛克人》《恶魔城》的各种精神续作相继公开后，比稻船敬二、五十岚孝司低调得多的加贺昭三也加入了"精神续作"行列。如图2所示为1992年意气风发地接受游戏媒体采访的金牌制作人加贺昭三，如今已有近30年未曾公开露面，此前甚至有传言他早已去世。
      </p>

      <p class="biography-text">
        不同的是，《洛克人》和《恶魔城》某种程度上已经鲜有正统新作发表，版权方也是将其打入非重点品牌，但《火焰纹章》的正统续作《火焰纹章if》如今正在如火如荼的宣传造势中。加贺昭三作为《火焰纹章》的创始人，在这个节骨眼突然公开自己的独立游戏创作计划，显得非常耐人寻味。
      </p>

      <p class="biography-text">
        他在博客里说：制作团队靠非常有限的时间来做这款游戏，所以即使他本人也不知道何时能完工。但是一旦游戏完成，加贺会公布在个人博客中，希望喜欢复古游戏的玩家敬请期待。这个项目基本上就是加贺和朋友们的创作，目前共10个人，缺少一名角色设计师，最好是精灵设计师，这是项目组最薄弱的地方，所以希望有兴趣的玩家可以加入其中。
      </p>

      <p class="biography-text">
        不管怎样，蛰伏许久的老游戏人从职场失意的阴影中逐渐走出，利用独立游戏、同人游戏的方式回到自己热爱的事业，虽然游戏已经不可能继续叫那个熟悉的名字，但游戏的精神是在传承的，也是对一直以来的爱好者一个努力的回馈。
      </p>

      <div class="image-container">
        <img :src="LucaVillage" alt="卢卡村的勇者" class="biography-image" />
        <p class="image-caption">卢卡村的勇者</p>
      </div>

      <p class="biography-text">
        2016年8月23日，加贺昭三在新作PC免费独立游戏《Vestaria Saga：亡国骑士与星辰巫女》的官方网站上表明了将于2016年9月21日公开游戏的消息，该游戏是基于去年5月发布的一个谁都可以简单使用的简陋引擎制作的。加贺昭三表示，本作是基于同人企划、使用市面上的游戏制作软件SRPG Studio进行打造的完全原创作品，是一款兴趣使然的免费PC游戏。可能与商业级的产品有一定差距，不过我们从一开始就没有夹杂任何商业目的。年近七旬的他或许也已经没有充沛的体力与精力去制作一款商业游戏了，单这款游戏各种素材也是七拼八凑，甚至人物肖像大都沿用旧作素材的方式，无比艰难地将新作推到玩家面前。加贺真正决定复出的原因所在，或许很简单，或许很复杂，但对于一个真正爱游戏的人来说，依然能够为自己的梦做些事情，就足够了。
      </p>

      <p class="biography-text">
        2019年3月27日，加贺昭三在官网上发布了《Vestaria Saga外传：卢卡村的勇者》、《Vestaria Saga外传：席鲁巴比尔西的圣剑》两款仍然免费的作品。
      </p>

      <div class="image-container">
        <img :src="VestariaSaga" alt="亡国骑士与星辰巫女" class="biography-image" />
        <p class="image-caption">亡国骑士与星辰巫女</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.biography-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-top: 30px;
  margin-bottom: 30px;
}

.section-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid #667eea;
}

.biography-content {
  line-height: 1.8;
}

.biography-text {
  font-size: 15px;
  color: #333;
  margin-bottom: 20px;
  text-align: justify;
  text-indent: 2em;
}

.image-container {
  margin: 25px 0;
  text-align: center;
}

.biography-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.image-caption {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  font-style: italic;
}

.biography-quote {
  font-size: 15px;
  color: #555;
  font-style: italic;
  margin: 25px 0;
  padding: 20px;
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  line-height: 1.8;
  border-radius: 0 8px 8px 0;
}

@media (max-width: 768px) {
  .biography-text {
    font-size: 14px;
  }

  .biography-quote {
    font-size: 14px;
    padding: 15px;
  }
}
</style>
