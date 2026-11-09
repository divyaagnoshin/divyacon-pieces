import { AppConnectionValueForAuthProperty } from "@agnocon/pieces-framework";
import { canvaAuth } from "src";
export declare const canvaCommon: {
    baseUrl: string;
};
export type canvaAuthType = AppConnectionValueForAuthProperty<typeof canvaAuth>;
export interface DesignTypeInput {
    type: 'preset' | 'custom';
    name?: 'doc' | 'whiteboard' | 'presentation';
    width?: number;
    height?: number;
}
export interface CanvaDesignCreateRequest {
    design_type?: DesignTypeInput;
    asset_id?: string;
    title?: string;
}
export interface TeamUserSummary {
    user_id: string;
    team_id: string;
}
export interface DesignLinks {
    edit_url: string;
    view_url: string;
}
export interface Thumbnail {
    width: number;
    height: number;
    url: string;
}
export interface Design {
    id: string;
    title?: string;
    owner: TeamUserSummary;
    urls: DesignLinks;
    created_at: number;
    updated_at: number;
    thumbnail?: Thumbnail;
    page_count?: number;
}
export interface CanvaDesignResponse {
    design: Design;
}
export interface Folder {
    id: string;
    name: string;
    created_at: number;
    updated_at: number;
    thumbnail?: Thumbnail;
}
export interface FolderResponse {
    folder: Folder;
}
export interface AssetSummary {
    type: 'image' | 'video';
    id: string;
    name: string;
    tags: string[];
    created_at: number;
    updated_at: number;
    thumbnail?: Thumbnail;
}
export interface FolderItemSummary {
    type: 'folder' | 'design' | 'image';
    folder?: Folder;
    design?: DesignSummary;
    image?: AssetSummary;
}
export interface ListFolderItemsResponse {
    items: FolderItemSummary[];
    continuation?: string;
}
export interface AssetUploadMetadata {
    name_base64: string;
}
export interface AssetUploadError {
    code: 'file_too_big' | 'import_failed' | 'fetch_failed';
    message: string;
}
export interface ImportError {
    code: 'file_too_big' | 'import_failed';
    message: string;
}
export interface ImportStatus {
    state: 'failed' | 'in_progress' | 'success';
    error?: ImportError;
}
export interface Asset {
    type: 'image' | 'video';
    id: string;
    name: string;
    tags: string[];
    created_at: number;
    updated_at: number;
    thumbnail?: Thumbnail;
    import_status?: ImportStatus;
}
export interface AssetUploadJob {
    id: string;
    status: 'failed' | 'in_progress' | 'success';
    error?: AssetUploadError;
    asset?: Asset;
}
export interface AssetUploadResponse {
    job: AssetUploadJob;
}
export interface AssetResponse {
    asset: Asset;
}
export interface DesignImportMetadata {
    title_base64: string;
    mime_type?: string;
}
export interface DesignSummary {
    id: string;
    title?: string;
    url?: string;
    urls: DesignLinks;
    created_at: number;
    updated_at: number;
    thumbnail?: Thumbnail;
    page_count?: number;
}
export interface DesignImportJobResult {
    designs: DesignSummary[];
}
export interface DesignImportError {
    code: 'design_creation_throttled' | 'design_import_throttled' | 'duplicate_import' | 'internal_error' | 'invalid_file' | 'fetch_failed';
    message: string;
}
export interface DesignImportJob {
    id: string;
    status: 'failed' | 'in_progress' | 'success';
    result?: DesignImportJobResult;
    error?: DesignImportError;
}
export interface DesignImportResponse {
    job: DesignImportJob;
}
export interface ExportFormat {
    type: 'pdf' | 'jpg' | 'png' | 'gif' | 'pptx' | 'mp4';
    quality?: number | string;
    pages?: number[];
    export_quality?: 'regular' | 'pro';
    size?: 'a4' | 'a3' | 'letter' | 'legal';
    height?: number;
    width?: number;
    lossless?: boolean;
    transparent_background?: boolean;
    as_single_image?: boolean;
}
export interface ExportError {
    code: 'license_required' | 'approval_required' | 'internal_failure';
    message: string;
}
export interface ExportJob {
    id: string;
    status: 'failed' | 'in_progress' | 'success';
    urls?: string[];
    error?: ExportError;
}
export interface ExportRequest {
    design_id: string;
    format: ExportFormat;
}
export interface ExportResponse {
    job: ExportJob;
}
export declare const SUPPORTED_IMAGE_FORMATS: string[];
export declare const SUPPORTED_VIDEO_FORMATS: string[];
export declare const SUPPORTED_IMPORT_FORMATS: {
    ext: string;
    mime: string;
    name: string;
}[];
export declare const EXPORT_FORMATS: {
    value: string;
    label: string;
}[];
export declare const PDF_SIZES: {
    value: string;
    label: string;
}[];
export declare const MP4_QUALITIES: {
    value: string;
    label: string;
}[];
export declare const MAX_IMAGE_SIZE_MB = 50;
export declare const MAX_VIDEO_SIZE_MB = 500;
export declare const MAX_ASSET_NAME_LENGTH = 50;
export declare const MAX_DESIGN_TITLE_LENGTH = 50;
export declare const MIN_EXPORT_DIMENSION = 40;
export declare const MAX_EXPORT_DIMENSION = 25000;
export declare function fetchUserDesigns(auth: canvaAuthType, query?: string): Promise<Array<{
    label: string;
    value: string;
}>>;
export declare function fetchUserAssets(auth: canvaAuthType, assetType?: 'image' | 'video'): Promise<Array<{
    label: string;
    value: string;
}>>;
export declare function fetchUserFolders(auth: canvaAuthType): Promise<Array<{
    label: string;
    value: string;
}>>;
//# sourceMappingURL=index.d.ts.map