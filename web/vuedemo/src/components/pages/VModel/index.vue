<template>
  <el-tabs v-model="active" type="border-card">
    <el-tab-pane label="v-bind" name="first">
      v-bind
    </el-tab-pane>
    <el-tab-pane label="v-on" name="second">
      v-on
    </el-tab-pane>
    <el-tab-pane label="v-model" name="third">
      v-model
    </el-tab-pane>
  </el-tabs>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          active: 'first'
        }
      }
    }
</script>

<style scoped>

</style>
