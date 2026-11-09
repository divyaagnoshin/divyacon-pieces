"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wafeqHelpers = void 0;
exports.wafeqHelpers = {
    toDate(value) {
        if (!value)
            return undefined;
        return value.slice(0, 10);
    },
    stripEmpty(obj) {
        const out = {};
        for (const [k, v] of Object.entries(obj)) {
            if (v === undefined || v === null || v === '')
                continue;
            out[k] = v;
        }
        return out;
    },
    mapLineItems({ items, defaultAccount, defaultTaxRate, }) {
        if (!items || items.length === 0)
            return [];
        return items.map((line) => {
            const account = line.account || defaultAccount;
            if (!account) {
                throw new Error('Every line needs an account. Choose a "Default Account" at the top of the action, or fill in the Account ID on each line.');
            }
            return exports.wafeqHelpers.stripEmpty({
                item: line.item,
                description: line.description,
                quantity: line.quantity,
                unit_amount: line.unit_amount,
                account,
                tax_rate: line.tax_rate || defaultTaxRate,
                discount: line.discount,
            });
        });
    },
};
//# sourceMappingURL=helpers.js.map