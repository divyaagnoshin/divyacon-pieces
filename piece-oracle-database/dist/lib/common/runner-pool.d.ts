import { ChildProcess } from 'child_process';
import type { RunnerMode, RunnerRequestPayload } from './runner-protocol';
declare class OracleRunnerError extends Error {
    readonly logs?: string[];
    constructor(message: string, logs?: string[]);
}
declare class Runner {
    private readonly child;
    private readonly pending;
    private dead;
    private initLogsCache;
    constructor(child: ChildProcess);
    setInitLogs(logs: string[]): void;
    consumeInitLogs(): string[];
    invoke<T>(req: RunnerRequestPayload): Promise<{
        result: T;
        logs?: string[];
    }>;
    kill(): void;
    private handleResponse;
    private rejectAllPending;
}
declare function acquire(mode: RunnerMode): Promise<{
    runner: RunnerHandle;
    initLogs: string[];
}>;
export declare const runnerPool: {
    acquire: typeof acquire;
};
export type RunnerHandle = Pick<Runner, 'invoke'>;
export { OracleRunnerError };
//# sourceMappingURL=runner-pool.d.ts.map