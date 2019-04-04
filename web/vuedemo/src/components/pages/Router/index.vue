<template>
  <el-card header="Router介绍" shadow="never">
    <el-carousel
      indicator-position="outside"
      :autoplay="false"
      :loop="false"
      height="630px">
      <el-carousel-item>
        <div class="content">
          <div class="title">Vue-Router</div>
          <div class="para">vue-router是vue中提供的路由管理，即提供路径到组件的映射，实现了vue的单页面</div>
          <el-row class="para">
            <el-col :span="5">
              <span class="subtitle">使用方法</span>
            </el-col>
            <el-col :span="19">
              <img src="../../../assets/router/use.png" height="49" width="343"/></el-col>
          </el-row>
          <div>
            <el-col :span="8">
              <img src="../../../assets/router/router.png" height="328" width="289"/>
            </el-col>
            <el-col :span="8">
              <img src="../../../assets/router/router2.png" height="472" width="355"/>
            </el-col>
            <el-col :span="8">
              <img src="../../../assets/router/router4.png" height="202" width="307"/>
            </el-col>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="content">
          <el-row>
            <el-col :span="12">
              <div class="title">注入</div>
              <div class="img">
                <img src="../../../assets/router/routerview3.png" height="80" width="368"/>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="title">跳转</div>
              <div class="img">
                <img src="../../../assets/router/link.png" height="75" width="516"/></div>
              <div class="para">
                <router-link to="/page1">link</router-link>
              </div>

            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="title">全局注册</div>
              <div class="img">
                <img src="../../../assets/router/router3.png" height="137" width="250"/>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="title">js跳转</div>
              <div>
                <img src="../../../assets/router/routerPush.png" height="38" width="314"/>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .el-carousel__item {
    background-color: #ffffff;
  }

  .content {
    height: 630px;
    padding: 10px 60px;
  }

  .para {
    margin: 0 0 30px;
    font-size: 20px;
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

  img {
    vertical-align: top;
  }

  .el-row {
    margin-bottom: 50px;
  }
</style>
