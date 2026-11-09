"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareQueryRequest = prepareQueryRequest;
function emptyValueFilter(accessor) {
    return (key) => {
        const val = accessor(key);
        return (val !== null &&
            val !== undefined &&
            (typeof val != 'string' || val.length > 0));
    };
}
function prepareQueryRequest(request) {
    const params = {};
    if (!request)
        return params;
    const requestObj = request;
    Object.keys(request)
        .filter((k) => k != 'filter')
        .filter(emptyValueFilter((k) => requestObj[k]))
        .forEach((k) => {
        params[k] = request[k].toString();
    });
    if (request.filter) {
        const filter = request.filter; // For some reason required to pass the unidentified check
        Object.keys(request.filter)
            .filter(emptyValueFilter((k) => filter[k]))
            .forEach((k) => {
            params['filter[' + k + ']'] = filter[k].toString();
        });
    }
    return params;
}
//# sourceMappingURL=common.js.map