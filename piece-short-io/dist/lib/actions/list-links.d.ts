export declare const listLinksAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: {
        required: true;
        description: string;
        displayName: string;
        auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>;
        refreshers: string[];
        refreshOnSearch?: boolean;
        options: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/pieces-framework").CustomAuthConnectionValue<import("@agnocon/pieces-framework").StaticPropsValue<{
                apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
            }>> | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").DropdownState<string>>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.DROPDOWN;
        defaultValue?: unknown;
    };
    folderId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    idString: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    createdAt: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    beforeDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    afterDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    dateSortOrder: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    pageToken: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=list-links.d.ts.map