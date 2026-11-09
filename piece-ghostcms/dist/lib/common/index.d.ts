export declare const common: {
    properties: {
        newsletters: (required?: boolean) => import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        member: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        author: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
    };
    jwtFromApiKey: (apiKey: string) => string;
    subscribeWebhook(auth: any, webhookType: string, webhookUrl: string): Promise<any>;
    unsubscribeWebhook(auth: any, webhookId: string): Promise<any>;
    getNewsletters(auth: any): Promise<any>;
    getMembers(auth: any): Promise<any>;
    getUsers(auth: any): Promise<any>;
    getTags(auth: any): Promise<any>;
};
//# sourceMappingURL=index.d.ts.map