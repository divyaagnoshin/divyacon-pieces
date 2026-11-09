/**
 * Escape-hatch action: let users call any SimplyPrint REST endpoint the piece
 * doesn't wrap directly. The path is relative ("printers/Get", "queue/AddItem");
 * the company segment is auto-prefixed from the connection's bound company.
 *
 * Unlike the wrapped actions we do NOT assert on `status:false` here — users may
 * want the raw body to branch on.
 */
export declare const customApiCallAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    queryParams: import("@agnocon/pieces-framework").ObjectProperty<false>;
    body: import("@agnocon/pieces-framework").JsonProperty<false>;
    timeoutMs: import("@agnocon/pieces-framework").NumberProperty<false>;
    includeResponseHeaders: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=custom-api-call.d.ts.map