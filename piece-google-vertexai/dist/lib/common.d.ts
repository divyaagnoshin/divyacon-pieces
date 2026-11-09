import { GoogleVertexAIAuthValue } from './auth';
export declare function getVertexAILocationOptions(auth: GoogleVertexAIAuthValue | undefined): Promise<{
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
export declare function getVertexAIModelOptions(auth: GoogleVertexAIAuthValue | undefined, location: string | undefined): Promise<{
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
export declare function getVertexAIImageModelOptions(auth: GoogleVertexAIAuthValue | undefined, location: string | undefined): Promise<{
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
//# sourceMappingURL=common.d.ts.map