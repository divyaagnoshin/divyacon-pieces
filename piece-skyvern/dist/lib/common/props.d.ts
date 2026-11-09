export interface ListWorkflowResponse {
    workflow_permanent_id: string;
    title: string;
    workflow_definition: {
        parameters: {
            parameter_type: string;
            key: string;
            workflow_parameter_type: string;
            default_value: any;
        }[];
    };
}
export declare const workflowId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const workflowParams: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
//# sourceMappingURL=props.d.ts.map