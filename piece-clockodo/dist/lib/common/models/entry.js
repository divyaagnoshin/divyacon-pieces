"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillableType = exports.EntryType = void 0;
var EntryType;
(function (EntryType) {
    EntryType[EntryType["TIME_RECORD"] = 1] = "TIME_RECORD";
    EntryType[EntryType["LUMP_SUM"] = 2] = "LUMP_SUM";
    EntryType[EntryType["LUMP_SERVICE"] = 3] = "LUMP_SERVICE";
})(EntryType || (exports.EntryType = EntryType = {}));
var BillableType;
(function (BillableType) {
    BillableType[BillableType["NOT_BILLABLE"] = 0] = "NOT_BILLABLE";
    BillableType[BillableType["BILLABLE"] = 1] = "BILLABLE";
    BillableType[BillableType["BILLED"] = 2] = "BILLED";
})(BillableType || (exports.BillableType = BillableType = {}));
//# sourceMappingURL=entry.js.map