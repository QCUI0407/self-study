// 1.引入express
const { response } = require('express');
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文封装
// response 是对相应报的封装
app.get('/',(rquest,response)=>{
    // 设置响应
    response.send('Hello express!');
});

// 4.监听端口启动服务
app.listen (8000,()=>{
    console.log("服务器已启动， 8000 端口监听中...");
})
//基于Node.js npm 自动更新服务器，不用断开连接，便于更改服务端代码
//npm install -g nodemon
//指令从node 文件名 --> nodemon 文件名