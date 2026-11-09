export declare const updateContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fields: {
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
}>;
//# sourceMappingURL=update-contact.d.ts.map