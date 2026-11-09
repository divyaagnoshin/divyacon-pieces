export interface PageElement {
    objectId: string;
    table?: Table;
    sheetsChart?: {
        spreadsheetId: string;
        chartId: number;
    };
    shape?: Shape;
}
interface Shape {
    text?: Text;
}
interface Text {
    textElements?: TextElement[];
}
export interface TextElement {
    textRun?: TextRun;
}
interface TextRun {
    content?: string;
}
interface Table {
    tableRows?: TableRow[];
}
interface TableRow {
    tableCells?: TableCell[];
}
export interface TableCell {
    text?: Text;
}
export declare const googleSheetsCommon: {
    baseUrl: string;
    batchUpdate: typeof batchUpdate;
    getSlide: typeof getSlide;
    createSlide: typeof createSlide;
};
export declare function batchUpdate(access_token: string, slide_id: string, requests: any): Promise<{
    spreadsheetId: string;
}>;
export declare function getSlide(access_token: string, slide_id: string): Promise<{
    presentationId: string;
    title: string;
    slides: {
        pageElements: any;
        objectId: object;
    }[];
}>;
export declare function createSlide(access_token: string, requests: any): Promise<{
    presentationId: string;
    title: string;
    spreadsheetId: string;
    replies: any[];
}>;
export {};
//# sourceMappingURL=common.d.ts.map