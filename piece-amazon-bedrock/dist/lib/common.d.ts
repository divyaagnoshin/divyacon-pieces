import { ModelModality } from '@aws-sdk/client-bedrock';
import { BedrockRuntimeClient, ContentBlock, ConverseResponse } from '@aws-sdk/client-bedrock-runtime';
import { ApFile, ServerContext } from '@agnocon/pieces-framework';
import { BedrockAuthProps, BedrockOidcAuthProps } from './auth';
export declare function createBedrockRuntimeClient({ auth, server, }: {
    auth: BedrockAuthProps;
    server: ServerContext;
}): Promise<BedrockRuntimeClient>;
export declare function getBedrockModelOptions(auth: BedrockAuthProps | undefined, filters?: {
    inputModality?: ModelModality;
    outputModality?: ModelModality;
    showAll?: boolean;
    useInferenceProfiles?: boolean;
}, server?: ServerContext): Promise<{
    disabled: boolean;
    placeholder: string;
    options: never[];
} | {
    disabled: boolean;
    options: {
        label: string;
        value: string;
    }[];
    placeholder?: undefined;
}>;
export declare function getTemporaryCredentials({ auth, server, durationSeconds, }: {
    auth: BedrockOidcAuthProps;
    server: ServerContext;
    durationSeconds?: number;
}): Promise<{
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string | undefined;
}>;
export declare function buildS3ContentBlock(s3Bucket: string, s3Key: string): ContentBlock;
export declare function buildFileContentBlock(file: ApFile): ContentBlock;
export declare function extractConverseTextResponse(response: ConverseResponse): {
    text: string;
    stopReason: import("@aws-sdk/client-bedrock-runtime").StopReason | undefined;
    usage: import("@aws-sdk/client-bedrock-runtime").TokenUsage | undefined;
    latencyMs: number | undefined;
};
export declare function formatBedrockError(error: unknown): string;
export declare const MIN_STS_DURATION_SECONDS = 900;
export declare const MAX_STS_DURATION_SECONDS = 43200;
export declare function isOidcAuth(auth: BedrockAuthProps): auth is BedrockOidcAuthProps;
//# sourceMappingURL=common.d.ts.map