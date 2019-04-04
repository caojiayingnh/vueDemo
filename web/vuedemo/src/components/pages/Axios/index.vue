<template>
  <el-tabs type="border-card" v-model="activeName">
    <el-tab-pane label="Axios介绍" name="first">
      <el-carousel
        indicator-position="outside"
        :autoplay="false"
        :loop="false"
        height="580px">
        <el-carousel-item>
          <div class="content">
            <img src="../../../assets/router/axios.png" height="421" width="620"/>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content">
            <div class="title">基本使用方法</div>
            <div>
              <el-row>
                <el-col :span="12">
                  <div class="subtitle">get请求</div>
                  <img src="../../../assets/router/axiosget.png" height="299"
                       width="346"/>
                </el-col>
                <el-col :span="12">
                  <div class="subtitle">post请求</div>
                  <img src="../../../assets/router/axiospost.png" height="284"
                       width="344"/></el-col>
              </el-row>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content">
            <el-row>
              <el-col :span="14">
                <div class="title">拦截器</div>
                <div class="describe">在请求或响应被 then 或 catch 处理前拦截它们</div>
                <div class="describe">拦截器分为请求拦截器和响应拦截器请求拦截器</div>
                <div class="subtitle">拦截器写法</div>
                <img src="../../../assets/axios/axios1.png" height="400" width="530"/>
              </el-col>
              <el-col :span="10">
                <img src="../../../assets/axios/axios2.png" height="540" width="454"/>
              </el-col>
            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        activeName: 'first'
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item {
    background-color: #ffffff;
  }

  .content {
    height: 580px;
    padding: 10px 60px;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .subtitle {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .describe {
    margin-bottom: 10px;
    font-size: 18px;
  }

  img {
    vertical-align: top;
  }
</style>
