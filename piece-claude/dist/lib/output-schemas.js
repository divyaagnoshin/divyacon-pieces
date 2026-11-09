"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractStructuredDataActionOutputSchema = exports.askClaudeActionOutputSchema = void 0;
exports.askClaudeActionOutputSchema = {
    fields: [
        {
            key: 'response',
            label: 'Response',
            value: '',
        },
    ],
};
exports.extractStructuredDataActionOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'Name',
        },
        {
            key: 'email',
            label: 'Email',
            format: 'email',
        },
        {
            key: 'phone',
            label: 'Phone',
        },
        {
            key: 'city',
            label: 'City',
        },
    ],
};
//# sourceMappingURL=output-schemas.js.map