export declare const twilioMakeCall: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").BasicAuthProperty, {
    from: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    voice: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sendDigits: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=make-call.d.ts.map