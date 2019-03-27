# vuedemo

## 运行步骤

在文件根目录下（vuedemo下）运行
```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```

##结构说明

```
├──node_modules
├──build
├──config
└──src
    ├──assets         //静态文件
    ├──service        //后端接口
    ├──router         //vue-router配置，！！加页面这里要加
    ├──css            //css公共样式
    ├──components     //公用组件
        ├──Container  //整体布局框架
        ├──NavMenu    // 侧边栏，！！加页面的话需要在这里添加
        └──page       //单独页面
            ├──
            └──       //!!这里是你们要写的地方
    ├── App.vue       //入口      
    └──main.ts
├──
```

