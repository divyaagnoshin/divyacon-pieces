export declare const captureScreenshot: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customBaseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    imageType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    quality: import("@agnocon/pieces-framework").NumberProperty<false>;
    fullPage: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    width: import("@agnocon/pieces-framework").NumberProperty<false>;
    height: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForSelector: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    delay: import("@agnocon/pieces-framework").NumberProperty<false>;
    omitBackground: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    clipX: import("@agnocon/pieces-framework").NumberProperty<false>;
    clipY: import("@agnocon/pieces-framework").NumberProperty<false>;
    clipWidth: import("@agnocon/pieces-framework").NumberProperty<false>;
    clipHeight: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=capture-screenshot.d.ts.map