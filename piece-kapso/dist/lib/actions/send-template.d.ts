export declare const sendTemplate: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    phoneNumberId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    template: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    headerType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    headerTextParameters: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    headerMediaUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    headerMediaFilename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    headerLocationLatitude: import("@agnocon/pieces-framework").NumberProperty<false>;
    headerLocationLongitude: import("@agnocon/pieces-framework").NumberProperty<false>;
    headerLocationName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    headerLocationAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bodyParameters: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    buttonParameters: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=send-template.d.ts.map