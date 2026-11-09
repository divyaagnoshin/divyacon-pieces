"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callApi = callApi;
exports.getChanges = getChanges;
exports.getCalendars = getCalendars;
exports.getAllEvents = getAllEvents;
exports.getEventsById = getEventsById;
exports.getUpdatedOrNewEvents = getUpdatedOrNewEvents;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@agnocon/pieces-common");
function callApi(authProp, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const httpRequest = {
            method: pieces_common_1.HttpMethod.GET,
            url: `https://${authProp.props.baseUrl}/api/1/${request}`,
            headers: {
                apikey: authProp.props.apikey,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(httpRequest);
        return response;
    });
}
function getChanges(authProp, lastFetchEpochMS) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // Webling API breaks if unix timestamp is too far in the past
        if (lastFetchEpochMS === 0) {
            const today = new Date();
            const minUpdated = new Date();
            minUpdated.setDate(today.getDate() - 7);
            lastFetchEpochMS = minUpdated.getTime();
        }
        const response = yield callApi(authProp, `/changes/${lastFetchEpochMS / 1000}` // webling uses seconds instead of milliseconds
        );
        return response.body;
    });
}
function getCalendars(authProp) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield callApi(authProp, 'calendar?format=full');
        return response.body;
    });
}
function getAllEvents(authProp, calendarId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield callApi(authProp, `calendarevent?filter=$parents.$id=${calendarId}&format=full`);
        return response.body;
    });
}
function getEventsById(authProp, eventIds) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = `calendarevent/${eventIds}`;
        const response = yield callApi(authProp, request);
        return response.body;
    });
}
;
function getUpdatedOrNewEvents(authProp, calendarId, lastFetchEpochMS) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        // get changes since last call
        const weblingChanges = yield getChanges(authProp, lastFetchEpochMS / 1000);
        // this will also include ids of deleted objects
        const changedEvents = (_a = weblingChanges.objects.calendarevents) !== null && _a !== void 0 ? _a : [];
        const deletedObjects = (_b = weblingChanges.deleted) !== null && _b !== void 0 ? _b : [];
        // filter out already deleted objects to treat seperately
        // including a deleted event in a query list will result in a 404 response for the whole query
        const updatedOrNewEvents = changedEvents.filter((event) => !deletedObjects.includes(event));
        const response = yield callApi(authProp, `calendarevent/${updatedOrNewEvents.join(',')}?format=full&filter=$parents.$id=${calendarId}`);
        return response.body;
    });
}
//# sourceMappingURL=helpers.js.map