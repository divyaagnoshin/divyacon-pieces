"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeWebhook = exports.createWebhook = exports.fetchTags = exports.fetchSubscribedTags = exports.fetchSubscriberByEmail = exports.fetchSubscriperById = exports.fetchSequences = exports.fetchPurchases = exports.fetchForms = exports.fetchCustomFields = exports.fetchBroadcasts = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("./constants");
const pieces_common_1 = require("@agnocon/pieces-common");
const fetchBroadcasts = (auth, page) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = constants_1.BROADCASTS_API_ENDPOINT;
    const request = {
        url,
        method: pieces_common_1.HttpMethod.GET,
        queryParams: {
            api_secret: auth,
            page: page.toString(),
            sort_order: 'desc',
        },
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to fetch broadcasts. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.broadcasts) {
        return response.body.broadcasts;
    }
    throw new Error(errorMessage);
});
exports.fetchBroadcasts = fetchBroadcasts;
const fetchCustomFields = (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = constants_1.CUSTOM_FIELDS_API_ENDPOINT;
    const body = {
        api_secret: auth,
    };
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.GET,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to fetch custom fields. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.custom_fields) {
        return response.body.custom_fields;
    }
    throw new Error(errorMessage);
});
exports.fetchCustomFields = fetchCustomFields;
const fetchForms = (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = constants_1.FORMS_API_ENDPOINT;
    const body = {
        api_secret: auth,
    };
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.GET,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to fetch forms. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.forms) {
        return response.body.forms;
    }
    throw new Error(errorMessage);
});
exports.fetchForms = fetchForms;
const fetchPurchases = (auth, page) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = constants_1.PURCHASES_API_ENDPOINT;
    const body = {
        api_secret: auth,
        page,
    };
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.GET,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to fetch purchases. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.purchases) {
        return response.body.purchases;
    }
    throw new Error(errorMessage);
});
exports.fetchPurchases = fetchPurchases;
const fetchSequences = (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = constants_1.SEQUENCES_API_ENDPOINT;
    const body = {
        api_secret: auth,
    };
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.GET,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to fetch sequences. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.courses) {
        return response.body.courses;
    }
    throw new Error(errorMessage);
});
exports.fetchSequences = fetchSequences;
const fetchSubscriperById = (auth, subscriberId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = `${constants_1.SUBSCRIBERS_API_ENDPOINT}/${subscriberId}`;
    const body = {
        api_secret: auth,
    };
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.GET,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to fetch subscriber. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.subscriber) {
        return response.body.subscriber;
    }
    throw new Error(errorMessage);
});
exports.fetchSubscriperById = fetchSubscriperById;
const fetchSubscriberByEmail = (auth, email_address) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = constants_1.SUBSCRIBERS_API_ENDPOINT;
    const body = {
        api_secret: auth,
        email_address,
    };
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.GET,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to fetch subscriber that match the provided email. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    const subscriber = response.body.subscribers[0];
    if (subscriber) {
        return subscriber;
    }
    throw new Error(errorMessage);
});
exports.fetchSubscriberByEmail = fetchSubscriberByEmail;
const fetchSubscribedTags = (auth, subscriberId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = `${constants_1.SUBSCRIBERS_API_ENDPOINT}/${subscriberId}/tags`;
    const body = {
        api_secret: auth,
    };
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.GET,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to fetch tags. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.tags) {
        return response.body.tags;
    }
    throw new Error(errorMessage);
});
exports.fetchSubscribedTags = fetchSubscribedTags;
const fetchTags = (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = constants_1.TAGS_API_ENDPOINT;
    const body = {
        api_secret: auth,
    };
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.GET,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to fetch tags. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.tags) {
        return response.body.tags;
    }
    throw new Error(errorMessage);
});
exports.fetchTags = fetchTags;
const createWebhook = (auth, payload) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const body = Object.assign(Object.assign({}, payload), { api_secret: auth });
    const url = constants_1.WEBHOOKS_API_ENDPOINT;
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.POST,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to create webhook. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.rule) {
        return response.body.rule;
    }
    throw new Error(errorMessage);
});
exports.createWebhook = createWebhook;
const removeWebhook = (auth, ruleId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const url = `${constants_1.WEBHOOKS_API_ENDPOINT}/${ruleId}`;
    const body = { api_secret: auth };
    const request = {
        url,
        body,
        method: pieces_common_1.HttpMethod.DELETE,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    const errorMessage = `Failed to remove webhook. Response code: ${response.status} Response body: ${JSON.stringify(response.body)}`;
    if (response.status !== 200) {
        throw new Error(errorMessage);
    }
    if (response.body.success) {
        return response.body.success;
    }
    throw new Error(errorMessage);
});
exports.removeWebhook = removeWebhook;
//# sourceMappingURL=service.js.map