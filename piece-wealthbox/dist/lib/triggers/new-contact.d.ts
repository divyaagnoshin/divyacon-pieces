import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newContact: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    contact_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    household_title: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tags_filter: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    active: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    include_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    contact_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    household_title: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tags_filter: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    active: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    include_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    contact_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    household_title: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tags_filter: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    active: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    include_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    contact_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    household_title: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tags_filter: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    active: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    include_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=new-contact.d.ts.map