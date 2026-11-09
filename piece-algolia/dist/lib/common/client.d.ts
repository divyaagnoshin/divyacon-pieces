import { AlgoliaAuthValue, AlgoliaBatchResponse, AlgoliaIndex, AlgoliaRecord } from './types';
export declare function validateAlgoliaAuth(auth: AlgoliaAuthValue): Promise<void>;
export declare function listAlgoliaIndices({ auth, limit, }: {
    auth: AlgoliaAuthValue;
    limit?: number;
}): Promise<AlgoliaIndex[]>;
export declare function saveAlgoliaRecords({ auth, indexName, records, }: {
    auth: AlgoliaAuthValue;
    indexName: string;
    records: AlgoliaRecord[];
}): Promise<AlgoliaBatchResponse>;
export declare function browseAlgoliaRecords({ auth, indexName, limit, }: {
    auth: AlgoliaAuthValue;
    indexName: string;
    limit?: number;
}): Promise<AlgoliaRecord[]>;
export declare function deleteAlgoliaRecords({ auth, indexName, objectIDs, }: {
    auth: AlgoliaAuthValue;
    indexName: string;
    objectIDs: string[];
}): Promise<AlgoliaBatchResponse>;
//# sourceMappingURL=client.d.ts.map