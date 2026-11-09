export declare const createPost: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    organizationId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    channelIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    dueAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    schedulingType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    saveToDraft: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    imageUrls: import("@agnocon/pieces-framework").ArrayProperty<false>;
    linkUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-post.d.ts.map