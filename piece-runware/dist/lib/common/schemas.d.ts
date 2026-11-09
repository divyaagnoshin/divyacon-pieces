import * as z from 'zod/mini';
export declare const generateImagesFromText: {
    positivePrompt: z.ZodMiniString<string>;
    negativePrompt: z.ZodMiniOptional<z.ZodMiniString<string>>;
    model: z.ZodMiniString<string>;
    height: z.ZodMiniNumber<number>;
    width: z.ZodMiniNumber<number>;
    steps: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    CFGScale: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    scheduler: z.ZodMiniOptional<z.ZodMiniString<string>>;
    seed: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    vae: z.ZodMiniOptional<z.ZodMiniString<string>>;
    clipSkip: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
};
export declare const generateImagesFromExistingImage: {
    seedImage: z.ZodMiniString<string>;
    positivePrompt: z.ZodMiniString<string>;
    negativePrompt: z.ZodMiniOptional<z.ZodMiniString<string>>;
    model: z.ZodMiniString<string>;
    strength: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    height: z.ZodMiniNumber<number>;
    width: z.ZodMiniNumber<number>;
    steps: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    CFGScale: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    scheduler: z.ZodMiniOptional<z.ZodMiniString<string>>;
};
export declare const generateVideoFromText: {
    positivePrompt: z.ZodMiniString<string>;
    negativePrompt: z.ZodMiniOptional<z.ZodMiniString<string>>;
    model: z.ZodMiniString<string>;
    duration: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    fps: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    outputFormat: z.ZodMiniOptional<z.ZodMiniEnum<{
        MP4: "MP4";
        WEBM: "WEBM";
        MOV: "MOV";
    }>>;
    outputQuality: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    uploadEndpoint: z.ZodMiniOptional<z.ZodMiniString<string>>;
    numberResults: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
};
export declare const imageBackgroundRemoval: {
    inputImage: z.ZodMiniString<string>;
    model: z.ZodMiniString<string>;
    outputFormat: z.ZodMiniOptional<z.ZodMiniEnum<{
        PNG: "PNG";
        JPG: "JPG";
        WEBP: "WEBP";
    }>>;
    outputQuality: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    uploadEndpoint: z.ZodMiniOptional<z.ZodMiniString<string>>;
};
//# sourceMappingURL=schemas.d.ts.map