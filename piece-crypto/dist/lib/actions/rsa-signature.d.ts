export declare const rsaSignature: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    privateKey: import("@agnocon/pieces-framework").LongTextProperty<true>;
    passphrase: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    outputEncoding: import("@agnocon/pieces-framework").StaticDropdownProperty<"base64" | "hex", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"base64" | "hex", true>;
}>;
//# sourceMappingURL=rsa-signature.d.ts.map