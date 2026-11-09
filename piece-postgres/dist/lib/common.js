"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgClient = void 0;
const tslib_1 = require("tslib");
const pg_1 = require("pg");
const pgClient = (auth_1, ...args_1) => tslib_1.__awaiter(void 0, [auth_1, ...args_1], void 0, function* (auth, query_timeout = 30000, application_name = undefined, connectionTimeoutMillis = 30000) {
    const { host, user, database, password, port, enable_ssl, reject_unauthorized: rejectUnauthorized, certificate, } = auth.props;
    const sslConf = {
        rejectUnauthorized: rejectUnauthorized,
        ca: certificate && certificate.length > 0 ? certificate : undefined,
    };
    const client = new pg_1.Client({
        host,
        port: Number(port),
        user,
        password,
        database,
        ssl: enable_ssl ? sslConf : undefined,
        query_timeout: Number(query_timeout),
        statement_timeout: Number(query_timeout),
        application_name,
        connectionTimeoutMillis: Number(connectionTimeoutMillis),
    });
    yield client.connect();
    return client;
});
exports.pgClient = pgClient;
//# sourceMappingURL=common.js.map