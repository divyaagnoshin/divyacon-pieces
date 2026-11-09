import { EmbeddingModel, LanguageModel, Tool } from "ai";
import { agentOutputBuilder } from "./agent-output-builder";
import { AgentOutputField, AgentTool } from '@agnocon/pieces-framework';
import { ActionContext } from "@agnocon/pieces-framework";
import { ProviderOptions } from "@ai-sdk/provider-utils";
import { MCPClient } from '@ai-sdk/mcp';
export declare function constructAgentTools(params: ConstructAgentToolParams): Promise<{
    tools: Record<string, Tool>;
    mcpClients: MCPClient[];
    toolKeyToAgentTool: Record<string, AgentTool>;
}>;
type ConstructAgentToolParams = {
    outputBuilder: ReturnType<typeof agentOutputBuilder>;
    structuredOutput?: AgentOutputField[];
    agentTools: AgentTool[];
    context: ActionContext;
    model: LanguageModel;
    embeddingConfig?: EmbeddingConfig;
};
type EmbeddingConfig = {
    model: EmbeddingModel;
    providerOptions: ProviderOptions;
};
export type McpServerTools = {
    mcpName: string;
    mcpClient: MCPClient;
    tools: Record<string, Tool>;
};
export {};
//# sourceMappingURL=tools.d.ts.map