<template>
  <el-carousel
  indicator-position="outside"
  autoplay="false"
  height="500px">
    <el-carousel-item>
      <div class="content">11111111111</div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="content">22222222222</div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="content">33333333333</div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="content">44444444444</div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
      name: "index",
      data () {
        return {
        }
      }
    }
</script>

<style scoped>
.el-carousel__item{
  background-color: #c6e2ff;
}
  .content{
    text-align: center;
    height: 500px;
    line-height: 500px;
  }
</style>
