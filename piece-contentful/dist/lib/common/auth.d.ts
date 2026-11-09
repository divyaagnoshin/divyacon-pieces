export interface ContentfulAuth {
    apiKey: string;
    environment: string;
    space: string;
}
export declare const ContentfulAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    space: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=auth.d.ts.map