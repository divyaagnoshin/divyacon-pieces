import { Cluster, Collection, DurabilityLevel, GetResult, MutationResult } from 'couchbase';
export interface CouchbaseAuthValue {
    connectionString: string;
    username: string;
    password: string;
}
export interface LooseObject {
    [key: string]: unknown;
}
export declare function createCouchbaseClient(auth: CouchbaseAuthValue): Promise<Cluster>;
export declare function getCollection(cluster: Cluster, bucketName: string, scopeName?: string, collectionName?: string): Collection;
export declare function closeCluster(cluster: Cluster): Promise<void>;
export declare function formatMutationResult(result: MutationResult, documentId: string): {
    id: string;
    cas: string;
    success: boolean;
};
export declare function formatGetResult(result: GetResult, documentId: string): {
    id: string;
    content: unknown;
    cas: string;
};
export declare const bucketDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const scopeDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const collectionDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const documentIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const durabilityLevelDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<DurabilityLevel, false>;
export declare const couchbaseCommonProps: {
    bucket: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    scope: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    collection: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    documentIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    documentId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    documentIdOptional: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    document: import("@agnocon/pieces-framework").JsonProperty<true>;
    expiry: import("@agnocon/pieces-framework").NumberProperty<false>;
    durabilityLevel: import("@agnocon/pieces-framework").StaticDropdownProperty<DurabilityLevel, false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    arguments: import("@agnocon/pieces-framework").ArrayProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    offset: import("@agnocon/pieces-framework").NumberProperty<false>;
    vectorFilters: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    vectorOrder: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
};
//# sourceMappingURL=index.d.ts.map