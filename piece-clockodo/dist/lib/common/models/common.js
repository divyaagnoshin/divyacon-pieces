"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareListRequest = prepareListRequest;
function emptyValueFilter(accessor) {
    return (key) => {
        const val = accessor(key);
        return (val !== null &&
            val !== undefined &&
            (typeof val != 'string' || val.length > 0));
    };
}
function prepareListRequest(request) {
    const params = {};
    const requestObj = request;
    Object.keys(request)
        .filter((k) => k != 'filter')
        .filter(emptyValueFilter((k) => requestObj[k]))
        .forEach((k) => {
        params[k] = request[k].toString();
    });
    if (request.filter) {
        Object.keys(request.filter)
            .filter(emptyValueFilter((k) => request.filter[k]))
            .forEach((k) => {
            params['filter[' + k + ']'] = request.filter[k].toString();
        });
    }
    return params;
}
//# sourceMappingURL=common.js.map