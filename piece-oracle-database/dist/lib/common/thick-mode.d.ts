/**
 * Ensures Oracle Instant Client is ready and initialises node-oracledb.
 *
 * thickMode = false → thin mode is oracledb's default; no initOracleClient() call is made.
 * thickMode = true  → auto-download Instant Client if missing, patch RPATH,
 *                     then call initOracleClient({ libDir }).
 *
 * Thin mode intentionally skips initOracleClient() — calling it with no args locks the process
 * to whatever system client state it finds and prevents a later thick mode call in the same
 * process (e.g. when a dedicated worker reuses the sandbox across validation attempts).
 *
 * Promise-based singleton for thick mode — concurrent callers all await the same Promise
 * so initOracleClient is never called twice (prevents NJS-090).
 */
export declare const ensureOracleClient: (params: {
    thickMode: boolean;
    logs: string[];
}) => Promise<void>;
//# sourceMappingURL=thick-mode.d.ts.map