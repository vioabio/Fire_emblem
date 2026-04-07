<script setup>

</script>

<template>
  <div class="biography-section">
    <h2 class="section-title">人物生平</h2>
    <div class="biography-content">
      <p class="biography-text">
        20世纪80年代中期的日本，
        一群满怀创业热情的年轻人在京都一幢风格古朴的公寓楼中
        建造起一个小小的家用电脑软件工作室，
        凭借着创建之初三台简陋的计算机书写着自己对未来的憧憬和理想。
        当时的他们并不知道等待着自己的将会是怎样曲折艰辛的道路，
        但创业的艰难，是那个年代追求梦想的年轻人都会具有的心理准备。
        其中，自然也包括了刚刚从大学毕业，
        血气方刚的年轻程序师——成广通。
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
