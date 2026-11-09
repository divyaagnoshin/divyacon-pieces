declare enum ResponseType {
    JSON = "json",
    RAW = "raw",
    REDIRECT = "redirect"
}
export declare const returnResponseAndWaitForNextWebhook: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    responseType: import("@agnocon/pieces-framework").StaticDropdownProperty<ResponseType, false>;
    fields: import("@agnocon/pieces-framework").DynamicProperties<true, undefined>;
}>;
export {};
//# sourceMappingURL=return-response-and-wait-for-next-webhook.d.ts.map