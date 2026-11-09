export interface PromptMateApp {
    appId: string;
    appName: string;
    creditEstimate: number;
    dataFields: string[];
}
export declare const getApps: (auth: string) => Promise<PromptMateApp[]>;
export declare const getAppDropdownOptions: (auth: string) => Promise<{
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
//# sourceMappingURL=index.d.ts.map