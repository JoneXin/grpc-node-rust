import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

var packageDefinition = protoLoader.loadSync(path.join(__dirname, '../../news.proto'), options);

const NewsService: any = grpc.loadPackageDefinition(packageDefinition).NewsService;

const client = new NewsService('127.0.0.1:50051', grpc.credentials.createInsecure());

setInterval(() => {
    client.GetAllNews({ name: '123' }, (error, news) => {
        if (error) throw error;
        console.log(news);
    });
}, 2000);
