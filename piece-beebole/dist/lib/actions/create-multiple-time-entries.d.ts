export declare const createMultipleTimeEntriesAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    entryType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    absence: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    company: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    project: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    subproject: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    dates: import("@agnocon/pieces-framework").ArrayProperty<true>;
    hours: import("@agnocon/pieces-framework").NumberProperty<true>;
    comment: import("@agnocon/pieces-framework").LongTextProperty<false>;
    continueOnError: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-multiple-time-entries.d.ts.map