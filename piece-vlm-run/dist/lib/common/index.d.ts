import { AnalyzeAudioParams, AnalyzeDocumentParams, AnalyzeImageParams, AnalyzeVideoParams, FileResponse, GetFileParams, PredictionResponse, UploadFileParams } from './types';
export declare const vlmRunAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare const vlmRunCommon: {
    baseUrl: string;
    baseHeaders: (apiKey: string) => {
        'Content-Type': string;
        Authorization: string;
    };
    endpoints: {
        uploadFile: string;
        listFiles: string;
        analyzeAudio: string;
        analyzeImage: string;
        analyzeDocument: string;
        analyzeVideo: string;
        getresponse: string;
        getFile: (fileId: string) => string;
    };
    getresponse: (apiKey: string, requestId: string, status: string) => Promise<any>;
    uploadFile: ({ apiKey, file }: UploadFileParams) => Promise<FileResponse>;
    listFiles: (apiKey: string) => Promise<FileResponse[]>;
    analyzeAudio: ({ apiKey, ...params }: AnalyzeAudioParams) => Promise<PredictionResponse>;
    analyzeImage: ({ apiKey, ...params }: AnalyzeImageParams) => Promise<PredictionResponse>;
    analyzeDocument: ({ apiKey, ...params }: AnalyzeDocumentParams) => Promise<PredictionResponse>;
    analyzeVideo: ({ apiKey, ...params }: AnalyzeVideoParams) => Promise<PredictionResponse>;
    getFile: ({ apiKey, file_id }: GetFileParams) => Promise<FileResponse>;
};
//# sourceMappingURL=index.d.ts.map