/**
 * The JSON envelope FileToPDF returns when the request sends `Accept: application/json`.
 */
export interface PdfJsonEnvelope {
    status: string;
    data?: {
        pdf?: string;
        filename?: string;
        pages?: number;
        size_bytes?: number;
        credits_used?: number;
        credits_remaining?: number;
    };
}
/** Minimal shape of the Activepieces files service (context.files). */
export interface FilesService {
    write(input: {
        fileName: string;
        data: Buffer;
    }): Promise<string>;
}
/** The output every conversion action returns. */
export interface ConversionOutput {
    file: string;
    filename: string;
    pages: number | undefined;
    fileSize: number | undefined;
    creditsUsed: number | undefined;
    creditsRemaining: number | undefined;
}
/**
 * Coerce option values to the strings the API/Gotenberg expects. The backend's
 * form handling chokes on raw booleans/numbers, so booleans become "true"/"false"
 * and numbers become their string form. Empty/null/undefined values are dropped.
 * (`false` and `0` are kept — only empty strings and null/undefined are removed.)
 */
export declare function stringifyOptions(options: Record<string, unknown> | undefined): Record<string, string>;
/**
 * Decode a base64 PDF envelope and write it as a real Activepieces file so
 * downstream steps (Google Drive, Dropbox, Email…) can consume it. Returns the
 * file reference plus friendly metadata. Mirrors the Zapier/Pipedream output shape.
 */
export declare function buildConversionOutput(files: FilesService, envelope: PdfJsonEnvelope): Promise<ConversionOutput>;
//# sourceMappingURL=conversion.d.ts.map