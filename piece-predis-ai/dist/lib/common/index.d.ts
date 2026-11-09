import { HttpMethod } from '@agnocon/pieces-common';
export declare const predisAiCommon: {
    baseUrl: string;
};
export declare function predisAiApiCall<T>(apiKey: string, method: HttpMethod, endpoint: string, body?: Record<string, unknown>): Promise<T>;
export declare const INPUT_LANGUAGES: {
    label: string;
    value: string;
}[];
export declare const OUTPUT_LANGUAGES: {
    label: string;
    value: string;
}[];
export declare const MEDIA_TYPES: {
    label: string;
    value: string;
}[];
export declare const POST_TYPES: {
    label: string;
    value: string;
}[];
export declare const MODEL_VERSIONS: {
    label: string;
    value: string;
}[];
export declare const VIDEO_DURATIONS: {
    label: string;
    value: string;
}[];
export declare const COLOR_PALETTE_TYPES: {
    label: string;
    value: string;
}[];
//# sourceMappingURL=index.d.ts.map