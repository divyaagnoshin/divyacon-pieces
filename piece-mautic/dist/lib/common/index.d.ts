export declare const mauticCommon: {
    contactFields: {
        displayName: string;
        description?: string | undefined;
        auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
            base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>;
        props: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/pieces-framework").CustomAuthConnectionValue<import("@agnocon/pieces-framework").StaticPropsValue<{
                base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
                username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
                password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
            }>> | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").InputPropertyMap>;
        refreshers: string[];
        valueSchema: import("@agnocon/pieces-framework").DynamicPropsValue;
        type: import("@agnocon/pieces-framework").PropertyType.DYNAMIC;
        required: true;
        defaultValue?: unknown;
    };
    companyFields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
};
export declare const searchEntity: (url: string, searchParams: string, username: string, password: string) => Promise<Record<string, any>>;
//# sourceMappingURL=index.d.ts.map