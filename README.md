# GRPC

## 一，GRPC 原理

### 1，简介:

> gRPC是一个高性能、开源和通用的 RPC 框架，支持多语言。

> gRPC 基于 HTTP/2 标准设计，带来诸如双向流、流控、头部压缩、单 TCP 连接上的多复用请求等特性

> 序列化支持 PB（Protocol Buffer）和 JSON，PB 是一种语言无关的高性能序列化框架，基于 HTTP/2 + PB, 保障了 RPC 调用的高性能

## 二，GRPC 和 HTTP/1.1 对比


## 三，GRPC 优势 劣势

### 优点
- 高效的传输

- 双向实时流

- 相比HTTP更小的传输体积

### 劣势

- 浏览器支持有限
  
- 消息人类不可读

## 四，GRPC 应用场景

> 1, 微服务 - gRPC设计为低延迟和高吞吐量通信。gRPC非常适用于效率至关重要的轻型微服务。  
> 2, 点对点实时通信 - gRPC对双向流媒体提供出色的支持。gRPC服务可以实时推送消息而无需轮询。  
> 3, 多语言混合开发环境 - gRPC工具支持所有流行的开发语言，使gRPC成为多语言开发环境的理想选择。  
> 4, 网络受限环境 - 使用Protobuf（一种轻量级消息格式）序列化gRPC消息。gRPC消息始终小于等效的JSON消息
- 不适合GRPC的场景
  
> 1, 浏览器可访问api（支持受限）  
> 2, 广播实时通信（grpc不支持广播）  
> 3, 进程间通信（windows 管道是一种轻量级的通信方式，不必建立在HTTP2.0上）


## 五，GRPC 案例 模板

### 1，GRPC node 客户端服务端模板


### 2，GRPC rust 客户端服务端模板


### 3，GRPC node 客户端 调用 rust 服务端模板