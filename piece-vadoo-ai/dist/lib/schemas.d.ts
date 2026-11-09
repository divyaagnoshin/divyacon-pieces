import * as z from 'zod/mini';
export declare const GenerateVideoRequestSchema: z.ZodMiniObject<{
    topic: z.ZodMiniOptional<z.ZodMiniString<string>>;
    prompt: z.ZodMiniOptional<z.ZodMiniString<string>>;
    voice: z.ZodMiniOptional<z.ZodMiniString<string>>;
    theme: z.ZodMiniOptional<z.ZodMiniString<string>>;
    style: z.ZodMiniOptional<z.ZodMiniString<string>>;
    language: z.ZodMiniOptional<z.ZodMiniString<string>>;
    duration: z.ZodMiniOptional<z.ZodMiniEnum<{
        "30-60": "30-60";
        "60-90": "60-90";
        "90-120": "90-120";
        "5 min": "5 min";
        "10 min": "10 min";
    }>>;
    aspect_ratio: z.ZodMiniOptional<z.ZodMiniEnum<{
        "9:16": "9:16";
        "1:1": "1:1";
        "16:9": "16:9";
    }>>;
    custom_instruction: z.ZodMiniOptional<z.ZodMiniString<string>>;
    use_ai: z.ZodMiniOptional<z.ZodMiniEnum<{
        0: "0";
        1: "1";
    }>>;
    include_voiceover: z.ZodMiniOptional<z.ZodMiniEnum<{
        0: "0";
        1: "1";
    }>>;
    size: z.ZodMiniOptional<z.ZodMiniString<string>>;
    ypos: z.ZodMiniOptional<z.ZodMiniString<string>>;
    url: z.ZodMiniUnion<readonly [z.ZodMiniOptional<z.ZodMiniString<string>>, z.ZodMiniLiteral<"">]>;
    bg_music: z.ZodMiniOptional<z.ZodMiniString<string>>;
    bg_music_volume: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
}, z.z.core.$strip>;
export declare const GeneratePodcastRequestSchema: z.ZodMiniObject<{
    content_source: z.ZodMiniEnum<{
        url: "url";
        text: "text";
    }>;
    url: z.ZodMiniUnion<readonly [z.ZodMiniOptional<z.ZodMiniString<string>>, z.ZodMiniLiteral<"">]>;
    text: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name1: z.ZodMiniString<string>;
    voice1: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name2: z.ZodMiniString<string>;
    voice2: z.ZodMiniOptional<z.ZodMiniString<string>>;
    theme: z.ZodMiniOptional<z.ZodMiniString<string>>;
    language: z.ZodMiniOptional<z.ZodMiniString<string>>;
    duration: z.ZodMiniOptional<z.ZodMiniEnum<{
        "1-2": "1-2";
        "3-5": "3-5";
    }>>;
    tone: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export declare const VadooApiResponseSchema: z.ZodMiniObject<{
    vid: z.ZodMiniNumber<number>;
}, z.z.core.$strip>;
export declare const generateVideoSchema: {
    topic: z.ZodMiniOptional<z.ZodMiniString<string>>;
    prompt: z.ZodMiniOptional<z.ZodMiniString<string>>;
    voice: z.ZodMiniOptional<z.ZodMiniString<string>>;
    theme: z.ZodMiniOptional<z.ZodMiniString<string>>;
    style: z.ZodMiniOptional<z.ZodMiniString<string>>;
    language: z.ZodMiniOptional<z.ZodMiniString<string>>;
    duration: z.ZodMiniOptional<z.ZodMiniEnum<{
        "30-60": "30-60";
        "60-90": "60-90";
        "90-120": "90-120";
        "5 min": "5 min";
        "10 min": "10 min";
    }>>;
    aspect_ratio: z.ZodMiniOptional<z.ZodMiniEnum<{
        "9:16": "9:16";
        "1:1": "1:1";
        "16:9": "16:9";
    }>>;
    custom_instruction: z.ZodMiniOptional<z.ZodMiniString<string>>;
    use_ai: z.ZodMiniOptional<z.ZodMiniEnum<{
        0: "0";
        1: "1";
    }>>;
    include_voiceover: z.ZodMiniOptional<z.ZodMiniEnum<{
        0: "0";
        1: "1";
    }>>;
    size: z.ZodMiniOptional<z.ZodMiniString<string>>;
    ypos: z.ZodMiniOptional<z.ZodMiniString<string>>;
    url: z.ZodMiniUnion<readonly [z.ZodMiniOptional<z.ZodMiniString<string>>, z.ZodMiniLiteral<"">]>;
    bg_music: z.ZodMiniOptional<z.ZodMiniString<string>>;
    bg_music_volume: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
};
export declare const generatePodcastSchema: {
    content_source: z.ZodMiniEnum<{
        url: "url";
        text: "text";
    }>;
    url: z.ZodMiniUnion<readonly [z.ZodMiniOptional<z.ZodMiniString<string>>, z.ZodMiniLiteral<"">]>;
    text: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name1: z.ZodMiniString<string>;
    voice1: z.ZodMiniOptional<z.ZodMiniString<string>>;
    name2: z.ZodMiniString<string>;
    voice2: z.ZodMiniOptional<z.ZodMiniString<string>>;
    theme: z.ZodMiniOptional<z.ZodMiniString<string>>;
    language: z.ZodMiniOptional<z.ZodMiniString<string>>;
    duration: z.ZodMiniOptional<z.ZodMiniEnum<{
        "1-2": "1-2";
        "3-5": "3-5";
    }>>;
    tone: z.ZodMiniOptional<z.ZodMiniString<string>>;
};
export declare const generateAiImageSchema: {
    id: z.ZodMiniString<string>;
    ratio: z.ZodMiniEnum<{
        "9:16": "9:16";
        "1:1": "1:1";
        "16:9": "16:9";
        "3:4": "3:4";
        "4:3": "4:3";
    }>;
    style: z.ZodMiniOptional<z.ZodMiniString<string>>;
    prompt: z.ZodMiniString<string>;
};
export declare const generateAiCaptionsSchema: {
    url: z.ZodMiniString<string>;
    theme: z.ZodMiniOptional<z.ZodMiniString<string>>;
    language: z.ZodMiniOptional<z.ZodMiniString<string>>;
};
//# sourceMappingURL=schemas.d.ts.map