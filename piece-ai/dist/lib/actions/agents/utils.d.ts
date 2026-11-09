import { SeekPage, PopulatedFlowSummary } from '@agnocon/pieces-framework';
import { AgentOutputField, AgentFlowTool } from '@agnocon/pieces-framework';
import { ZodObject } from 'zod';
import { Tool } from 'ai';
export declare const agentUtils: {
    isTaskCompletionToolCall: (toolName: string) => toolName is "updateTaskStatus";
    structuredOutputSchema(outputFields: AgentOutputField[]): ZodObject | undefined;
    getPrompts(userPrompt: string, options?: {
        hasKnowledgeBaseTools?: boolean;
    }): {
        prompt: string;
        system: string;
    };
    constructFlowsTools(params: ConstructFlowsToolsParams): Promise<Record<string, Tool>>;
};
type ConstructFlowsToolsParams = {
    tools: AgentFlowTool[];
    fetchFlows: (params: {
        externalIds: string[];
    }) => Promise<SeekPage<PopulatedFlowSummary>>;
    publicUrl: string;
    token: string;
};
export {};
//# sourceMappingURL=utils.d.ts.map