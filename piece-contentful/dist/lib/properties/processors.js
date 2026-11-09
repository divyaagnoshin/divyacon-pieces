"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldProcessors = void 0;
exports.FieldProcessors = {
    Link: (field, value) => {
        return {
            sys: {
                type: 'Link',
                linkType: field.linkType,
                id: value,
            },
        };
    },
    Array: (field, value) => {
        var _a, _b;
        if (((_a = field.items) === null || _a === void 0 ? void 0 : _a.type) === 'Symbol') {
            return value;
        }
        if (((_b = field.items) === null || _b === void 0 ? void 0 : _b.type) === 'Link') {
            return value.map((v) => {
                var _a;
                return ({
                    sys: {
                        type: 'Link',
                        linkType: (_a = field.items) === null || _a === void 0 ? void 0 : _a.linkType,
                        id: v,
                    },
                });
            });
        }
    },
    Basic: (field, value) => value,
};
//# sourceMappingURL=processors.js.map