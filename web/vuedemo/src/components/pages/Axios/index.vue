<template>
  <el-carousel
    indicator-position="outside"
    :autoplay="false"
    height="650px">
    <el-carousel-item>
      <div class="content">
      <img src="../../../assets/router/axios.png" height="421" width="620"/>
    </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="content">
      <img src="../../../assets/router/axiosget.png" height="299" width="346"/>
      <img src="../../../assets/router/axiospost.png" height="284" width="344"/>
    </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "index"
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
