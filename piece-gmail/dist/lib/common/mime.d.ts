import { ApFile } from '@agnocon/pieces-framework';
export interface RawMimeAttachment {
    filename?: string;
    content: Buffer;
    contentType?: string;
}
interface BuildRawMessageProps {
    to?: string[];
    cc?: string[];
    bcc?: string[];
    from?: string;
    subject: string;
    bodyType: 'plain_text' | 'html';
    body: string;
    headers?: {
        key: string;
        value: string;
    }[];
    attachments?: ({
        file: ApFile;
        name?: string;
    } | RawMimeAttachment)[];
}
declare function buildRawMessage(props: BuildRawMessageProps): Promise<string>;
export declare const GmailMime: {
    buildRawMessage: typeof buildRawMessage;
};
export {};
//# sourceMappingURL=mime.d.ts.map