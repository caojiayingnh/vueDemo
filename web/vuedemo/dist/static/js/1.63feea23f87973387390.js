webpackJsonp([1],{"+1FR":function(t,i,s){t.exports=s.p+"static/img/error.3c564a2.png"},"/MjF":function(t,i,s){t.exports=s.p+"static/img/private.a847489.png"},"5c0c":function(t,i){},AZSx:function(t,i,s){t.exports=s.p+"static/img/propEg.05b1d1b.png"},I4o9:function(t,i,s){t.exports=s.p+"static/img/gloabl1.569f113.png"},MT2J:function(t,i,s){t.exports=s.p+"static/img/wrong-counter.29131ce.png"},N4BS:function(t,i,s){t.exports=s.p+"static/img/global3.3f14210.png"},TjxV:function(t,i,s){t.exports=s.p+"static/img/switch.57c7e8a.png"},Z3rZ:function(t,i,s){t.exports=s.p+"static/img/global5.f18c2a7.png"},ZH5k:function(t,i,s){t.exports=s.p+"static/img/prop22.0a30b22.png"},"aX+R":function(t,i,s){t.exports=s.p+"static/img/prop12.045e33c.png"},efYe:function(t,i,s){t.exports=s.p+"static/img/counter.21629fe.png"},lty6:function(t,i,s){t.exports=s.p+"static/img/global4.528a061.png"},mzGq:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("7+uW"),c={count:0};a.default.component("wrong-counter",{data:function(){return c},template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>'}),a.default.component("counter",{data:function(){return{count1:0}},template:'<button v-on:click="count1++">You clicked me {{ count1 }} times.</button>'}),a.default.component("login",{template:"<h3>登陆组件</h3>"}),a.default.component("register",{template:"<h3>注册组件</h3>"});new a.default({el:"#app2",data:{comName:"login"},methods:{}});var o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"total"},[a("div",{staticClass:"title"},[t._v("组件")]),t._v(" "),a("div",{staticClass:"description"},[t._v("组件是可复用的vue实例，组件的出现就是为了拆分vue实例的代码量，能够让我们以不同的组件，来划分不同的功能模块。将来我们要用什么功能，就可以调用相应的组件。")]),t._v(" "),a("div",{staticClass:"subtitle"},[t._v("组件化和模块化的区别：")]),t._v(" "),a("div",{staticClass:"description"},[t._v("组件化：从ui界面角度划分，前端的组件化方便ui组件的重用。")]),t._v(" "),a("div",{staticClass:"description"},[t._v(" 模块化：从代码逻辑角度划分，方便代码分层开发，保证每个功能模块的职能单一\n  ")]),t._v(" "),a("div",{staticClass:"title"},[t._v("组件的创建")]),t._v(" "),a("div",{staticClass:"subtitle"},[t._v("全局组件")]),t._v(" "),a("div",{staticClass:"description"},[t._v("方法一")]),t._v(" "),a("img",{attrs:{src:s("I4o9")}}),a("br"),t._v(" "),a("div",{staticClass:"description"},[t._v("方法二")]),t._v(" "),a("img",{attrs:{src:s("N4BS")}}),a("br"),t._v(" "),a("div",{staticClass:"description"},[t._v("方法三")]),t._v(" "),a("img",{attrs:{src:s("lty6")}}),a("br"),t._v(" "),a("div",{staticClass:"codeShow"},[a("router-link",{attrs:{to:"/componentDemo"}},[t._v("效果展示")])],1),t._v(" "),a("div",{staticClass:"description"},[t._v("注意：内部节点只能有一个根节点")]),t._v(" "),a("img",{attrs:{src:s("Z3rZ")}}),a("br"),a("br"),t._v(" "),a("img",{attrs:{src:s("+1FR")}}),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"subtitle"},[t._v("私有组件")]),t._v(" "),a("img",{attrs:{src:s("/MjF")}}),a("br"),t._v(" "),a("div",{staticClass:"title"},[t._v("Vue组件中的data")]),t._v(" "),a("div",{staticClass:"description"},[t._v("组件的data和实例的data不同，组件中的data必须是一个方法，这个方法内部，还必须返回一个对。不然会报错")]),t._v(" "),a("div",{staticClass:"description"},[t._v("因此每个实例可以维护一份被返回对象的独立的拷贝")]),t._v(" "),a("div",{staticClass:"description"},[t._v("不然会影响到所有实例：")]),t._v(" "),a("img",{attrs:{src:s("MT2J")}}),a("br"),t._v(" "),a("div",{staticClass:"codeShow",attrs:{id:"wrong-counter"}},[a("div",[a("wrong-counter"),t._v(" "),a("wrong-counter"),t._v(" "),a("wrong-counter")],1)]),t._v(" "),a("div",{staticClass:"description"},[t._v("三个组件内部返回的对象都指向同一个，虽然是三个组件实例，但这三个共享同一个dataObj")]),t._v(" "),a("div",{staticClass:"description"},[t._v("正确方式：")]),t._v(" "),a("img",{attrs:{src:s("efYe")}}),a("br"),t._v(" "),a("div",{staticClass:"codeShow",attrs:{id:"counter"}},[a("div",{attrs:{id:""}},[a("counter"),t._v(" "),a("counter"),t._v(" "),a("counter")],1)]),t._v(" "),a("div",{staticClass:"title"},[t._v("动态组件")]),t._v(" "),a("div",{staticClass:"subtitle"},[t._v("组件的切换")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"codeShow",attrs:{id:"app2"}},[a("a",{attrs:{href:""},on:{click:function(i){i.preventDefault(),t.comName="login"}}},[t._v("登陆")]),t._v(" "),a("a",{attrs:{href:""},on:{click:function(i){i.preventDefault(),t.comName="register"}}},[t._v("注册")]),t._v(" "),a(t.comName,{tag:"component"})],1),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"description"},[t._v("vue提供了component来展示对应的组件，component是一个占位符，：is属性可以用来指定要展示的组件名称")]),t._v(" "),a("img",{attrs:{src:s("TjxV")}}),a("br"),t._v(" "),a("div",{staticClass:"title"},[t._v("Prop")]),t._v(" "),a("div",{staticClass:"description"},[t._v("Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"description"},[t._v("一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。我们能够在组件实例中访问这个值，就像访问 data 中的值一样。")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:s("AZSx")}}),t._v(" "),a("div",{staticClass:"subtitle"},[t._v("通过prop向子组件传递数据")]),t._v(" "),a("div",{staticClass:"description"},[t._v("\n    所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。\n  ")]),t._v(" "),a("div",{staticClass:"description"},[t._v("父组件向子组件传递数值")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:s("qp40")}}),a("br"),t._v(" "),a("img",{attrs:{src:s("aX+R")}}),a("br"),t._v(" "),a("div",{staticClass:"description"},[t._v("父组件向子组件传递方法")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:s("tnYy")}}),a("br"),t._v(" "),a("img",{attrs:{src:s("ZH5k")}})])},staticRenderFns:[]};var r=s("VU/8")({name:"ComponentIntro",data:function(){return{comName:"login"}}},o,!1,function(t){s("5c0c")},"data-v-211340bf",null);i.default=r.exports},qp40:function(t,i,s){t.exports=s.p+"static/img/prop11.eb93654.png"},tnYy:function(t,i,s){t.exports=s.p+"static/img/prop21.46c8199.png"}});
//# sourceMappingURL=1.63feea23f87973387390.js.map