export declare const startPrintAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    printerIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    fileSource: import("@agnocon/pieces-framework").StaticDropdownProperty<"apiFile" | "userFile" | "queueItem", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"apiFile" | "userFile" | "queueItem", true>;
    apiFileId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    userFileUid: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    queueItemId: import("@agnocon/pieces-framework").NumberProperty<false>;
    sharedCustomFields: import("@agnocon/pieces-framework").ObjectProperty<false>;
    individualCustomFields: import("@agnocon/pieces-framework").LongTextProperty<false>;
    startOptions: import("@agnocon/pieces-framework").ObjectProperty<false>;
    mmsMap: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=start-print.d.ts.map