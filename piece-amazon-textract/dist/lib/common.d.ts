import { ApFile } from '@agnocon/pieces-framework';
import { TextractClient, Block, ExpenseDocument, IdentityDocument } from '@aws-sdk/client-textract';
export interface TextractAuth {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
}
export interface TextLine {
    text: string;
    confidence: number;
    pageNumber: number;
}
export interface FormField {
    key: string;
    value: string;
    keyConfidence: number;
    valueConfidence: number;
}
export interface TableCell {
    text: string;
    rowIndex: number;
    columnIndex: number;
    confidence: number;
    isHeader: boolean;
}
export interface TableResult {
    rows: TableCell[][];
    pageNumber: number;
}
export interface SignatureResult {
    pageNumber: number;
    confidence: number;
}
export interface QueryResult {
    query: string;
    answer: string;
    confidence: number;
    pageNumber: number;
}
export interface AnalyzeDocumentResult {
    rawText: string;
    lines: TextLine[];
    keyValuePairs: FormField[];
    tables: TableResult[];
    signatures: SignatureResult[];
    queryResults: QueryResult[];
    pageCount: number;
}
export interface DetectTextResult {
    rawText: string;
    lines: TextLine[];
    pageCount: number;
}
export interface ExpenseLineItem {
    description?: string;
    quantity?: string;
    unitPrice?: string;
    price?: string;
    productCode?: string;
}
export interface AnalyzeExpenseResult {
    vendor: {
        name?: string;
        address?: string;
        phone?: string;
    };
    invoiceDate?: string;
    dueDate?: string;
    subtotal?: string;
    tax?: string;
    tip?: string;
    total?: string;
    invoiceNumber?: string;
    lineItems: ExpenseLineItem[];
    rawSummaryFields: {
        type: string;
        value: string;
        confidence: number;
    }[];
}
export interface AnalyzeIDResult {
    documentType?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    suffix?: string;
    dateOfBirth?: string;
    dateOfExpiry?: string;
    dateOfIssue?: string;
    idNumber?: string;
    address?: string;
    county?: string;
    placeOfBirth?: string;
    mrzCode?: string;
    allFields: {
        type: string;
        value: string;
        confidence: number;
    }[];
}
export declare function createTextractClient(auth: TextractAuth): TextractClient;
export declare function buildDocumentInput(file: ApFile | null | undefined, s3Bucket: string | undefined, s3Key: string | undefined): {
    Bytes?: Uint8Array;
    S3Object?: {
        Bucket: string;
        Name: string;
    };
};
export declare function parseAnalysisBlocks(blocks: Block[]): AnalyzeDocumentResult;
export declare function parseTextBlocks(blocks: Block[]): DetectTextResult;
export declare function parseExpenseDocuments(expenseDocs: ExpenseDocument[]): AnalyzeExpenseResult;
export declare function parseIdentityDocuments(identityDocs: IdentityDocument[]): AnalyzeIDResult;
export declare function formatTextractError(error: unknown): string;
//# sourceMappingURL=common.d.ts.map