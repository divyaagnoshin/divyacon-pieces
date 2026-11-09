export interface HedyAuthValue {
    apiKey: string;
    region: string;
}
export declare const hedyAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=index.d.ts.map