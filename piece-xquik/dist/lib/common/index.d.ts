declare function cleanQueryParams(params: Record<string, boolean | number | string | null | undefined>): Record<string, string>;
declare function encodePathPart(value: string): string;
declare function requireText({ name, value }: {
    name: string;
    value: string;
}): string;
declare function stripAtPrefix(value: string): string;
declare function get({ apiKey, path, queryParams, }: XquikGetParams): Promise<unknown>;
export declare const xquikCommon: {
    api: {
        get: typeof get;
    };
    config: {
        apiContract: string;
        baseUrl: string;
        userAgent: string;
    };
    utils: {
        cleanQueryParams: typeof cleanQueryParams;
        encodePathPart: typeof encodePathPart;
        requireText: typeof requireText;
        stripAtPrefix: typeof stripAtPrefix;
    };
};
type XquikGetParams = {
    apiKey: string;
    path: string;
    queryParams?: Record<string, string>;
};
export {};
//# sourceMappingURL=index.d.ts.map