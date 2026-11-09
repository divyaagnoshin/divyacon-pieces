import { HttpMessageBody, HttpMethod, HttpResponse } from '@agnocon/pieces-common';
export declare function wistiaApiCall<T extends HttpMessageBody>({ token, method, resourceUrl, query, body, }: {
    token: string;
    method: HttpMethod;
    resourceUrl: string;
    query?: Record<string, string | number | undefined>;
    body?: unknown;
}): Promise<HttpResponse<T>>;
export declare const wistiaCommon: {
    projectDropdown: (required: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    projectIdDropdown: (required: boolean) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    mediaDropdown: (required: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export declare function flattenMedia(media: WistiaMedia): {
    id: number;
    hashed_id: string;
    name: string;
    type: string;
    status: string | null;
    progress: number | null;
    section: string | null;
    description: string | null;
    duration: number | null;
    created: string | null;
    updated: string | null;
    thumbnail_url: string | null;
    thumbnail_width: number | null;
    thumbnail_height: number | null;
    project_id: number | null;
    project_name: string | null;
    project_hashed_id: string | null;
};
export declare function flattenProject(project: WistiaProject): {
    id: number;
    hashed_id: string;
    name: string;
    description: string | null;
    media_count: number | null;
    public: boolean | null;
    public_id: string | null;
    anonymous_can_upload: boolean | null;
    anonymous_can_download: boolean | null;
    created: string | null;
    updated: string | null;
};
export type WistiaThumbnail = {
    url: string;
    width: number;
    height: number;
};
export type WistiaMedia = {
    id: number;
    hashed_id: string;
    name: string;
    type: string;
    status?: string;
    progress?: number;
    section?: string;
    description?: string;
    duration?: number;
    created?: string;
    updated?: string;
    thumbnail?: WistiaThumbnail;
    project?: {
        id: number;
        name: string;
        hashed_id: string;
    };
};
export type WistiaProject = {
    id: number;
    hashedId: string;
    name: string;
    description?: string;
    mediaCount?: number;
    public?: boolean;
    publicId?: string;
    anonymousCanUpload?: boolean;
    anonymousCanDownload?: boolean;
    created?: string;
    updated?: string;
};
//# sourceMappingURL=index.d.ts.map