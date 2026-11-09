"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currenciesEntityNumberProps = exports.currenciesEntityProps = void 0;
exports.currenciesEntityProps = [
    {
        name: 'displayName',
        displayName: 'Display Name',
        type: 'text',
        isRequired: false,
    },
    {
        name: 'code',
        displayName: 'Code',
        type: 'text',
        isRequired: false,
    },
    {
        name: 'amountDecimalPlaces',
        displayName: 'Amount Decimal Places',
        description: 'Specifies the number of decimal places the system will display on amounts for this currency.',
        type: 'text',
        isRequired: false,
    },
    {
        name: 'amountRoundingPrecision',
        displayName: 'Amount Rounding Precision',
        type: 'number',
        isRequired: false,
    },
];
exports.currenciesEntityNumberProps = ['amountRoundingPrecision'];
//# sourceMappingURL=currencies.entity.js.map