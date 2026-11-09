import { GenerateImagesParams, GenerateVideoFromTextParams, ImageBackgroundRemovalParams } from './types';
export declare const runwareAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare const runwareCommon: {
    runwareClient: (apiKey: string) => import("@runware/sdk-js").RunwareClient | import("@runware/sdk-js").RunwareServer;
    generateImagesFromTextProperties: {
        model: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        positivePrompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
        negativePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
        height: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
        width: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
        steps: import("@agnocon/pieces-framework").NumberProperty<false>;
        CFGScale: import("@agnocon/pieces-framework").NumberProperty<false>;
        scheduler: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        seed: import("@agnocon/pieces-framework").NumberProperty<false>;
        vae: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        clipSkip: import("@agnocon/pieces-framework").NumberProperty<false>;
    };
    generateImagesFromExistingImageProperties: {
        seedImage: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        model: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        positivePrompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
        height: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
        width: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
        negativePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
        strength: import("@agnocon/pieces-framework").NumberProperty<false>;
        steps: import("@agnocon/pieces-framework").NumberProperty<false>;
        CFGScale: import("@agnocon/pieces-framework").NumberProperty<false>;
        scheduler: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    };
    generateVideoFromTextProperties: {
        positivePrompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
        negativePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
        model: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        duration: import("@agnocon/pieces-framework").NumberProperty<false>;
        fps: import("@agnocon/pieces-framework").NumberProperty<false>;
        outputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        outputQuality: import("@agnocon/pieces-framework").NumberProperty<false>;
        uploadEndpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        numberResults: import("@agnocon/pieces-framework").NumberProperty<false>;
    };
    imageBackgroundRemovalProperties: {
        inputImage: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        model: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        outputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        outputQuality: import("@agnocon/pieces-framework").NumberProperty<false>;
        uploadEndpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    };
    generateImagesFromTextSchema: {
        positivePrompt: import("zod/mini").ZodMiniString<string>;
        negativePrompt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        model: import("zod/mini").ZodMiniString<string>;
        height: import("zod/mini").ZodMiniNumber<number>;
        width: import("zod/mini").ZodMiniNumber<number>;
        steps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        CFGScale: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        scheduler: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        seed: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        vae: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        clipSkip: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
    };
    generateImagesFromExistingImageSchema: {
        seedImage: import("zod/mini").ZodMiniString<string>;
        positivePrompt: import("zod/mini").ZodMiniString<string>;
        negativePrompt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        model: import("zod/mini").ZodMiniString<string>;
        strength: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        height: import("zod/mini").ZodMiniNumber<number>;
        width: import("zod/mini").ZodMiniNumber<number>;
        steps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        CFGScale: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        scheduler: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    };
    generateVideoFromTextSchema: {
        positivePrompt: import("zod/mini").ZodMiniString<string>;
        negativePrompt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        model: import("zod/mini").ZodMiniString<string>;
        duration: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        fps: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        outputFormat: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniEnum<{
            MP4: "MP4";
            WEBM: "WEBM";
            MOV: "MOV";
        }>>;
        outputQuality: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        uploadEndpoint: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        numberResults: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
    };
    imageBackgroundRemovalSchema: {
        inputImage: import("zod/mini").ZodMiniString<string>;
        model: import("zod/mini").ZodMiniString<string>;
        outputFormat: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniEnum<{
            PNG: "PNG";
            JPG: "JPG";
            WEBP: "WEBP";
        }>>;
        outputQuality: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        uploadEndpoint: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    };
    generateImages: ({ apiKey, ...imageParams }: GenerateImagesParams) => Promise<import("@runware/sdk-js").ITextToImage[] | undefined>;
    generateVideoFromText: ({ apiKey, ...videoParams }: GenerateVideoFromTextParams) => Promise<import("@runware/sdk-js").IVideoToImage | import("@runware/sdk-js").IVideoToImage[]>;
    imageBackgroundRemoval: ({ apiKey, ...imageParams }: ImageBackgroundRemovalParams) => Promise<import("@runware/sdk-js").IRemoveImage>;
};
//# sourceMappingURL=index.d.ts.map