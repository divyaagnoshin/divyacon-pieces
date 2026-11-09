export interface BirdAuthValue {
    apiKey: string;
    workspaceId: string;
    channelId: string;
}
export declare const birdAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    channelId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
//# sourceMappingURL=auth.d.ts.map