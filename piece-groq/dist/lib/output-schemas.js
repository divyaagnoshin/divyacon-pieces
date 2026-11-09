"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateAudioActionOutputSchema = exports.transcribeAudioActionOutputSchema = exports.askAiActionOutputSchema = void 0;
exports.askAiActionOutputSchema = {
    fields: [
        {
            key: 'answer',
            label: 'Answer',
            value: '',
            listItems: [
                {
                    key: 'Content',
                    label: 'Content',
                },
            ],
        },
    ],
};
exports.transcribeAudioActionOutputSchema = {
    fields: [
        {
            key: 'text',
            label: 'Transcribed Text',
        },
        {
            key: 'id',
            label: 'Request ID',
            value: 'x_groq.id',
        },
    ],
};
exports.translateAudioActionOutputSchema = {
    fields: [
        {
            key: 'text',
            label: 'Translated Text',
            value: 'text',
        },
    ],
};
//# sourceMappingURL=output-schemas.js.map