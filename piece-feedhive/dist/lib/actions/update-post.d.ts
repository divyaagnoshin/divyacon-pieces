export declare const updatePostAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    post_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    scheduled_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    accounts: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    labels: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    short_link_enabled: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-post.d.ts.map