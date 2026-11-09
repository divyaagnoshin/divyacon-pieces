import * as z from 'zod/mini';
export declare const analyzeAudioSchema: {
    audio: z.ZodMiniObject<{
        filename: z.ZodMiniString<string>;
        data: z.ZodMiniCustom<Buffer, Buffer>;
        extension: z.ZodMiniString<string>;
    }, z.z.core.$strip>;
};
export declare const analyzeImageSchema: {
    image: z.ZodMiniString<string>;
    domain: z.ZodMiniEnum<{
        "image.classification": "image.classification";
        "image.caption": "image.caption";
        "image.tv-news": "image.tv-news";
        "image.q-and-a": "image.q-and-a";
    }>;
};
export declare const analyzeDocumentSchema: {
    document: z.ZodMiniObject<{
        filename: z.ZodMiniString<string>;
        data: z.ZodMiniCustom<Buffer, Buffer>;
        extension: z.ZodMiniString<string>;
    }, z.z.core.$strip>;
    domain: z.ZodMiniEnum<{
        "document.bank-statement": "document.bank-statement";
        "document.classification": "document.classification";
        "document.invoice": "document.invoice";
        "document.markdown": "document.markdown";
        "document.q-and-a": "document.q-and-a";
        "document.receipt": "document.receipt";
        "document.resume": "document.resume";
        "document.us-drivers-license": "document.us-drivers-license";
        "document.utility-bill": "document.utility-bill";
    }>;
};
export declare const analyzeVideoSchema: {
    video: z.ZodMiniObject<{
        filename: z.ZodMiniString<string>;
        data: z.ZodMiniCustom<Buffer, Buffer>;
        extension: z.ZodMiniString<string>;
    }, z.z.core.$strip>;
    domain: z.ZodMiniEnum<{
        "video.transcription": "video.transcription";
        "video.transcription-summary": "video.transcription-summary";
        "video.product-demo-summary": "video.product-demo-summary";
        "video.conferencing-summary": "video.conferencing-summary";
        "video.podcast-summary": "video.podcast-summary";
        "video.summary": "video.summary";
        "video.dashcam-analytics": "video.dashcam-analytics";
    }>;
};
export declare const getFileSchema: {
    fileId: z.ZodMiniString<string>;
};
//# sourceMappingURL=schemas.d.ts.map