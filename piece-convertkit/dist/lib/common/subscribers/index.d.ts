export declare const subscriberId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const subscriberEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const subscriberEmailOptional: {
    required: boolean;
    displayName: string;
    description?: string | undefined;
    valueSchema: string;
    type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
    defaultValue?: string | undefined;
};
export declare const subscriberFirstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const subscribersPageNumber: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const from: import("@agnocon/pieces-framework").DateTimeProperty<false>;
export declare const to: import("@agnocon/pieces-framework").DateTimeProperty<false>;
export declare const updatedFrom: import("@agnocon/pieces-framework").DateTimeProperty<false>;
export declare const updatedTo: import("@agnocon/pieces-framework").DateTimeProperty<false>;
export declare const sortOrder: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
export declare const sortField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
//# sourceMappingURL=index.d.ts.map