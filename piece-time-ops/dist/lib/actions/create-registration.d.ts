export declare const createRegistration: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    userId: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    startedAt: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    stoppedAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    projectId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    billable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-registration.d.ts.map