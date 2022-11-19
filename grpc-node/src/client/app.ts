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

var packageDefinition = protoLoader.loadSync(path.join(__dirname, '../../../protos/voting.proto'), options);

const packageName: any = grpc.loadPackageDefinition(packageDefinition)?.voting;

const VotingService: any = packageName.Voting;
console.log(VotingService);

const client = new VotingService('127.0.0.1:8080', grpc.credentials.createInsecure());

setInterval(() => {
    client.get_news({ name: '123' }, (error, news) => {
        if (error) throw error;
        console.log(news);
    });
}, 2000);
