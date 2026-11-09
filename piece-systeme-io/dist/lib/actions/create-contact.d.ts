export declare const createContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    locale: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    dynamicContactFields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    customFields: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    tagSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    existingTags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    newTagNames: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
}>;
//# sourceMappingURL=create-contact.d.ts.map