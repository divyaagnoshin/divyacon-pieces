import { HttpMethod } from '@agnocon/pieces-common';
export declare class CloudConvertClient {
    private readonly auth;
    private readonly baseUrl;
    constructor(auth: any);
    apiCall({ method, resourceUri, body, queryParams, }: {
        method: HttpMethod;
        resourceUri: string;
        body?: any;
        queryParams?: Record<string, string>;
    }): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    createImportTask(fileUrl: string, filename?: string): Promise<any>;
    createUploadTask(filename: string): Promise<any>;
    createImportBase64Task(fileContent: string, filename: string): Promise<any>;
    createArchiveTask(input: string | string[], outputFormat: string, options?: {
        filename?: string;
        engine?: string;
        engineVersion?: string;
        timeout?: number;
    }): Promise<any>;
    createCaptureTask(options: {
        url: string;
        output_format: string;
        pages?: string;
        zoom?: number;
        page_width?: number;
        page_height?: number;
        page_format?: string;
        page_orientation?: string;
        margin_top?: number;
        margin_bottom?: number;
        margin_left?: number;
        margin_right?: number;
        print_background?: boolean;
        display_header_footer?: boolean;
        header_template?: string;
        footer_template?: string;
        wait_until?: string;
        wait_for_element?: string;
        wait_time?: number;
        css_media_type?: string;
        filename?: string;
        engine?: string;
        engine_version?: string;
        timeout?: number;
    }): Promise<any>;
    createConvertTask(options: {
        input: string | string[];
        input_format?: string;
        output_format: string;
        filename?: string;
        engine?: string;
        engine_version?: string;
        timeout?: number;
        [key: string]: any;
    }): Promise<any>;
    createMergeTask(options: {
        input: string | string[];
        output_format: string;
        filename?: string;
        engine?: string;
        engine_version?: string;
        timeout?: number;
        [key: string]: any;
    }): Promise<any>;
    createOptimizeTask(options: {
        input: string | string[];
        input_format?: string;
        profile?: string;
        flatten_signatures?: boolean;
        colorspace?: string;
        filename?: string;
        engine?: string;
        engine_version?: string;
        timeout?: number;
        [key: string]: any;
    }): Promise<any>;
    createExportTask(inputTaskId: string): Promise<any>;
    createJob(tasks: Record<string, any>, tag?: string): Promise<any>;
    getJob(jobId: string): Promise<any>;
    getTask(taskId: string, queryParams?: Record<string, string>): Promise<any>;
    getSupportedFormats(options?: {
        inputFormat?: string;
        outputFormat?: string;
        engine?: string;
        include?: string[];
    }): Promise<any>;
}
export declare const cloudconvertCommon: {
    baseUrl: (region?: string) => "https://eu-central.api.cloudconvert.com/v2" | "https://us-east.api.cloudconvert.com/v2" | "https://api.cloudconvert.com/v2";
    createClient(auth: any): CloudConvertClient;
    apiCall({ auth, method, resourceUri, body, queryParams, }: {
        auth: any;
        method: HttpMethod;
        resourceUri: string;
        body?: any;
        queryParams?: Record<string, string>;
    }): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=client.d.ts.map