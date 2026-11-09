/**
 * JSON:API Client - Two-Layer Architecture
 *
 * This module implements a two-layer approach for JSON:API operations:
 *
 * Layer 1 (Generic): Pure JSON:API operations that work with any JSON:API server
 * - jsonApi.get(), jsonApi.list(), jsonApi.create(), etc.
 * - Could be extracted to @activepieces/pieces-common for reuse across pieces
 * - Handles raw JSON:API requests, URLs, and response formats
 *
 * Layer 2 (Drupal-specific): Convenience functions for Drupal entity operations
 * - drupal.getEntity(), drupal.listEntities(), drupal.createEntity(), etc.
 * - Abstracts away entity types, bundles, and URL construction
 * - Provides clean developer experience with simple objects instead of JSON:API format
 */
import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { drupalAuth } from '../auth';
export type DrupalAuthType = AppConnectionValueForAuthProperty<typeof drupalAuth>;
export interface JsonApiResource {
    type: string;
    id?: string;
    attributes: Record<string, any>;
    relationships?: Record<string, any>;
}
export interface JsonApiResponse {
    data: JsonApiResource | JsonApiResource[];
    included?: JsonApiResource[];
    links?: Record<string, string | {
        href: string;
    }>;
    meta?: Record<string, any>;
}
/**
 * Makes a JSON:API request with proper authentication
 */
export declare function makeJsonApiRequest<T = JsonApiResponse>(auth: DrupalAuthType, endpoint: string, method?: HttpMethod, body?: any): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
/**
 * Builds JSON:API URL for entity operations
 */
export declare function getJsonApiUrl(baseUrl: string, entityType: string, bundle: string, uuid?: string): string;
/**
 * Converts simple object to JSON:API format
 */
export declare function toJsonApiFormat(entityType: string, bundle: string, data: Record<string, any>, id?: string): JsonApiResponse;
/**
 * Converts JSON:API response to simple object format
 */
export declare function fromJsonApiFormat(response: JsonApiResponse): any | any[];
/**
 * Generic JSON:API client for any JSON:API compliant server
 */
export declare const jsonApi: {
    /**
     * Fetch a single resource by full JSON:API path
     * @example jsonApi.get(auth, '/jsonapi/node/node--article/12345')
     */
    get(auth: DrupalAuthType, resourcePath: string): Promise<any>;
    /**
     * Fetch a collection of resources with optional query parameters
     * Follows pagination links if present to retrieve all requested data
     * @example jsonApi.list(auth, '/jsonapi/node/node--article', { sort: 'created', filters: { status: '1' } })
     */
    list(auth: DrupalAuthType, collectionPath: string, options?: {
        filters?: Record<string, any>;
        sort?: string;
        sortDirection?: string;
        fields?: string[];
        resourceType?: string;
        limit?: number;
    }): Promise<any[]>;
    /**
     * Create a new resource with JSON:API formatted data
     * @example jsonApi.create(auth, '/jsonapi/node/node--article', jsonApiFormattedData)
     */
    create(auth: DrupalAuthType, collectionPath: string, jsonApiData: JsonApiResponse): Promise<any>;
    /**
     * Update a resource with JSON:API formatted data
     * @example jsonApi.update(auth, '/jsonapi/node/node--article/12345', jsonApiFormattedData)
     */
    update(auth: DrupalAuthType, resourcePath: string, jsonApiData: JsonApiResponse): Promise<any>;
    /**
     * Delete a resource
     * @example jsonApi.delete(auth, '/jsonapi/node/node--article/12345')
     */
    delete(auth: DrupalAuthType, resourcePath: string): Promise<{
        success: boolean;
        message: string;
    }>;
};
/**
 * Drupal-specific entity operations with simplified API
 * Handles entity types, bundles, URL construction, and data format conversion
 */
export declare const drupal: {
    /**
     * Get a single Drupal entity by entity type, bundle, and UUID
     * @example drupal.getEntity(auth, 'node', 'article', '12345-uuid')
     */
    getEntity(auth: DrupalAuthType, entityType: string, bundle: string, uuid: string): Promise<any>;
    /**
     * List Drupal entities with optional filtering, sorting, and field selection
     * @example drupal.listEntities(auth, 'node', 'article', { filters: { status: '1' }, sort: 'created' })
     */
    listEntities(auth: DrupalAuthType, entityType: string, bundle: string, options?: {
        filters?: Record<string, any>;
        sort?: string;
        sortDirection?: string;
        fields?: string[];
        limit?: number;
    }): Promise<any[]>;
    /**
     * Create a new Drupal entity with simple object data (automatically converts to JSON:API format)
     * @example drupal.createEntity(auth, 'node', 'article', { title: 'My Article', body: 'Content...' })
     */
    createEntity(auth: DrupalAuthType, entityType: string, bundle: string, entityData: Record<string, any>): Promise<any>;
    /**
     * Update a Drupal entity with simple object data (automatically converts to JSON:API format)
     * @example drupal.updateEntity(auth, 'node', 'article', '12345-uuid', { title: 'Updated Title' })
     */
    updateEntity(auth: DrupalAuthType, entityType: string, bundle: string, uuid: string, entityData: Record<string, any>): Promise<any>;
    /**
     * Delete a Drupal entity
     * @example drupal.deleteEntity(auth, 'node', 'article', '12345-uuid')
     */
    deleteEntity(auth: DrupalAuthType, entityType: string, bundle: string, uuid: string): Promise<{
        success: boolean;
        message: string;
    }>;
};
//# sourceMappingURL=jsonapi.d.ts.map