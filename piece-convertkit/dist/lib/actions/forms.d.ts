export declare const listForms: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {}>;
export declare const addSubscriberToForm: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    formId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    fields: {
        required: boolean;
        refreshers: string[];
        displayName: string;
        description?: string | undefined;
        auth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        props: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/piece-types").SecretTextConnectionValue | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").InputPropertyMap>;
        valueSchema: import("@agnocon/pieces-framework").DynamicPropsValue;
        type: import("@agnocon/pieces-framework").PropertyType.DYNAMIC;
        defaultValue?: unknown;
    };
}>;
export declare const listFormSubscriptions: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    formId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=forms.d.ts.map