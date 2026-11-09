import { docs_v1 } from '@googleapis/docs';
export declare const docsCommon: {
    baseUrl: string;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    createDocument: (title: string, accessToken: string) => Promise<any>;
    writeToDocument: (documentId: string, body: string, accessToken: string) => Promise<any>;
    markdownToBatchRequests: (markdown: string, baseIndex?: number) => docs_v1.Schema$Request[];
    formatError: (error: any, action: string) => string;
};
//# sourceMappingURL=index.d.ts.map