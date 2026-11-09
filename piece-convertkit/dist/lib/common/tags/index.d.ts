export declare const tagId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const tagsRequired: {
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
export declare const tag: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const tagsPageNumber: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const sortOrder: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const subscriberState: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const tagIdByEmail: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const tagIdBySubscriberId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
//# sourceMappingURL=index.d.ts.map