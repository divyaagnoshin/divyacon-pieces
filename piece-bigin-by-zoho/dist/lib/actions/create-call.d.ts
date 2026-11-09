export declare const createCall: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    callStartTime: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    callDuration: import("@agnocon/pieces-framework").NumberProperty<true>;
    callType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    owner: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contactName: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    callAgenda: import("@agnocon/pieces-framework").LongTextProperty<false>;
    reminder: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    dialledNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    relatedModule: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    relatedTo: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    tag: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-call.d.ts.map