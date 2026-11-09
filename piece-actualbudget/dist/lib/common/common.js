"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeAndDownloadBudget = initializeAndDownloadBudget;
exports.getYears = getYears;
exports.getMonths = getMonths;
const tslib_1 = require("tslib");
const os_1 = tslib_1.__importDefault(require("os"));
function initializeAndDownloadBudget(api, auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        yield api.init({
            // Budget data will be cached locally here, in subdirectories for each file.
            dataDir: os_1.default.tmpdir(),
            serverURL: auth.server_url,
            password: auth.password,
        });
        yield api.downloadBudget(auth.sync_id, { password: (_a = auth.encryption_password) !== null && _a !== void 0 ? _a : undefined });
    });
}
function getYears() {
    const dropDownOptions = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const startYear = currentYear - 10;
    for (let year = startYear; year <= currentYear + 5; year++) {
        dropDownOptions.push({ label: year.toString(), value: year.toString() });
    }
    return dropDownOptions;
}
function getMonths() {
    return [
        {
            label: 'January',
            value: '01'
        },
        {
            label: 'February',
            value: '02'
        },
        {
            label: 'March',
            value: '03'
        },
        {
            label: 'April',
            value: '04'
        },
        {
            label: 'May',
            value: '05'
        },
        {
            label: 'June',
            value: '06'
        },
        {
            label: 'July',
            value: '07'
        },
        {
            label: 'August',
            value: '08'
        },
        {
            label: 'September',
            value: '09'
        },
        {
            label: 'October',
            value: '10'
        },
        {
            label: 'November',
            value: '11'
        },
        {
            label: 'December',
            value: '12'
        }
    ];
}
//# sourceMappingURL=common.js.map