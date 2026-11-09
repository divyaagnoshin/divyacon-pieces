export declare const CAPTAIN_DATA_BASE_URL = "https://api.captaindata.co/v3";
export declare const captainDataAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    projectId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export type CaptainDataAuthType = {
    apiKey: string;
    projectId: string;
};
export declare const captainData: import("@agnocon/pieces-framework").Piece<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    projectId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
//# sourceMappingURL=index.d.ts.map