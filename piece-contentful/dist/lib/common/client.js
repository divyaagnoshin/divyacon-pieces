"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeClient = void 0;
const tslib_1 = require("tslib");
const Contentful = tslib_1.__importStar(require("contentful-management"));
const makeClient = (auth) => {
    return {
        client: Contentful.createClient({ accessToken: auth.props.apiKey }, {
            type: 'plain',
            defaults: { spaceId: auth.props.space, environmentId: auth.props.environment },
        }),
    };
};
exports.makeClient = makeClient;
//# sourceMappingURL=client.js.map