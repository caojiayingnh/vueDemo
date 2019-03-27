<template>
  <div>
    <div class="title">价值一个亿的AI</div>
    <el-input v-model="input" placeholder="请输入你的问题"></el-input>
    <el-button class="btn" type="primary" @click="submit">提问</el-button>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>AI</span>
      </div>
      <div class="answer-box">{{answer}}</div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'AxiosDemo',
  data () {
    return {
      input: '',
      answer: 'my respense'
    }
  },
  methods: {
    submit () {
      var _this = this
      axios.get('http://localhost:8081/ask', {
        params: {
          question: _this.input
        }
      }).then(function (response) {
         _this.answer = response.data
      })

    }
  }
}
</script>

<style scoped>
.btn{
  margin: 20px 0;
}
.title{
  font-size: 30px;
  margin: 10px 0 30px 0;
  color: #4481ff;
}
</style>
