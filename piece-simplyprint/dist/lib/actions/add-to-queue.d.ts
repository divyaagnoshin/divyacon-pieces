export declare const addToQueueAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    fileSource: import("@agnocon/pieces-framework").StaticDropdownProperty<"apiFile" | "userFile", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"apiFile" | "userFile", true>;
    apiFileId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    userFileUid: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    groupId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    amount: import("@agnocon/pieces-framework").NumberProperty<false>;
    position: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    positionNumber: import("@agnocon/pieces-framework").NumberProperty<false>;
    forPrinters: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    forModels: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    customTags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    nozzleSize: import("@agnocon/pieces-framework").NumberProperty<false>;
    nozzleType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    nozzleVolumeType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bedType: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    customFields: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=add-to-queue.d.ts.map