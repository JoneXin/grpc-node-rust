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

let packageDefinition = protoLoader.loadSync(path.join(__dirname, '../../../protos/voting.proto'), options);
const packageCoting: any = grpc.loadPackageDefinition(packageDefinition).voting;
const VotingService = packageCoting.Voting;
const server = new grpc.Server();

let title = { id: '2', title: 'Note 2', body: 'Content 2', postImage: 'Post image 2', age: [1, 2, 34] };

server.addService(VotingService.service, {
    get_news: (info, callback) => {
        console.log(info.request);

        callback(null, title);
    },
});

server.bindAsync('127.0.0.1:8080', grpc.ServerCredentials.createInsecure(), (error, port) => {
    server.start();
    console.log('Server running at http://127.0.0.1:8080');
});
