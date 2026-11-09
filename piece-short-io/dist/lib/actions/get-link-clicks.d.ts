export declare const getLinkClicksAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    ids: import("@agnocon/pieces-framework").ArrayProperty<true>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    endDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=get-link-clicks.d.ts.map