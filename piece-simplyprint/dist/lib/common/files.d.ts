import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
import { UploadUserFileResult } from './chunked-upload';
declare function uploadUserFile(input: UploadUserFileInput): Promise<UploadUserFileResult>;
declare function uploadUserFileFromUrl(input: UploadUserFileFromUrlInput): Promise<UploadUserFileResult>;
declare function filenameFromUrl(rawUrl: string): string | null;
export declare const simplyprintFiles: {
    uploadUserFile: typeof uploadUserFile;
    uploadUserFileFromUrl: typeof uploadUserFileFromUrl;
    filenameFromUrl: typeof filenameFromUrl;
};
export type { UploadUserFileResult } from './chunked-upload';
export interface UploadUserFileInput {
    auth: OAuth2PropertyValue;
    file: {
        filename: string;
        data: Buffer | Uint8Array;
    };
}
export interface UploadUserFileFromUrlInput {
    auth: OAuth2PropertyValue;
    url: string;
    filename: string;
}
//# sourceMappingURL=files.d.ts.map