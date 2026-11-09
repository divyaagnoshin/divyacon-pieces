export declare const listTags: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {}>;
export declare const createTag: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const tagSubscriber: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: {
        required: boolean;
        displayName: string;
        description?: string | undefined;
        auth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        refreshers: string[];
        refreshOnSearch?: boolean;
        options: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/piece-types").SecretTextConnectionValue | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").DropdownState<string>>;
        valueSchema: string[];
        type: import("@agnocon/pieces-framework").PropertyType.MULTI_SELECT_DROPDOWN;
        defaultValue?: unknown[] | undefined;
    };
    fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
export declare const removeTagFromSubscriberByEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    tagId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
export declare const removeTagFromSubscriberById: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    subscriberId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    tagId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
export declare const listSubscriptionsToATag: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    tagId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    sortOrder: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    subscriberState: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=tags.d.ts.map