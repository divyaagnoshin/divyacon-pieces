declare function extractFilesApiId(body: unknown): ExtractedFile | null;
declare function driveChunkedUpload({ filename, data, sendPart, chunkSize, }: {
    filename: string;
    data: Buffer | Uint8Array;
    sendPart: (part: UploadPart) => Promise<UploadPartResponse>;
    chunkSize?: number;
}): Promise<UploadUserFileResult>;
declare function driveStreamedUpload({ filename, totalSize, source, sendPart, chunkSize, }: {
    filename: string;
    totalSize: number;
    source: AsyncIterable<Uint8Array>;
    sendPart: (part: UploadPart) => Promise<UploadPartResponse>;
    chunkSize?: number;
}): Promise<UploadUserFileResult>;
export declare const simplyprintChunkedUpload: {
    DEFAULT_CHUNK_SIZE: number;
    extractFilesApiId: typeof extractFilesApiId;
    driveChunkedUpload: typeof driveChunkedUpload;
    driveStreamedUpload: typeof driveStreamedUpload;
};
export interface ExtractedFile {
    id: string;
    name?: string;
    size?: number;
    expiresAt?: string;
}
export interface UploadUserFileResult {
    fileId: string;
    name?: string;
    size?: number;
    expiresAt?: string;
    raw: unknown;
}
export type UploadPart = {
    kind: 'only';
    chunk: Uint8Array;
    filename: string;
} | {
    kind: 'first';
    chunk: Uint8Array;
    filename: string;
    totalSize: number;
} | {
    kind: 'continue';
    chunk: Uint8Array;
    filename: string;
    continueToken: string;
};
export type UploadPartResponse = {
    kind: 'continue';
    continueToken: string;
} | {
    kind: 'final';
    file: ExtractedFile;
    raw: unknown;
};
export {};
//# sourceMappingURL=chunked-upload.d.ts.map