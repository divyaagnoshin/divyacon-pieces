import type { JsonObject, PolyDocOperation, PolyDocParams, PolyDocRequest } from './types';
/** Deep-merge `source` into `target` (source wins). Arrays and scalars overwrite. */
export declare function mergeDeep(target: JsonObject, source: JsonObject): JsonObject;
/**
 * Assemble the PolyDoc request body. Returns the endpoint to call, the body to
 * send, and whether the default (binary) delivery is in effect.
 */
export declare function buildRequestBody(params: PolyDocParams): PolyDocRequest;
/** Default output filename when the user did not set one. */
export declare function defaultFilename(operation: PolyDocOperation, imageType?: string): string;
//# sourceMappingURL=build-request-body.d.ts.map