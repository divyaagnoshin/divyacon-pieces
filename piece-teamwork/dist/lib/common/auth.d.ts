export declare const teamworkAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export type TeamworkAuth = {
    access_token: string;
    installation: {
        apiEndPoint: string;
    };
};
//# sourceMappingURL=auth.d.ts.map