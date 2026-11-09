import { LineItemInput } from './props';
export declare const wafeqHelpers: {
    toDate(value: string | undefined | null): string | undefined;
    stripEmpty(obj: Record<string, unknown>): Record<string, unknown>;
    mapLineItems({ items, defaultAccount, defaultTaxRate, }: {
        items: LineItemInput[] | undefined;
        defaultAccount?: string;
        defaultTaxRate?: string;
    }): Record<string, unknown>[];
};
//# sourceMappingURL=helpers.d.ts.map