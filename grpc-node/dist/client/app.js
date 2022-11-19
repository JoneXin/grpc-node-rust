"use strict";
var _a;
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
var packageDefinition = protoLoader.loadSync(path.join(__dirname, '../../../protos/voting.proto'), options);
const packageName = (_a = grpc.loadPackageDefinition(packageDefinition)) === null || _a === void 0 ? void 0 : _a.voting;
const VotingService = packageName.Voting;
console.log(VotingService);
const client = new VotingService('127.0.0.1:8080', grpc.credentials.createInsecure());
setInterval(() => {
    client.get_news({ name: '123' }, (error, news) => {
        if (error)
            throw error;
        console.log(news);
    });
}, 2000);
//# sourceMappingURL=app.js.map