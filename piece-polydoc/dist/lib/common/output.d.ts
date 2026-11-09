import type { PolyDocResponse } from './client';
import type { PolyDocOperation } from './types';
interface FilesWriter {
    write(params: {
        fileName: string;
        data: Buffer;
    }): Promise<string>;
}
interface ShapeOutputParams {
    response: PolyDocResponse;
    isBinary: boolean;
    files: FilesWriter;
    operation: PolyDocOperation;
    filename?: string;
    imageType?: string;
}
/**
 * Turn a PolyDoc API response into an action result. Binary deliveries are
 * written to a file (returning a file handle plus metadata); cloud-storage,
 * webhook, and screenshot-base64 deliveries return the API's JSON as-is.
 */
export declare function shapeOutput(params: ShapeOutputParams): Promise<unknown>;
export {};
//# sourceMappingURL=output.d.ts.map