export declare function fanOutBatches<T>({ records, batchSize, maxInFlight, dispatch, }: FanOutParams<T>): Promise<FanOutResult>;
export type FanOutParams<T> = {
    records: AsyncIterable<T>;
    batchSize: number;
    maxInFlight: number;
    dispatch: (params: {
        batchIndex: number;
        rows: T[];
    }) => Promise<void>;
};
export type FanOutResult = {
    rowsProcessed: number;
    batchesDispatched: number;
};
//# sourceMappingURL=fan-out.d.ts.map