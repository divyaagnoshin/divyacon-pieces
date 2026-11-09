import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { googleGeminiAuth } from '../auth';
export declare const defaultLLM = "gemini-1.5-flash";
export declare const allowedLLMs: string[];
export declare const getGeminiModelOptions: ({ auth }: {
    auth?: GeminiAuth;
}) => Promise<{
    disabled: boolean;
    placeholder: string;
    options: never[];
} | {
    disabled: boolean;
    options: {
        label: string;
        value: string;
    }[];
    placeholder?: undefined;
}>;
export declare const getGeminiTtsModelOptions: ({ auth }: {
    auth?: GeminiAuth;
}) => Promise<{
    disabled: boolean;
    placeholder: string;
    options: never[];
} | {
    disabled: boolean;
    options: {
        label: string;
        value: string;
    }[];
    placeholder?: undefined;
}>;
export declare const getGeminiVideoModelOptions: ({ auth, }: {
    auth?: GeminiAuth;
}) => Promise<{
    disabled: boolean;
    placeholder: string;
    options: never[];
} | {
    disabled: boolean;
    options: {
        label: string;
        value: string;
    }[];
    placeholder?: undefined;
}>;
type GeminiAuth = AppConnectionValueForAuthProperty<typeof googleGeminiAuth>;
export {};
//# sourceMappingURL=common.d.ts.map