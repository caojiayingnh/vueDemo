<template>
 <el-carousel
  indicator-position="outside"
  :autoplay="false"
  height="650px">
    <el-carousel-item>
        <div class="img"><img src="../../../assets/vmodel/mvvm1.png" height="650" /></div>
    </el-carousel-item>
    <el-carousel-item>
        <div class="img"><img src="../../../assets/vmodel/mvvm2.png" height="650"/></div>
    </el-carousel-item>
 </el-carousel>
</template>

<script>
    export default {
        name: 'VModel'
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
