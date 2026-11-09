export type DocusignAuthType = {
    clientId: string;
    privateKey: string;
    environment: 'demo' | 'www' | 'eu';
    impersonatedUserId: string;
    scopes: string;
};
export declare const docusign: import("@agnocon/pieces-framework").Piece<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    impersonatedUserId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    scopes: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
//# sourceMappingURL=index.d.ts.map