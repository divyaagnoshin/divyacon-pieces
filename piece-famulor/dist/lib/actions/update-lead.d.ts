export declare const updateLead: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    lead_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    campaign: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=update-lead.d.ts.map