"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
var packageDefinition = protoLoader.loadSync(path.join(__dirname, '../../news.proto'), options);
const NewsService = grpc.loadPackageDefinition(packageDefinition).NewsService;
const client = new NewsService('127.0.0.1:50051', grpc.credentials.createInsecure());
setInterval(() => {
    client.GetAllNews({ name: '123' }, (error, news) => {
        if (error)
            throw error;
        console.log(news);
    });
}, 2000);
//# sourceMappingURL=app.js.map