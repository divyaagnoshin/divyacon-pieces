export declare const createLead: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    contacts: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    statusId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    customFields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-lead.d.ts.map