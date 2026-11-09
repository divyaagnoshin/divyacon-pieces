declare enum ResponseType {
    JSON = "json",
    RAW = "raw",
    REDIRECT = "redirect"
}
declare enum FlowExecution {
    STOP = "stop",
    RESPOND = "respond"
}
export declare const returnResponse: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    responseType: import("@agnocon/pieces-framework").StaticDropdownProperty<ResponseType, false>;
    fields: import("@agnocon/pieces-framework").DynamicProperties<true, undefined>;
    respond: import("@agnocon/pieces-framework").StaticDropdownProperty<FlowExecution, false>;
}>;
export {};
//# sourceMappingURL=return-response.d.ts.map