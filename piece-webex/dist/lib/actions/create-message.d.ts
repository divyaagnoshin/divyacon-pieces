export declare const createMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    messageType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    destination: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    markdown: import("@agnocon/pieces-framework").LongTextProperty<false>;
    parentId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    files: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-message.d.ts.map