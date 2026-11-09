export declare const createContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    contact_book: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    middle_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phonetic_first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phonetic_last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phonetic_middle_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    prefix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    suffix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    nickname: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    file_as: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    starred: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    gender: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    infos: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    memberships: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-contact.d.ts.map