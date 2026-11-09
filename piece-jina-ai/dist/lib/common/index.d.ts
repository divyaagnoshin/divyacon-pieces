import { HttpMethod } from '@agnocon/pieces-common';
export declare const JinaAICommon: {
    baseUrl: string;
    readerUrl: string;
    readerSearchUrl: string;
    euReaderUrl: string;
    euReaderSearchUrl: string;
    deepsearchUrl: string;
    classifierUrl: string;
    classifierTrainUrl: string;
    makeRequest({ url, method, auth, body, headers, }: {
        url: string;
        method: HttpMethod;
        auth: string;
        body?: Record<string, unknown>;
        headers?: Record<string, string>;
    }): Promise<any>;
};
//# sourceMappingURL=index.d.ts.map