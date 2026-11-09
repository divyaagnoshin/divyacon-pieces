export declare const moveContentObjectAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseurl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    CAMNamespace: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    sourceId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseurl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        CAMNamespace: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    destinationId: {
        displayName: string;
        description: string;
        auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
            baseurl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            CAMNamespace: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>;
        refreshers: string[];
        refreshOnSearch?: boolean;
        options: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/pieces-framework").CustomAuthConnectionValue<import("@agnocon/pieces-framework").StaticPropsValue<{
                baseurl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
                CAMNamespace: import("@agnocon/pieces-framework").ShortTextProperty<true>;
                username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
                password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
            }>> | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").DropdownState<unknown>>;
        valueSchema: unknown;
        type: import("@agnocon/pieces-framework").PropertyType.DROPDOWN;
        required: true;
        defaultValue?: unknown;
    };
}>;
//# sourceMappingURL=move-content-object.d.ts.map