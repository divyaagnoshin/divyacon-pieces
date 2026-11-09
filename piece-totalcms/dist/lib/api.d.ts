import { QueryParams } from '@agnocon/pieces-common';
import { TotalCMSAuthType } from './auth';
export type KeyValuePair = {
    [key: string]: string | boolean | number | object | undefined;
};
export type FileUpload = {
    filename: string;
    base64: string;
};
export declare function saveFile(auth: TotalCMSAuthType, slug: string, file: FileUpload, data: KeyValuePair): Promise<{
    success: boolean;
    data: any;
}>;
export declare function saveDepot(auth: TotalCMSAuthType, slug: string, file: FileUpload): Promise<{
    success: boolean;
    data: any;
}>;
export declare function saveImage(auth: TotalCMSAuthType, slug: string, file: FileUpload, data: KeyValuePair): Promise<{
    success: boolean;
    data: any;
}>;
export declare function saveGallery(auth: TotalCMSAuthType, slug: string, file: FileUpload, data: KeyValuePair): Promise<{
    success: boolean;
    data: any;
}>;
export declare function saveBlogImage(auth: TotalCMSAuthType, slug: string, file: FileUpload, data: KeyValuePair): Promise<{
    success: boolean;
    data: any;
}>;
export declare function saveBlogGallery(auth: TotalCMSAuthType, slug: string, file: FileUpload, data: KeyValuePair): Promise<{
    success: boolean;
    data: any;
}>;
export declare function saveContent(auth: TotalCMSAuthType, type: string, slug: string, data: KeyValuePair): Promise<{
    success: boolean;
    data: any;
}>;
export declare function getContent(auth: TotalCMSAuthType, type: string, slug: string, query?: QueryParams): Promise<{
    success: boolean;
    data: any;
}>;
export declare function getBlogPost(auth: TotalCMSAuthType, slug: string, permalink: string): Promise<{
    success: boolean;
    data: any;
}>;
//# sourceMappingURL=api.d.ts.map