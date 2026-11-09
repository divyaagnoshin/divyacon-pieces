import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { grokAuth } from './auth';
export interface XaiChoice {
    index: number;
    message: {
        role: string;
        content: string | null;
        reasoning_content?: string | null;
        refusal?: string | null;
        tool_calls?: any[];
    };
    finish_reason: string | null;
    logprobs?: any;
}
export interface XaiUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    prompt_tokens_details?: any;
    completion_tokens_details?: any;
    num_sources_used?: number;
}
export interface XaiResponse {
    body: {
        id: string;
        object: string;
        created: number;
        model: string;
        choices: XaiChoice[];
        usage?: XaiUsage;
        citations?: string[];
        debug_output?: any;
        system_fingerprint?: string | null;
    };
}
export interface AskGrokResult {
    content: string | null;
    reasoning_content?: string | null;
    refusal?: string | null;
    role: string;
    finish_reason: string | null;
    index: number;
    model: string;
    id: string;
    created: number;
    object: string;
    system_fingerprint?: string | null;
    tool_calls?: any[];
    logprobs?: any;
    all_choices?: XaiChoice[];
    usage?: XaiUsage;
    citations?: string[];
    debug_output?: any;
}
export interface CategorizationResult {
    categories: any;
    reasoning: any;
    primary_category: any;
    multiple_categories?: boolean;
    total_categories_assigned: any;
    model: string;
    finish_reason: string | null;
    confidence_scores?: any;
    avg_confidence?: any;
    max_confidence?: any;
    min_confidence?: any;
    usage?: XaiUsage;
    citations?: string[];
    reasoning_content?: string | null;
}
export interface ExtractionResult {
    extracted_data: any;
    extraction_notes: any;
    extraction_success: any;
    fields_extracted: number;
    fields_requested: number;
    completion_rate: number;
    model: string;
    finish_reason: string | null;
    confidence_scores?: any;
    avg_confidence?: any;
    max_confidence?: any;
    min_confidence?: any;
    required_fields_found?: any;
    required_fields_missing?: any;
    usage?: XaiUsage;
    citations?: string[];
    reasoning_content?: string | null;
}
export declare const createModelProperty: (config?: {
    displayName?: string;
    description?: string;
    defaultValue?: string;
    filterForImages?: boolean;
}) => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const createTemperatureProperty: (defaultValue?: number) => import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const createTokenProperty: (defaultValue?: number) => import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const createSearchProperties: () => {
    enableContextSearch: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeCitations: import("@agnocon/pieces-framework").CheckboxProperty<false>;
};
export declare const createAdvancedProperties: () => {
    reasoningEffort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export declare const makeXaiRequest: ({ secret_text }: AppConnectionValueForAuthProperty<typeof grokAuth>, requestBody: any, timeout: number, operation: string) => Promise<XaiResponse>;
export declare const validateResponse: (response: XaiResponse, operation: string) => {
    choice: XaiChoice;
    content: string;
};
export declare const parseJsonResponse: (content: string, operation: string) => any;
//# sourceMappingURL=utils.d.ts.map