<template>
  <el-carousel
  indicator-position="outside"
  :autoplay="false"
  height="700px">
    <el-carousel-item>
       <h2>一、插值 & v-bind</h2>
       <p>数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：</p>
       <span>文本 eg: </span><p>{{tx_exam.comName}} : {{tx_exam.date}}</p>
       <img src="../../../assets/vmodel/textData.png" height="200"/>

       <p>特性需采用v-bind eg: </p>
       <p><button v-bind:disabled="isButtonDisabled">Button</button></p>
       <img src="../../../assets/vmodel/v-bind.png" height="100"/>
    </el-carousel-item>
    <el-carousel-item>
      <h2>二、demo-商品仓库</h2>
      <ul>
         <li v-for="product in products">
           <span>物品：{{product.name}} ;</span>
           <span v-if="product.quantity===0"> 库存不足</span>
           <span v-else> 库存： {{product.quantity}} </span>
           <button v-on:click="product.quantity += 1"> Add </button>
           <button v-if="product.quantity!=0" @click="product.quantity-=1"> 售卖 </button>
        </li>
      </ul>
      <span>名称：</span><input v-model="name">
      <span>数量：</span><input type="number" v-model = "quantity">
      <button @click="stock(name,quantity)">进货</button>
      <h3>总库存量：{{total_quantity}}</h3>

      <img src="../../../assets/vmodel/demo1.png" height="250"/>
      <img src="../../../assets/vmodel/demo2.png" height="450"/>
      
    </el-carousel-item>
 </el-carousel>
</template>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          tx_exam:{
            comName:'腾讯',
            date:'2019.04.05'
          },
          products:[
            {name:'Mac',quantity:10},
            {name:'Asus',quantity:0},
            {name:'ThinkPad',quantity:15}
          ],
          isButtonDisabled:true,
          name:'',
          quantity:0
        }
      },
      computed:{
          total_quantity(){
            return this.products.reduce((sum,product)=>{
              return sum+ product.quantity
            },0)
          }
      },
    methods:{
      stock(name,quantity){
        if(name==''||quantity===0)
          return
        this.products.push({name:name,quantity:quantity});
      
      }
    }
    }
</script>

<style scoped>
.el-carousel__item{
  background-color: #ffffff;
}
  .content{
    height: 650px;
    padding: 30px 60px;
  }
</style>
