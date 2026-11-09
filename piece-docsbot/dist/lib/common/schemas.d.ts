import z from 'zod';
export declare const askQuestion: {
    teamId: z.ZodString;
    botId: z.ZodString;
    question: z.ZodString;
    metadata: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    context_items: z.ZodOptional<z.ZodNumber>;
    human_escalation: z.ZodOptional<z.ZodBoolean>;
    followup_rating: z.ZodOptional<z.ZodBoolean>;
    document_retriever: z.ZodOptional<z.ZodBoolean>;
    full_source: z.ZodOptional<z.ZodBoolean>;
    autocut: z.ZodOptional<z.ZodNumber>;
    testing: z.ZodOptional<z.ZodBoolean>;
    image_urls: z.ZodOptional<z.ZodArray<z.ZodString>>;
    model: z.ZodOptional<z.ZodString>;
    default_language: z.ZodOptional<z.ZodString>;
    reasoning_effort: z.ZodOptional<z.ZodEnum<{
        minimal: "minimal";
        low: "low";
        medium: "medium";
        high: "high";
    }>>;
};
export declare const createSource: z.ZodObject<{
    type: z.ZodEnum<{
        url: "url";
        document: "document";
        sitemap: "sitemap";
        wp: "wp";
        urls: "urls";
        csv: "csv";
        rss: "rss";
        qa: "qa";
        youtube: "youtube";
    }>;
    title: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    file: z.ZodOptional<z.ZodString>;
    faqs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        question: z.ZodString;
        answer: z.ZodString;
    }, z.core.$strip>>>;
    scheduleInterval: z.ZodOptional<z.ZodEnum<{
        daily: "daily";
        weekly: "weekly";
        monthly: "monthly";
        none: "none";
    }>>;
}, z.core.$strip>;
export declare const uploadSourceFile: {
    teamId: z.ZodString;
    botId: z.ZodString;
    file: z.ZodObject<{
        filename: z.ZodString;
        data: z.ZodCustom<Buffer, Buffer>;
        extension: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
export declare const createBot: {
    teamId: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    privacy: z.ZodEnum<{
        public: "public";
        private: "private";
    }>;
    language: z.ZodEnum<{
        en: "en";
        jp: "jp";
    }>;
    model: z.ZodOptional<z.ZodString>;
    embeddingModel: z.ZodOptional<z.ZodEnum<{
        "text-embedding-ada-002": "text-embedding-ada-002";
        "text-embedding-3-large": "text-embedding-3-large";
        "text-embedding-3-small": "text-embedding-3-small";
        "embed-multilingual-v3.0": "embed-multilingual-v3.0";
        "embed-v4.0": "embed-v4.0";
    }>>;
    copyFrom: z.ZodOptional<z.ZodString>;
};
export declare const findBot: {
    teamId: z.ZodString;
    name: z.ZodString;
};
//# sourceMappingURL=schemas.d.ts.map