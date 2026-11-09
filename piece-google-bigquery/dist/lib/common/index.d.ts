import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const BASE_URL = "https://bigquery.googleapis.com/bigquery/v2";
export declare const bigQueryScopes: string[];
export declare const bigQueryAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[];
export type BigQueryAuthValue = AppConnectionValueForAuthProperty<typeof bigQueryAuth>;
export declare function getAccessToken(auth: BigQueryAuthValue): Promise<string>;
export declare const projectIdProp: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[]>;
export declare const datasetIdProp: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[]>;
export declare const tableIdProp: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[]>;
export interface BQField {
    name: string;
    type: string;
    mode?: string;
    fields?: BQField[];
}
export interface BQRow {
    f: Array<{
        v: unknown;
    }>;
}
/**
 * Converts BigQuery query result rows (f[].v format) into flat key/value objects
 * ready for spreadsheet mapping. Nested RECORD fields are JSON-stringified.
 * REPEATED fields are joined as comma-separated strings.
 */
export declare function bigQueryRowsToFlat(fields: BQField[], rows: BQRow[]): Record<string, string | number | boolean | null>[];
/**
 * Fetches a table's schema fields from the BigQuery API.
 */
export declare function getTableSchema(token: string, projectId: string, datasetId: string, tableId: string): Promise<BQField[]>;
/**
 * Submits a DML query (DELETE / UPDATE / INSERT) as a BigQuery job,
 * polls until DONE, and returns the DML statistics.
 */
export declare function runDmlQuery(token: string, projectId: string, query: string, location?: string): Promise<{
    jobId: string;
    affectedRowCount: number;
    deletedRowCount: number;
    updatedRowCount: number;
    insertedRowCount: number;
}>;
/**
 * Waits for a BigQuery job to reach DONE state by long-polling jobs.getQueryResults.
 * Returns the final response (schema + first page of rows).
 */
export declare function waitForJobResults(token: string, projectId: string, jobId: string, location?: string): Promise<{
    schema?: {
        fields: BQField[];
    };
    rows?: BQRow[];
    pageToken?: string;
    totalRows?: string;
    totalBytesProcessed?: string;
    cacheHit?: boolean;
    jobComplete: boolean;
    jobReference: {
        projectId: string;
        jobId: string;
    };
}>;
//# sourceMappingURL=index.d.ts.map