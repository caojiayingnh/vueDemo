<template>
  <div>
    <div class="title">天气预报</div>
    <el-select v-model="city" placeholder="选择城市">
      <el-option label="上海" :value="0">
      </el-option>
      <el-option label="北京" :value="1">
      </el-option>
      <el-option label="浙江" :value="2">
      </el-option>
      <el-option label="江苏" :value="3">
      </el-option>
    </el-select>
    <el-select v-model="day" placeholder="选择时间">
      <el-option label="周一" :value="0">
      </el-option>
      <el-option label="周二" :value="1">
      </el-option>
      <el-option label="周三" :value="2">
      </el-option>
      <el-option label="周四" :value="3">
      </el-option>
      <el-option label="周五" :value="3">
      </el-option>
    </el-select>
    <el-button class="btn" type="primary" @click="submit">查询</el-button>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>天气</span>
      </div>
      <div class="answer-box">{{answer}}</div>
    </el-card>
  </div>

</template>

<script>
import AxiosDemo from '@/services/AxiosDemo.js';
export default {
  name: 'AxiosDemo',
  data () {
    return {
      city: '',
      day: '',
      answer: ''
    }
  },
  methods: {
    async submit(){
      let _this=this;
      let city=_this.city;
      let day=_this.day;
      let answer=await AxiosDemo.get({city,day});
      _this.answer = answer;
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 20px 0;
}
.title {
  font-size: 30px;
  margin: 10px 0 30px 0;
  color: #4481ff;
}
</style>
