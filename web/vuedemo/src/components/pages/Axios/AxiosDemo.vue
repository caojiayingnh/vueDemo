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
    <el-button class="btn" type="primary" @click="search">查询</el-button>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>天气</span>
      </div>
      <div class="answer-box">{{weather}}</div>
    </el-card>
    <br>
    <hr>
    <hr>
    <br>
    <div class="title">一个神奇的AI</div>
    <el-input v-model="question" placeholder="请输入你的问题"></el-input>
    <el-button class="btn" type="primary" @click="submit">提问</el-button>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>AI</span>
      </div>
      <div class="answer-box">{{answer}}</div>
    </el-card>
  </div>

</template>

<script>
  import AxiosDemo from '@/services/AxiosDemo.js'

  export default {
    name: 'AxiosDemo',
    data() {
      return {
        city: '',
        day: '',
        weather: '',
        question: '',
        answer: ''
      }
    },
    methods: {
      /* search () {
        var _this = this
        axios.get('http://localhost:8081/weather', {
          params: {
            city: _this.city,
            day: _this.day
          }
        }).then(function (response) {
           _this.weather = response.data
        })
      },
      submit () {
        var _this = this
        axios.post('http://localhost:8081/ai', {
          question: _this.question
        }).then(function (response) {
          _this.answer = response.data
        })
        */

      async search() {
        let _this = this
        let city = _this.city
        let day = _this.day
        let weather = await AxiosDemo.getWeather({city, day})
        _this.weather = weather
      },

      async submit() {
        let _this = this
        let question = _this.question
        let answer = await AxiosDemo.getAi({question})
        _this.answer = answer
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
