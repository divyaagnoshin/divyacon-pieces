export declare const addContactAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    listNames: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<"Transactional" | "Engaged" | "Active" | "Bounced" | "Unsubscribed" | "Abuse" | "Inactive" | "Stale" | "NotConfirmed", false>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customFields: import("@agnocon/pieces-framework").ObjectProperty<false>;
    consentIP: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    consentDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    consentTracking: import("@agnocon/pieces-framework").StaticDropdownProperty<"Unknown" | "Allow" | "Deny", false>;
}>;
//# sourceMappingURL=add-contact.d.ts.map