<script setup>
import Vestaria from '@/assets/img/vestaria.jpg'

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
    </div>
  </div>
</template>

<style scoped>
.biography-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
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
