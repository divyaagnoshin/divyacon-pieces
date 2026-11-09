export declare const createDraftAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    social_set_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    platforms: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    draft_title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    share: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    publish_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    reply_to_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-draft.action.d.ts.map