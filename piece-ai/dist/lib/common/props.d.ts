import { AIProviderName } from '@agnocon/pieces-framework';
type AIModelType = 'text' | 'image';
type AIPropsParams<T extends AIModelType> = {
    modelType: T;
    allowedProviders?: AIProviderName[];
};
export declare const aiProps: <T extends AIModelType>({ modelType, allowedProviders, }: AIPropsParams<T>) => {
    provider: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
};
export {};
//# sourceMappingURL=props.d.ts.map