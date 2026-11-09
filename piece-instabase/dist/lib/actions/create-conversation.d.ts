export declare const createConversationAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    ibContext: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiRoot: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    files: import("@agnocon/pieces-framework").ArrayProperty<true>;
    org: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    workspace: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    enable_object_detection: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    enable_entity_detection: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    write_converted_image: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    write_thumbnail: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    fast_mode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    enable_multilanguage_support: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    enable_multilanguage_advanced_mode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-conversation.d.ts.map