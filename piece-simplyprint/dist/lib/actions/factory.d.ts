/**
 * Factory for the printer-action class of endpoints (pause, resume, cancel).
 * They take a printer id via the `pid` query param and no body.
 *
 * Printer ID is a free-form Number — automation flows always source it from
 * an upstream step (trigger payload, "List Printers" output, MCP response, …)
 * rather than hand-picking a printer at design time, so a fleet dropdown
 * would be friction.
 */
export declare function createPrinterAction(opts: {
    name: string;
    displayName: string;
    description: string;
    path: string;
    aiMetadata?: {
        description: string;
        idempotent?: boolean;
    };
}): import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    printerId: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=factory.d.ts.map