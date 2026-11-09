export declare const voiceChange: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    language: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    voiceId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    fileUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    channelType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    pitch: import("@agnocon/pieces-framework").NumberProperty<false>;
    rate: import("@agnocon/pieces-framework").NumberProperty<false>;
    encodeOutputAsBase64: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=voice-change.d.ts.map