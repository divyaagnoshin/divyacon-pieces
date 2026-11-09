export declare const FIRECRAWL_API_BASE_URL = "https://api.firecrawl.dev/v2";
export declare const POLLING_INTERVAL = 5000;
export declare const forScreenshotOutputFormat: () => any;
export declare const forSimpleOutputFormat: (format: string) => string;
export declare function downloadAndSaveScreenshot(screenshotTarget: any, context: any): Promise<void>;
export declare function downloadAndSaveCrawlScreenshots(crawlResult: any, context: any): Promise<void>;
export declare function forJsonOutputFormat(jsonExtractionConfig: any): any;
export declare function polling(jobId: string, auth: string, timeoutSeconds: number, actionType: 'extract' | 'crawl'): Promise<any>;
//# sourceMappingURL=common.d.ts.map