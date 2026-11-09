import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { ampecoAuth } from './auth';
/**
 * Ampeco API Utilities
 * Generated from API version: 3.96.4
 */
/**
 * Custom auth type for Ampeco
 */
export interface AmpecoAuthType {
    baseApiUrl: string;
    token: string;
}
/**
 * API Error response interface
 */
export interface ApiErrorResponse {
    message?: string;
    error?: string;
    status?: number;
    errors?: Record<string, string[]>;
    [key: string]: unknown;
}
/**
 * Make API call to Ampeco API
 * @param auth Authentication object
 * @param path API path or full URL
 * @param method HTTP method
 * @param body Request body
 * @param queryParams Query parameters
 * @returns API response
 */
export declare function makeAmpecoApiCall(auth: AppConnectionValueForAuthProperty<typeof ampecoAuth>, path: string, method: HttpMethod, body?: Record<string, unknown>, queryParams?: Record<string, string>): Promise<unknown>;
/**
 * Process path parameters in URL
 * @param url URL with path parameters
 * @param params Parameters object
 * @returns Processed URL
 */
export declare function processPathParameters(url: string, params: Record<string, unknown>): string;
/**
 * Reconstruct nested objects from flattened property names
 * @param params Parameters object with flattened properties
 * @returns Object with reconstructed nested structure
 */
export declare function reconstructNestedObjects(params: Record<string, unknown>): Record<string, unknown>;
/**
 * Prepare query parameters
 * @param params Parameters object
 * @param includeKeys Keys to include in query parameters (empty array means include all except internal props)
 * @returns Query parameters object
 */
export declare function prepareQueryParams(params: Record<string, unknown>, includeKeys?: string[]): Record<string, string>;
/**
 * Prepare request body from parameters
 * @param params Parameters object
 * @param includeKeys Keys to include in request body (empty array means include all except internal props)
 * @returns Request body object
 */
export declare function prepareRequestBody(params: Record<string, unknown>, includeKeys?: string[]): Record<string, unknown>;
/**
 * Paginate through API results
 * @param options Pagination options
 * @returns Combined results
 */
export declare function paginate({ auth, method, path, queryParams, body, perPage, dataPath, }: {
    auth: AppConnectionValueForAuthProperty<typeof ampecoAuth>;
    method: string;
    path: string;
    queryParams?: Record<string, string>;
    body?: Record<string, unknown>;
    perPage?: number;
    dataPath?: string;
}): Promise<unknown>;
/**
 * Extract data array from API response
 * @param response API response object
 * @param dataPath Path to data in response
 * @returns Array of data items
 */
export declare function extractDataFromResponse(response: Record<string, unknown>, dataPath?: string): unknown[];
/**
 * Handle API errors consistently
 * @param error Error object from API call
 * @throws Error with formatted error message
 */
export declare function handleApiError(error: unknown): never;
//# sourceMappingURL=utils.d.ts.map