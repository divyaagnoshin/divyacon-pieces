export declare const findContact: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contact_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    external_unique_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contact_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    household_title: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tags_filter: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    active: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    include_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    updated_since: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    updated_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    return_single_result: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=find-contact.d.ts.map