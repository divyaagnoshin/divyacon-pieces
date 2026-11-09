import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { Folder, FolderCreateRequest, FolderCreateResponse, FolderGetRequest, FolderHierarchy, FolderListRequest } from './models/folder';
import { ActionResponse } from './models/common';
import { Paste, PasteCreateRequest, PasteCreateResponse, PasteEditRequest, PasteListRequest, PasteShareRequest } from './models/paste';
export declare class PastefyClient {
    private apiKey?;
    private instanceUrl;
    constructor(apiKey?: string | undefined, instanceUrl?: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, url: string, query?: QueryParams, body?: object): Promise<T>;
    createFolder(request: FolderCreateRequest): Promise<FolderCreateResponse>;
    listFolders(request: FolderListRequest): Promise<Folder[]>;
    getFolder(id: string, request?: FolderGetRequest): Promise<Folder>;
    getFolderHierarchy(parentId?: string): Promise<FolderHierarchy[]>;
    deleteFolder(id: string): Promise<ActionResponse>;
    createPaste(request: PasteCreateRequest): Promise<PasteCreateResponse>;
    listPastes(request: PasteListRequest): Promise<Paste[]>;
    getPaste(id: string): Promise<Paste>;
    editPaste(id: string, request: PasteEditRequest): Promise<ActionResponse>;
    deletePaste(id: string): Promise<ActionResponse>;
    sharePaste(id: string, request: PasteShareRequest): Promise<ActionResponse>;
}
//# sourceMappingURL=client.d.ts.map