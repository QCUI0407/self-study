// 1.引入express
const { response } = require('express');
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文封装
// response 是对相应报的封装
app.get('/server',(rquest,response)=>{
    // 设置响应头， 设置允许跨域（Access-Control-Allow-Origin）
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello Ajax GET');

});

app.post('/server',(rquest,response)=>{
    // 设置响应头， 设置允许跨域（Access-Control-Allow-Origin）
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello Ajax POST');

});

app.all('/server',(rquest,response)=>{
    // 设置响应头， 设置允许跨域（Access-Control-Allow-Origin）
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置接收自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应体
    response.send('Hello Ajax All');
});

app.all('/json-server',(rquest,response)=>{
    // 设置响应头， 设置允许跨域（Access-Control-Allow-Origin）
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置接收自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //相应一个数据
    const data = {
        name:'HAOHAO'
    }
    //需要对数据进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应体
    response.send(str);
});


// 4.监听端口启动服务
app.listen (8000,()=>{
    console.log("服务器已启动， 8000 端口监听中...");
})