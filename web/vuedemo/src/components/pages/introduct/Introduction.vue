<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="vue简介">
        <div class="title">什么是Vue</div>

        <el-card class="box-card">

          <div key="1" class="text item">
            VUE是一个简单、好用、易上手、扩展性强的框架
          </div>
          <div key="1" class="text item">
            VUE是一种MVVM架构的前端框架，有响应式的数据绑定,组件化的开发,Virtual DOM
          </div>
          <div key="2" class="text item">
            Vue是一个组件化的构建系统，允许我们使用小型、独立和通常可复用的组件构建大型应用。
          </div>

        </el-card>
        <br>
        <br>
        <div class="title">VUE结构</div>
        <div class="description">每一个VUE后缀的页面都是由HTML，CSS，JS组成。熟悉的配方，熟悉的味道</div>
        <img src="./code.png" />

        <el-row>
          显示：
        </el-row>
        <img src="./page.png" />
        <div class="description">其中template下是html，script下是js，style下是css</div>
      </el-tab-pane>

      <el-tab-pane label="VUE的特性">

        <div class="title">数据驱动</div>
        <div class="description">Vue.js 一个核心思想是数据驱动。</div>
        <img src="./data.png" width="80%" />
        <el-row>
          所谓数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据。
        </el-row>
        <el-row>
          它相比我们传统的前端开发，如使用 jQuery 等前端库直接修改 DOM，大大简化了代码量。
        </el-row>
        <el-row>
          特别是当交互复杂的时候，只关心数据的修改会让代码的逻辑变的非常清晰，因为 DOM 变成了数据的映射，我们所有的逻辑都是对数据的修改，而不用碰触 DOM，这样的代码非常利于维护。
        </el-row>

        <el-row>
          在 Vue.js 中我们可以采用简洁的模板语法来声明式的将数据渲染为 DOM：
        </el-row>
        <img src="./hello.png" width="60%" height="300px" />

        <br>
        <br> 示例：
        <el-input v-model="message" value="">

        </el-input>
        <div style="background:yellow">
          {{ message }}
        </div>
        <br>
        <br>
        <div class="title">响应式的数据绑定</div>
        <el-row>
          h1标签里面通过{{ message }}这个写法与input标签中的value绑定在了一起，其中变化，另外一个和它绑定的数据就跟着变化。 就是vue.js会自动响应数据的变化情况，并且根据用户在代码中预先写好的绑定关系，对所有绑定在一起的数据和视图内容都进行修改。而这种绑定关系，在图上是以input 标签的v-model属性来声明的，vue.js为声明式渲染的模版引擎。
        </el-row>
        <img src="./code.png" />

        <br>
        <br>
        <br>
        <div class="title">组件化开发</div>
        <el-row>
          传统前端开发的时候，我们都是每个人做一个页面，然后分别实现css，js，最后套入各种后端模版引擎。
        </el-row>
        <el-row>
          页面交互和结构十分复杂，一个页面上就有许许多多的模块需要编写，而且往往一个模块的代码量和工作量就非常庞大
        </el-row>
        <el-row>
          Vue.js通过组件，把一个单页应用中的各种模块拆分到一个一个单独的组件（component）中，我们只要先在父级应用中写好各种组件标签（占坑），并且在组件标签中写好要传入组件的参数（就像给函数传入参数一样，这个参数叫做组件的属性），然后再分别写好各种组件的实现
        </el-row>
        <el-row>
          函数可以复用，我们定义好的组件也可以高度复用，对功能进行抽象，传入不同的参数
        </el-row>
        <br>
        <br>
        <div class="title"> Virtual DOM</div>
        <el-row>浏览器本身处理DOM也是有性能瓶颈的，尤其是在传统开发中，用JQuery或者原生的JavaScript DOM操作函数对DOM进行频繁操作的时候，浏览器要不停的渲染新的DOM树，导致页面看起来非常卡顿。</el-row>
        <el-row>而Virtual DOM则是虚拟DOM的英文，简单来说，他就是一种可以预先通过JavaScript进行各种计算，把最终的DOM操作计算出来并优化，由于这个DOM操作属于预处理操作，并没有真实的操作DOM，所以叫做虚拟DOM。最后在计算完毕才真正将DOM操作提交，将DOM操作变化反映到DOM树上。 ！
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="VUE的项目架构">
        <div class="title">VUE的实例</div>

        <div class="description">创建一个VUE实例，大概需要以下过程</div>
        <el-row>事实上：每个Vue的应用都是通过Vue()函数创建一个新的Vue实例开始的。创建了一个Vue实例，其实就创建了一个ViewModel.</el-row>
        <el-row> View：是看得到的，即视图，用到Vue的项目中来，它应该是“模板”。也就是用来挂载Vue实例的一个DOM元素，通常在项目根目录中index.html文件中出现，比如 ' div id="app" div
        </el-row>
        <el-row>Model：即模型（或数据），跟MVC中的Model一样，就是想要显示到模型上的数据，也是我们需要在程序生命周期中可能需要更新数据
        </el-row>
        <el-row>在MVVM模型中，View和Model是分开的，两者不需要相互关心。但两者分开之后得通过ViewModel连接起来。</el-row>

        <el-row>将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载</el-row>
        <img src="./chuangjian.png" />

        <div class="title">VUE项目架构</div>
        <img src="./mulu.png" />
        <br>
        <br>
        <el-row>main.js是我们的入口文件，主要作用是初始化vue实例并使用需要的插件</el-row>
        <img src="./mainjs.png" />
        <br>
        <br>
        <el-row>App.vue是主程序，其他所有的.vue都是放在App.vue中，所以只需要加载App.vue就完全可以把其他的东西加载出来。</el-row>
        <img src="./appvue.png" />
      </el-tab-pane>

      <el-tab-pane label="WHY VUE">

        <div class="title">VUE和Angular的对比</div>
        <br>
        <div class="description">TypeScript</div>
        <el-row>
          Angular 事实上必须用 TypeScript 来开发，因为它的文档和学习资源几乎全部是面向 TS 的。
        </el-row>
        <el-row>
          TS 有很多好处——静态类型检查在大规模的应用中非常有用，同时对于 Java 和 C# 背景的开发者也是非常提升开发效率的。
        </el-row>
        <el-row>
          然而，并不是所有人都想用 TS——在中小型规模的项目中，引入 TS 可能并不会带来太多明显的优势。在这些情况下，用 Vue 会是更好的选择，因为在不用 TS 的情况下使用 Angular 会很有挑战性。
        </el-row>
        <el-row>
          VUE两者皆可
        </el-row>
        <br>
        <div class="description">灵活性</div>
        <el-row>
          Vue 相比于 Angular 更加灵活，Vue 官方提供了构建工具来协助你构建项目,比如vue-cli
        </el-row>
        <br>
        <div class="description">体积</div>
        <el-row>
          VUE更小，一个包含了 Vuex + Vue Router 的 Vue 项目 (gzip 之后 30kB) 相比使用了这些优化的 angular-cli 生成的默认项目尺寸 (~65KB) 还是要小得多。
        </el-row>
        <br>
        <div class="description">学习曲线</div>
        <el-row>
          要学习 Vue，你只需要有良好的 HTML 和 JavaScript 基础。
        </el-row>
        <el-row>
          Angular 作为一个针对大型的复杂应用的框架，它的 API 面积比起 Vue 要大得多,对于经验不甚丰富的开发者相当的不友好。
        </el-row>

        <br>
        <br>
        <div class="title">好看易上手的丰富组件库</div>
        <div class="description">Element，饿了么公司基于vue开发的vue的ui组件库</div>
        <el-row>
          一套为开发者、设计师和产品经理准备的组件库，提供了配套设计资源，帮助你的网站快速成型。
        </el-row>
        <a href="http://element-cn.eleme.io/#/zh-CN/component/input-number">ElementUI</a>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  data() {
    return {
      message: "Welcome to vuejs!",
      in: ""
    };
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
.title {
  font-size: 25px;
  padding: 10px 0;
}

.description {
  font-size: 20px;
  padding: 10px;
}
br {
  height: 1px;
  border: black 1px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
