export declare const createCall: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    called_at: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    caller_phone_number: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    call_for: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    caller_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    caller_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    client: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    lead: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    call_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resolved: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-call.d.ts.map