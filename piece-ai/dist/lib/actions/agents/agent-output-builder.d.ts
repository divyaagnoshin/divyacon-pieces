import { AgentResult, AgentTaskStatus, AgentTool } from '@agnocon/pieces-framework';
export declare const agentOutputBuilder: (prompt: string) => {
    setStatus(_status: AgentTaskStatus): void;
    setToolMap(map: ToolKeyToAgentTool): void;
    setStructuredOutput(output: Record<string, unknown>): void;
    appendErrorToStructuredOutput(errorDetails: unknown): void;
    fail({ message }: FinishParams): void;
    addMarkdown(markdown: string): void;
    startToolCall({ toolName, toolCallId, input }: StartToolCallParams): void;
    finishToolCall({ toolCallId, output }: FinishToolCallParams): void;
    failToolCall({ toolCallId }: FailToolCallParams): void;
    hasTextContent(): boolean;
    build(): AgentResult;
};
type FinishToolCallParams = {
    toolCallId: string;
    output: Record<string, unknown>;
};
type FailToolCallParams = {
    toolCallId: string;
};
type StartToolCallParams = {
    toolName: string;
    toolCallId: string;
    input: Record<string, unknown>;
};
type FinishParams = {
    message?: string;
};
export type ToolKeyToAgentTool = Record<string, AgentTool>;
export {};
//# sourceMappingURL=agent-output-builder.d.ts.map