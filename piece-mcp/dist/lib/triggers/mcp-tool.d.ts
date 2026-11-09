import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const mcpTool: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    toolName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    toolDescription: import("@agnocon/pieces-framework").LongTextProperty<true>;
    inputSchema: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    returnsResponse: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    toolName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    toolDescription: import("@agnocon/pieces-framework").LongTextProperty<true>;
    inputSchema: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    returnsResponse: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    toolName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    toolDescription: import("@agnocon/pieces-framework").LongTextProperty<true>;
    inputSchema: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    returnsResponse: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    toolName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    toolDescription: import("@agnocon/pieces-framework").LongTextProperty<true>;
    inputSchema: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    returnsResponse: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=mcp-tool.d.ts.map