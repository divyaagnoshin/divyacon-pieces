export declare const posthogAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    personal_api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    project_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ingestion_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
export declare const posthog: import("@agnocon/pieces-framework").Piece<import("@agnocon/pieces-framework").CustomAuthProperty<{
    personal_api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    project_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ingestion_host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>>;
export type PostHogAuth = {
    personal_api_key: string;
    project_id: string;
    api_host?: string;
    ingestion_host?: string;
};
//# sourceMappingURL=index.d.ts.map