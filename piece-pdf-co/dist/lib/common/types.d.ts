export interface PdfCoSuccessResponse {
    url: string;
    pageCount: number;
    error: false;
    status: number;
    name: string;
    remainingCredits: number;
    credits: number;
}
export interface PdfCoErrorResponse {
    error: true;
    status: number;
    message?: string;
    [key: string]: unknown;
}
export interface PdfCoImageAnnotation {
    url: string;
    x: number;
    y: number;
    pages?: string;
    width?: number;
    height?: number;
    link?: string;
    keepAspectRatio?: boolean;
}
export interface PdfCoAddImagesRequestBody {
    url: string;
    images: PdfCoImageAnnotation[];
    async: boolean;
    inline: boolean;
    name?: string;
    password?: string;
    expiration?: number;
    profiles?: Record<string, unknown>;
    httpusername?: string;
    httppassword?: string;
}
//# sourceMappingURL=types.d.ts.map