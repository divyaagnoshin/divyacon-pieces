export declare const websocketCommon: {
    connectionType: string;
    auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
        proxyBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>;
    apiCall: (url: string, method: string, data?: object | undefined) => Promise<any>;
};
//# sourceMappingURL=common.d.ts.map