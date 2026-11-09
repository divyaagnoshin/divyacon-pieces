"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitmqConnect = rabbitmqConnect;
const tslib_1 = require("tslib");
const amqplib_1 = tslib_1.__importDefault(require("amqplib"));
function rabbitmqConnect(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return amqplib_1.default.connect(createAmqpURI(auth), (err, conn) => {
            if (err) {
                throw err;
            }
            return conn;
        });
    });
}
function createAmqpURI(auth) {
    const uri = `amqp://${auth.username}:${auth.password}@${auth.host}:${auth.port}`;
    if (!auth.vhost) {
        return uri;
    }
    return `${uri}/${auth.vhost}`;
}
//# sourceMappingURL=index.js.map