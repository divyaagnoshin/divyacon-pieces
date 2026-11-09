import { CreateSignatureRequest, CreateSignatureResponse, ILoveApiTool, ProcessFile, ProcessRequest, ProcessResponse, StartTaskResponse } from './types';
declare function authenticate({ publicKey }: {
    publicKey: string;
}): Promise<string>;
declare function startTask({ token, tool, }: {
    token: string;
    tool: ILoveApiTool;
}): Promise<StartTaskResponse>;
declare function uploadBuffer({ token, server, task, buffer, filename, }: {
    token: string;
    server: string;
    task: string;
    buffer: Buffer;
    filename: string;
}): Promise<string>;
declare function uploadCloudUrl({ token, server, task, url, }: {
    token: string;
    server: string;
    task: string;
    url: string;
}): Promise<string>;
declare function processTask({ token, server, body, }: {
    token: string;
    server: string;
    body: ProcessRequest;
}): Promise<ProcessResponse>;
declare function downloadResult({ token, server, task, }: {
    token: string;
    server: string;
    task: string;
}): Promise<Buffer>;
declare function createSignature({ token, server, body, }: {
    token: string;
    server: string;
    body: CreateSignatureRequest;
}): Promise<CreateSignatureResponse>;
declare function getSignatureStatus({ token, tokenRequester, }: {
    token: string;
    tokenRequester: string;
}): Promise<Record<string, unknown>>;
declare function sendSignerReminder({ token, tokenRequester, }: {
    token: string;
    tokenRequester: string;
}): Promise<Record<string, unknown>>;
declare function voidSignature({ token, tokenRequester, }: {
    token: string;
    tokenRequester: string;
}): Promise<Record<string, unknown>>;
declare function increaseExpirationDays({ token, tokenRequester, days, }: {
    token: string;
    tokenRequester: string;
    days: number;
}): Promise<Record<string, unknown>>;
declare function downloadSignedFiles({ token, tokenRequester, }: {
    token: string;
    tokenRequester: string;
}): Promise<Buffer>;
declare function downloadAuditTrail({ token, tokenRequester, }: {
    token: string;
    tokenRequester: string;
}): Promise<Buffer>;
export declare const iLoveApiClient: {
    authenticate: typeof authenticate;
    startTask: typeof startTask;
    uploadBuffer: typeof uploadBuffer;
    uploadCloudUrl: typeof uploadCloudUrl;
    processTask: typeof processTask;
    downloadResult: typeof downloadResult;
    createSignature: typeof createSignature;
    getSignatureStatus: typeof getSignatureStatus;
    sendSignerReminder: typeof sendSignerReminder;
    voidSignature: typeof voidSignature;
    increaseExpirationDays: typeof increaseExpirationDays;
    downloadSignedFiles: typeof downloadSignedFiles;
    downloadAuditTrail: typeof downloadAuditTrail;
};
export type UploadInput = {
    kind: 'file';
    file: {
        base64: string;
        filename: string;
    };
} | {
    kind: 'url';
    url: string;
    filename?: string;
};
export type RunTaskInput = {
    publicKey: string;
    tool: ILoveApiTool;
    uploads: UploadInput[];
    options?: Record<string, unknown> | ((extraServerFilenames: string[]) => Record<string, unknown>);
    output_filename?: string;
    packaged_filename?: string;
    perFileOverrides?: Array<Partial<Pick<ProcessFile, 'rotate' | 'password'>>>;
    extraUploads?: UploadInput[];
};
export type RunTaskResult = {
    buffer: Buffer;
    downloadFilename: string;
    process: ProcessResponse;
    uploadedExtraFilenames: string[];
};
declare function runTask({ publicKey, tool, uploads, options, output_filename, packaged_filename, perFileOverrides, extraUploads, }: RunTaskInput): Promise<RunTaskResult>;
export declare const iLoveApi: {
    runTask: typeof runTask;
    authenticate: typeof authenticate;
    startTask: typeof startTask;
    uploadBuffer: typeof uploadBuffer;
    uploadCloudUrl: typeof uploadCloudUrl;
    processTask: typeof processTask;
    downloadResult: typeof downloadResult;
    createSignature: typeof createSignature;
    getSignatureStatus: typeof getSignatureStatus;
    sendSignerReminder: typeof sendSignerReminder;
    voidSignature: typeof voidSignature;
    increaseExpirationDays: typeof increaseExpirationDays;
    downloadSignedFiles: typeof downloadSignedFiles;
    downloadAuditTrail: typeof downloadAuditTrail;
};
export {};
//# sourceMappingURL=client.d.ts.map