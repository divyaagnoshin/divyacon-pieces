import { TriggerStrategy } from '@agnocon/pieces-framework';
declare enum AuthType {
    NONE = "none",
    BASIC = "basic",
    HEADER = "header",
    HMAC = "hmac"
}
export declare const catchWebhook: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    liveMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    syncMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    testMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    authType: import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, true>;
    authFields: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    liveMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    syncMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    testMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    authType: import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, true>;
    authFields: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    liveMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    syncMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    testMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    authType: import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, true>;
    authFields: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    liveMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    syncMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    testMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    authType: import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, true>;
    authFields: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
}>;
export declare function verifyHmacAuth(headers: Record<string, string>, rawBody: unknown, headerName: string | undefined, secret: string | undefined, algorithm: string, encoding: 'hex' | 'base64', signaturePrefix: string): boolean;
export {};
//# sourceMappingURL=catch-hook.d.ts.map