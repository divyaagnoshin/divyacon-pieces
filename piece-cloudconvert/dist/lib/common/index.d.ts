import { CloudConvertClient } from './client';
export { cloudconvertAuth } from './auth';
export { CloudConvertClient } from './client';
export { convertFileProps } from './properties';
export { convertFileSchema, captureWebsiteSchema, mergePdfSchema, downloadFileSchema, archiveFileSchema, optimizeFileSchema } from './schemas';
export declare const cloudconvertCommon: {
    baseUrl: (region?: string) => "https://eu-central.api.cloudconvert.com/v2" | "https://us-east.api.cloudconvert.com/v2" | "https://api.cloudconvert.com/v2";
    createClient(auth: any): CloudConvertClient;
};
//# sourceMappingURL=index.d.ts.map