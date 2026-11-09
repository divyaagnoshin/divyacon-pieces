import { ApFile } from '@agnocon/pieces-framework';
import { Input } from 'clarifai-nodejs-grpc/proto/clarifai/api/resources_pb';
import { MultiOutputResponse, MultiInputResponse, PostWorkflowResultsResponse } from 'clarifai-nodejs-grpc/proto/clarifai/api/service_pb';
export interface CallModelRequest {
    auth: string;
    modelUrl: string;
    input: Input;
}
export interface CallWorkflowRequest {
    auth: string;
    workflowUrl: string;
    input: Input;
}
export interface CallPostInputsRequest {
    auth: string;
    userId: string;
    appId: string;
    input: Input;
}
export declare function callClarifaiModel({ auth, modelUrl, input }: CallModelRequest): Promise<MultiOutputResponse>;
export declare function callClarifaiWorkflow({ auth, workflowUrl, input, }: CallWorkflowRequest): Promise<PostWorkflowResultsResponse>;
export declare function callPostInputs({ auth, userId, appId, input, }: CallPostInputsRequest): Promise<MultiInputResponse>;
export declare function fileToInput(file: ApFile): Input;
export declare function textToInput(text: string): Input;
export declare const CommonClarifaiProps: {
    modelUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    workflowUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
};
export declare function removeListFromPropertyNames(obj: Record<string, unknown>): Record<string, unknown>;
export declare function cleanMultiOutputResponse(outputs: MultiOutputResponse): Record<string, unknown>;
export declare function cleanMultiInputResponse(inputs: MultiInputResponse): Record<string, unknown>;
export declare function cleanPostWorkflowResultsResponse(response: PostWorkflowResultsResponse): any[];
//# sourceMappingURL=index.d.ts.map