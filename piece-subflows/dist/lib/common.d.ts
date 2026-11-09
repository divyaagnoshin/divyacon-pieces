import { PopulatedFlow } from "@agnocon/pieces-framework";
import { FlowsContext, ListFlowsContextParams } from "@agnocon/pieces-framework";
export declare const callableFlowKey: (runId: string) => string;
export type CallableFlowRequest = {
    data: unknown;
    callbackUrl: string;
};
export type CallableFlowResponse = {
    status: 'success' | 'error';
    data: unknown;
};
export declare const MOCK_CALLBACK_IN_TEST_FLOW_URL = "MOCK";
export declare function listFlowsWithSubflowTrigger({ flowsContext, params, }: ListParams): Promise<PopulatedFlow[]>;
export declare function findFlowByExternalIdOrThrow({ flowsContext, externalId, }: {
    flowsContext: FlowsContext;
    externalId: string | undefined;
}): Promise<PopulatedFlow>;
export declare function findEnabledSubflowOrThrow({ flowsContext, externalId, }: {
    flowsContext: FlowsContext;
    externalId: string | undefined;
}): Promise<PopulatedFlow>;
export declare function subflowDropdown({ displayName, description, }: {
    displayName: string;
    description: string;
}): import("@agnocon/pieces-framework").DropdownProperty<string, false, undefined> | import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
export declare function dispatchToSubflow({ apiUrl, flowId, parentRunId, failParentOnFailure, data, callbackUrl, retries, }: DispatchToSubflowParams): Promise<unknown>;
type ListParams = {
    flowsContext: FlowsContext;
    params?: ListFlowsContextParams;
};
type DispatchToSubflowParams = {
    apiUrl: string;
    flowId: string;
    parentRunId: string;
    failParentOnFailure: boolean;
    data: unknown;
    callbackUrl?: string;
    retries?: number;
};
export {};
//# sourceMappingURL=common.d.ts.map