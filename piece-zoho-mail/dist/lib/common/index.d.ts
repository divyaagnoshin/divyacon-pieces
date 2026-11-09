import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { FilesService, PiecePropValueSchema } from '@agnocon/pieces-framework';
import { Attachment, ParsedMail } from 'mailparser';
import { zohoMailAuth } from './auth';
export type ZohoMailApiCallParams = {
    auth: PiecePropValueSchema<typeof zohoMailAuth>;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare function zohoMailApiCall<T extends HttpMessageBody>({ auth, method, resourceUri, query, body, }: ZohoMailApiCallParams): Promise<T>;
export declare function parseStream(stream: string | Buffer): Promise<ParsedMail>;
export declare function convertAttachment(attachments: Attachment[], files: FilesService): Promise<{
    fileName: string;
    mimeType: string;
    size: number;
    data: string;
}[]>;
//# sourceMappingURL=index.d.ts.map