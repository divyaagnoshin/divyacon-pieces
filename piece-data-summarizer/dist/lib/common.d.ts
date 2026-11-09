type ErrorInfo = {
    value: unknown | null;
    location: number;
};
type Response = {
    hasError: true;
    error: {
        message: string;
        errors: ErrorInfo[];
    };
} | {
    hasError: false;
    values: number[];
};
export declare const common: {
    note: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    validateArray: (values: unknown[]) => Response;
};
type ValueInfo = {
    error: ErrorInfo | null;
    value: number | null;
};
export declare const checkValueIsNumber: (value: unknown, location: number) => ValueInfo;
export {};
//# sourceMappingURL=common.d.ts.map