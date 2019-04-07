<template>
  <el-tabs type="border-card">
    <el-tab-pane label="MVVM介绍">
      <el-carousel indicator-position="outside" :autoplay="false" height="650px">
        <el-carousel-item>
          <div class="img">
            <img src="../../../assets/vmodel/mvvm1.png" height="650">
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="img">
            <img src="../../../assets/vmodel/mvvm2.png" height="650">
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-tab-pane>

    <el-tab-pane label="语法">
      <el-carousel indicator-position="outside" :autoplay="false" height="650px">
        <el-carousel-item>
          <h2>插值 & v-bind</h2>
          <p>数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：</p>
          <span>#文本:</span>
          <p>
            <span>{{tx_exam.comName}} : {{tx_exam.date}} 报名人数:{{tx_exam.regNo/1000}}千人</span>
            <el-button type="primary" @click="tx_exam.regNo++">报名人数+1</el-button>
          </p>

          <img src="../../../assets/vmodel/textData.png" width="640">

          <p>#特性 —— 需采用v-bind (可缩写为":"):</p>
          <p>
            <a v-bind:href="url">Learn Vue.js</a>
          </p>
          <el-button type="primary" v-bind:disabled="isButtonDisabled">Button</el-button>
          <el-button type="primary" @click="isButtonDisabled=!isButtonDisabled">change button status</el-button>
          <p>
            <img src="../../../assets/vmodel/v-bind.png" width="760">
          </p>
        </el-carousel-item>
        <el-carousel-item>
          <h2>v-bind的Class与Style绑定</h2>
          <p>
            <img src="../../../assets/vmodel/v-bind-class.png" width="800">
          </p>
        </el-carousel-item>

        <el-carousel-item>
          <h2>v-model</h2>
          <p>
            <img src="../../../assets/vmodel/v-model1.png" width="800">
          </p>
          <table><tr>
              <td>
                <span>1. textarea example:</span>
                <p style="white-space: pre-line;">{{ message }}</p>
                <textarea v-model="message"></textarea>
                <br><br>
                <div>
                  <span>2. checkbox example:</span>
                  <input type="checkbox" id="checkbox" v-model="checked">
                  <label for="checkbox">{{ checked }}</label>
                </div>

                <div>
                  <p>3. select example</p>
                  <select v-model="selected" multiple style="width: 50px;">
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                  <br>
                  <span>selected: {{ selected }}</span>
                </div>
              </td>
              <td>
                <img src="../../../assets/vmodel/v-model2.png" width="500">
              </td>
          </tr></table>
        </el-carousel-item>

        <el-carousel-item>
          <h2>指令</h2>
          <img src="../../../assets/vmodel/v-.png" width="100%">
          
        </el-carousel-item>
      </el-carousel>
    </el-tab-pane>

    <el-tab-pane label="数据绑定demo">
      <h2>demo-商品仓库</h2>
      <ul>
        <li v-for="(value,key) in products">
          <span>物品：{{key}} ;</span>
          <span v-if="value===0">库存不足</span>
          <span v-else>库存： {{value}}</span>
          <el-button type="primary" class="btn" v-on:click="products[key] += 1">添加</el-button>
          <el-button type="primary" class="btn" v-if="value!=0" @click="products[key]-=1">售卖</el-button>
        </li>
      </ul>
      <span>物品：</span>
      <select v-model="item" style="width: 100px;">
        <option v-for="(value,key) in products">{{key}}</option>
      </select>
      <span>数量：</span>
      <input type="number" v-model="quantity">
      <span v-if="can_buy">确定进货物品 {{item}} {{quantity}}件？</span>
      <el-button type="primary" :disabled="!can_buy" @click="stock(item,quantity)">进货</el-button>
      <h3>总库存量：{{total_quantity}}</h3>

      <img src="../../../assets/vmodel/demo1.png" width="80%">
      <br><br>
      <img src="../../../assets/vmodel/demo2.png" width="100%">
    </el-tab-pane>
  </el-tabs>
</template>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tx_exam: {
        comName: "腾讯",
        date: "2019.04.05",
        regNo: 5400
      },
      url: "https://cn.vuejs.org/",
      message: "请输入文本",
      checked: false,
      selected: [],
      products: {
        Mac:10 ,
        Asus:0 ,
        ThinkPad: 15
      },
      isButtonDisabled: true,
      item: "",
      quantity: 0
    };
  },
  computed: {
    total_quantity() {
     var sum = 0;
     for (var key in this.products){
       sum += this.products[key];
     }
     return sum
    },
    can_buy(){
      return this.item!=''&&this.quantity>0
    }
  },
  methods: {
    stock(item, quantity) {
      this.products[item]+=parseInt(quantity);
      this.item="";
      this.quantity=0;
    }
  }
};
</script>

<style scoped>
.el-carousel__item {
  background-color: #ffffff;
}
.content {
  height: 650px;
  padding: 30px 60px;
}
.btn {
    margin: 10px 0;
  }

</style>
