"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemVariantsEntityProps = void 0;
exports.itemVariantsEntityProps = [
    {
        name: 'itemId',
        displayName: 'Item ID',
        isRequired: false,
        type: 'dynamic_select',
        options: {
            sourceFieldSlug: 'items',
            labelField: 'number',
        },
    },
    {
        name: 'code',
        displayName: 'Code',
        description: 'The code of the item variant.',
        type: 'text',
        isRequired: false,
    },
    {
        name: 'description',
        displayName: 'Description',
        description: 'Specifies the description of the item variant.',
        type: 'text',
        isRequired: false,
    },
];
//# sourceMappingURL=itemVariants.entity.js.map