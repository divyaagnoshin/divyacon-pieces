export declare const hmacSignature: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    secretKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretKeyEncoding: import("@agnocon/pieces-framework").StaticDropdownProperty<"base64" | "hex" | "utf-8", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"base64" | "hex" | "utf-8", true>;
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    outputEncoding: import("@agnocon/pieces-framework").StaticDropdownProperty<"base64" | "hex", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"base64" | "hex", true>;
}>;
//# sourceMappingURL=hmac-signature.d.ts.map