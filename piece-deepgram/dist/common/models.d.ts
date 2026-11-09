declare function fetchSttModelOptions({ apiKey, }: {
    apiKey: string;
}): Promise<ModelOption[]>;
declare function fetchTtsModelOptions({ apiKey, }: {
    apiKey: string;
}): Promise<ModelOption[]>;
export declare const deepgramModels: {
    fetchSttModelOptions: typeof fetchSttModelOptions;
    fetchTtsModelOptions: typeof fetchTtsModelOptions;
};
type ModelOption = {
    label: string;
    value: string;
};
export {};
//# sourceMappingURL=models.d.ts.map