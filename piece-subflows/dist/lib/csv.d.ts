import { Parser } from 'csv-parse';
export declare function createCsvParser({ delimiter }: {
    delimiter: string;
}): CsvParser;
export type CsvRow = Record<string, string | string[]>;
export type CsvParser = {
    parser: Parser;
    getHeaders: () => string[];
};
//# sourceMappingURL=csv.d.ts.map