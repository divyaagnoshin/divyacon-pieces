import { QueryParams } from '@agnocon/pieces-common';
/**
 * Shared helpers for the audience:'ai' Trello atomics. Trello auth is the
 * BasicAuth API key + token passed as ?key=&token= query params (auth.username
 * = API key, auth.password = token) — the same pattern every existing action
 * uses. These helpers keep the agent atomics DRY without changing that pattern.
 */
export type TrelloAuthValue = {
    username: string;
    password: string;
};
/** Build the ?key=&token= auth query-param suffix the Trello REST API expects. */
export declare function authQuery(auth: TrelloAuthValue): string;
/** Auth params merged into a QueryParams object (for requests that pass queryParams). */
export declare function withAuthParams(auth: TrelloAuthValue, params?: QueryParams): QueryParams;
/** Map a Trello HTTP error to a clear, per-status message; rethrow otherwise. */
export declare function rethrowTrelloError(error: any, notFoundHint: string): never;
//# sourceMappingURL=ai-common.d.ts.map