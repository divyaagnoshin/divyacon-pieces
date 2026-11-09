type FileFormat = {
    url: string;
    width: number;
    height: number;
    size: number;
};
type SizeVariant = {
    gif?: FileFormat;
    webp?: FileFormat;
    jpg?: FileFormat;
    mp4?: FileFormat;
    webm?: FileFormat;
    png?: FileFormat;
};
type MediaFile = {
    hd?: SizeVariant;
    md?: SizeVariant;
    sm?: SizeVariant;
    xs?: SizeVariant;
};
type GifSticker = {
    id: number;
    slug: string;
    title: string;
    file: MediaFile;
    tags: string[];
    type: string;
    blur_preview: string;
};
type ClipFile = {
    mp4?: string;
    gif?: string;
    webp?: string;
};
type ClipFileMeta = {
    mp4?: {
        width: number;
        height: number;
    };
    gif?: {
        width: number;
        height: number;
    };
    webp?: {
        width: number;
        height: number;
    };
};
type Clip = {
    url: string;
    title: string;
    slug: string;
    file: ClipFile;
    file_meta: ClipFileMeta;
    tags: string[];
    type: string;
    blur_preview: string;
};
type SearchResponse<T> = {
    result: boolean;
    data: {
        data: T[];
        current_page: number;
        per_page: number;
        has_next: boolean;
    };
};
type SearchParams = {
    appKey: string;
    endpoint: string;
    query: string | undefined;
    page: number;
    perPage: number;
    customerId: string | undefined;
    locale: string | undefined;
    contentFilter: string | undefined;
    formatFilter?: string | undefined;
};
declare function search<T>({ appKey, endpoint, query, page, perPage, customerId, locale, contentFilter, formatFilter, }: SearchParams): Promise<SearchResponse<T>>;
declare function flattenGifSticker(item: GifSticker): {
    id: number;
    slug: string;
    title: string;
    type: string;
    tags: string;
    hd_gif_url: string | null;
    hd_webp_url: string | null;
    hd_mp4_url: string | null;
    hd_png_url: string | null;
    hd_width: number | null;
    hd_height: number | null;
    sm_gif_url: string | null;
    sm_webp_url: string | null;
    sm_width: number | null;
    sm_height: number | null;
};
declare function flattenClip(item: Clip): {
    title: string;
    slug: string;
    url: string;
    type: string;
    tags: string;
    mp4_url: string | null;
    gif_url: string | null;
    webp_url: string | null;
    mp4_width: number | null;
    mp4_height: number | null;
    gif_width: number | null;
    gif_height: number | null;
};
export declare const klipyClient: {
    search: typeof search;
    flattenGifSticker: typeof flattenGifSticker;
    flattenClip: typeof flattenClip;
};
export type { GifSticker, Clip, SearchParams };
//# sourceMappingURL=client.d.ts.map