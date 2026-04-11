<!-- 风花雪月 - 物品道具 -->
<template>
  <div class="items-guide">
    <h2 class="section-title">物品与消耗品列表</h2>
    <div class="items-intro">
      <p>《火焰之纹章：风花雪月》游戏中包含斧、弓、剑、枪、手五种武器类型。除克劳德拥有2把遗产武器外，十杰人手一把。阿卡奈亚五神器为墨丘利剑、古拉迪乌斯、奥特克雷勒、帕提亚、龙爪（原本三神器+奥特克雷勒+新的龙爪）。</p>
    </div>
    <div class="items-table-wrapper">
      <table class="items-table">
        <thead>
          <tr>
            <th class="col-name">名称</th>
            <th class="col-durability">耐久</th>
            <th class="col-desc">描述</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td class="col-name">{{ item.name }}</td>
            <td class="col-durability">{{ item.durability }}</td>
            <td class="col-desc">{{ item.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const items = [
  { name: '伤药', durability: '3', desc: '使用后HP回复10。' },
  { name: '混合药', durability: '3', desc: '使用后HP回复20。' },
  { name: '特效药', durability: '3', desc: '使用后HP回复99。' },
  { name: '初级考试准考证', durability: '1', desc: '可参加初级职业的资格考试。' },
  { name: '中级考试准考证', durability: '1', desc: '可参加中级职业的资格考试。' },
  { name: '上级考试准考证', durability: '1', desc: '可参加上级职业的资格考试。' },
  { name: '最上级考试准考证', durability: '1', desc: '可参加最上级职业的资格考试。' },
  { name: '暗魔法考试准考证', durability: '1', desc: '可参加暗魔法相关兵种的资格考试。' },
  { name: '火把', durability: '3', desc: '能扩大导致地图的视野。' },
  { name: '金块', durability: '/', desc: '可在商店以很高的价格卖出。' },
  { name: '大金块', durability: '/', desc: '可在商店以非常高的价格卖出。' },
  { name: '巨大金块', durability: '/', desc: '可在商店以极高的价格卖出。' },
  { name: '解毒剂', durability: '3', desc: '使用后可消除中毒效果。' },
  { name: '圣水', durability: '3', desc: '使用后魔防+7。随回合经过，效果会逐渐减少。' },
  { name: '门扉钥匙', durability: '1', desc: '可打开门扉。' },
  { name: '宝箱钥匙', durability: '1', desc: '可打开宝箱。' },
  { name: '万能钥匙', durability: '3', desc: '可打开门扉与宝箱。' },
  { name: '天使之衣', durability: '1', desc: '使用后HP上限+5。' },
  { name: '力量水滴', durability: '1', desc: '使用后力量+2。' },
  { name: '精灵之粉', durability: '1', desc: '使用后魔力+2。' },
  { name: '秘传之书', durability: '1', desc: '使用后技巧+2。' },
  { name: '疾风羽毛', durability: '1', desc: '使用后速度+2。' },
  { name: '女神像', durability: '1', desc: '使用后幸运+4。' },
  { name: '巨大龟甲', durability: '1', desc: '使用后防守+2。' },
  { name: '辟邪物', durability: '1', desc: '使用后魔防+2。' },
  { name: '黑珍珠', durability: '1', desc: '使用后魅力+2。' },
  { name: '唤风之靴', durability: '1', desc: '使用后移动力+1。' },
  { name: '棘龙之证', durability: '/', desc: '持有者会获得艾尔内斯特之纹章。使用武器攻击时，低几率使对手不可反击。' },
  { name: '风龙之证', durability: '/', desc: '持有者会获得玛库伊尔之纹章。使用魔法攻击时，低几率使威力提升。' },
  { name: '空龙之证', durability: '/', desc: '持有者会获得赛罗司之纹章。使用战技时，经常使威力提升。' },
  { name: '碎龙之证', durability: '/', desc: '持有者会获得多米尼克之纹章。使用魔法攻击时，低几率不消费次数。' },
  { name: '盾龙之证', durability: '/', desc: '持有者会获得伏拉鲁达力乌斯之纹章。使用武器攻击时，偶尔会使威力提升。' },
  { name: '萌龙之证', durability: '/', desc: '持有者会获得诺亚之纹章。使用魔法攻击时，低几率不消费次数。' },
  { name: '光龙之证', durability: '/', desc: '持有者会获得希思琳之纹章。使用回复魔法时，偶尔会使威力提升。' },
  { name: '炎龙之证', durability: '/', desc: '持有者会获得达夫纳尔之纹章。使用战技时，偶尔会使威力提升。' },
  { name: '惨龙之证', durability: '/', desc: '持有者会获得布雷达德之纹章。低几率使战技攻击与武器消费为2倍。' },
  { name: '贤龙之证', durability: '/', desc: '持有者会获得古罗斯塔尔之纹章。使用魔法攻击时，低几率使威力提升。' },
  { name: '劫龙之证', durability: '/', desc: '持有者会获得哥纳利尔之纹章。使用战技时，偶尔会使对手不可反击。' },
  { name: '地龙之证', durability: '/', desc: '持有者会获得奇霍尔之纹章。使用战技时，偶尔会使对手不可反击。' },
  { name: '冰龙之证', durability: '/', desc: '持有者会获得奥班之纹章。使用武器攻击时，低几率使对手不可反击。' },
  { name: '裂龙之证', durability: '/', desc: '持有者会获得戈迪耶之纹章。使用战技时，经常使威力提升。' },
  { name: '水龙之证', durability: '/', desc: '持有者会获得印迪哈之纹章。使用武器攻击时，低几率攻击2次。' },
  { name: '岚龙之证', durability: '/', desc: '持有者会获得兽之纹章。使用武器攻击时，偶尔会使威力提升。' },
  { name: '雷龙之证', durability: '/', desc: '持有者会获得卡隆之纹章。使用战技时，经常使威力提升。' },
  { name: '暗龙之证', durability: '/', desc: '持有者会获得提默特之纹章。使用回复魔法时，低几率不消费次数。' },
  { name: '星龙之证', durability: '/', desc: '持有者会获得里刚之纹章。以战技所造成伤害的30%回复。' },
  { name: '雪龙之证', durability: '/', desc: '持有者会获得修巴利耶之纹章。以战技所造成伤害的30%回复。' },
  { name: '护龙之证', durability: '/', desc: '持有者会获得拉弥努之纹章。使用回复魔法时，低几率不消费次数。' },
  { name: '纹章石', durability: '/', desc: '赛罗司教团藏匿的神秘石头。上面各自刻着不同的纹章。' },
  { name: '岩石牛蒡', durability: '1', desc: '非常坚硬、难以食用的药用根茎类。食用后力量+1。' },
  { name: '上等魔草', durability: '1', desc: '汇集了纯度特别高的魔草之物。食用后魔力+1。' },
  { name: '炼狱石榴', durability: '1', desc: '奇迹般地在炼狱之谷结果的石榴。食用后技巧+1。' },
  { name: '快腿胡萝卜', durability: '1', desc: '在胡萝卜中，腐烂速度都极高的品种。食用后速度+1。' },
  { name: '奇迹豆', durability: '1', desc: '不知不觉间萌芽的美味豆子。食用后幸运+1。' },
  { name: '仙馔秘药', durability: '1', desc: '也能制成软膏涂抹于身体的药草。食用后防守+1。' },
  { name: '白维罗娜', durability: '1', desc: '鲜少能采到的维罗娜变异种。食用后魔防+1。' },
  { name: '黄金苹果', durability: '1', desc: '据说是被女神祝福过的苹果。食用后魅力+1。' },
  { name: '生命树果', durability: '1', desc: '传说能延长寿命的神奇果实。食用后HP上限+1。' }
]
</script>

<style scoped>
/* 物品道具区域 */
.items-guide {
  padding: 20px 0;
}

/* 区域标题 */
.section-title {
  font-size: 20px;
  color: #00d2ff;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 3px solid #00d2ff;
}

/* 介绍文字 */
.items-intro {
  margin-bottom: 20px;
}

.items-intro p {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

/* 表格容器 */
.items-table-wrapper {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 物品表格 */
.items-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.items-table thead {
  background: rgba(0, 210, 255, 0.15);
}

.items-table th {
  padding: 12px 15px;
  text-align: center;
  color: #00d2ff;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 210, 255, 0.3);
}

.items-table td {
  padding: 12px 15px;
  color: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.items-table tbody tr:last-child td {
  border-bottom: none;
}

.items-table tbody tr:hover {
  background: rgba(0, 210, 255, 0.05);
}

/* 列宽设置 */
.col-name {
  width: 25%;
  text-align: center;
}

.col-durability {
  width: 15%;
  text-align: center;
}

.col-desc {
  width: 60%;
  text-align: left;
}

/* 响应式适配 */
@media screen and (max-width: 768px) {
  .items-table {
    font-size: 12px;
  }
  
  .items-table th,
  .items-table td {
    padding: 10px 8px;
  }
  
  .col-name {
    width: 30%;
  }
  
  .col-durability {
    width: 15%;
  }
  
  .col-desc {
    width: 55%;
  }
}
</style>
