<script setup>

</script>

<template>
  <div class="biography-section">
    <h2 class="section-title">人物生平</h2>
    <div class="biography-content">
      <!-- 早年与创业 -->
      <h3 class="period-title">早年与创业</h3>
      <p class="biography-text">
        20世纪80年代中期的日本，一群满怀创业热情的年轻人在京都一幢风格古朴的公寓楼中建造起一个小小的家用电脑软件工作室，凭借着创建之初三台简陋的计算机书写着自己对未来的憧憬和理想。当时的他们并不知道等待着自己的将会是怎样曲折艰辛的道路，但创业的艰难，是那个年代追求梦想的年轻人都会具有的心理准备。其中，自然也包括了刚刚从大学毕业，血气方刚的年轻程序师——成广通。
      </p>
      <p class="biography-text">
        出生于日本冈山县的成广通，因家境原因放弃教师梦想，转而学习电子工程。大学期间受电影戏剧启发，洞察信息媒体的商业潜力，毕业后即创立自由工作室。1986年，工作室被作家系井重里发掘并推荐给任天堂，随后由横井军平考察并收编为任天堂第二方企业 Intelligent Systems（IS），专注欧美向游戏开发。
      </p>

      <!-- 初露锋芒：《WARS》系列 -->
      <h3 class="period-title">初露锋芒：《WARS》系列</h3>
      <p class="biography-text">
        1987年，横井军平将新型战略游戏模版开发任务交给IS。年仅24岁的成广通带领小组仅用四个月完成半年任务，其高效与才华获横井军平高度认可。1988年，《WARS》在FC发售，以创新系统与摇滚风格BGM获好评，系列交由成广通全权负责。
      </p>

      <!-- 平台抉择与牺牲 -->
      <h3 class="period-title">平台抉择与牺牲</h3>
      <p class="biography-text">
        1988年，为配合任天堂便携主机战略，成广通主动将自己负责的《WARS》系列移至GB平台，将家用机机会让给加贺昭三的《火焰之纹章》。这一决定使《火焰之纹章》借SFC势头成名，而《Gameboy Wars》则因平台与宣传原因沉寂多年，但其中诸多设计成为后世战略游戏典范。
      </p>

      <!-- 深度参与《火焰之纹章》 -->
      <h3 class="period-title">深度参与《火焰之纹章》</h3>
      <p class="biography-text">
        1990年后，成广通加入《火焰之纹章》开发团队，负责系统设计。在《纹章之谜》（1993）中，他提出整合前作内容的建议，并主导构建了"简化显性数据、强化隐性特征"的平衡系统，获《Fami通》36分白金评价，成为系列核心设计支柱。
      </p>

      <!-- 内部协调与危机处理 -->
      <h3 class="period-title">内部协调与危机处理</h3>
      <p class="biography-text">
        1994–1996年，IS内部矛盾激化，成广通扮演协调者角色，平衡各开发组关系。1999年，加贺昭三因与任天堂理念不合决定退社，并邀请成广通一同离开，但成广通婉拒，选择留在IS。
      </p>

      <!-- 挽救系列与转向掌机 -->
      <h3 class="period-title">挽救系列与转向掌机</h3>
      <p class="biography-text">
        加贺昭三离开后，《火焰之纹章》面临存续危机。成广通联合西村建太郎直接面陈任天堂社长山内溥，以精准的市场分析与情感恳求打动后者，获得支持将系列转向掌机平台继续开发，并推动《封印之剑》等后续作品问世。
      </p>

      <!-- 风格与影响 -->
      <h3 class="period-title">风格与影响</h3>
      <blockquote class="biography-quote">
        成广通以冷静务实、善于协调闻名，兼具开发者才华与经营者眼光。他主导的《WARS》系列在欧美市场取得突破，为任天堂开拓海外战略游戏市场奠定基础。其"在平衡中求持久"的处世哲学，使其在竞争激烈的游戏业界长期稳步发展。
      </blockquote>
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

.period-title {
  font-size: 18px;
  color: #333;
  margin-top: 25px;
  margin-bottom: 15px;
  padding-left: 12px;
  border-left: 4px solid #667eea;
  font-weight: 600;
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
