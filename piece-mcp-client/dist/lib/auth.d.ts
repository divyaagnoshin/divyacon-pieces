import { McpAuthType, McpProtocol } from '@agnocon/pieces-framework';
export declare const mcpClientAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    protocol: import("@agnocon/pieces-framework").StaticDropdownProperty<McpProtocol, true>;
    authType: import("@agnocon/pieces-framework").StaticDropdownProperty<McpAuthType, true>;
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    apiKeyHeader: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    headers: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=auth.d.ts.map