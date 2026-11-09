export declare const findDocument: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    q: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    status__ne: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    template_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    form_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    folder_uuid: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    membership_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tag: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    custom_tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    created_from: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    created_to: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    completed_from: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    completed_to: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    modified_from: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    modified_to: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    count: import("@agnocon/pieces-framework").NumberProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    order_by: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    metadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=find-document.d.ts.map