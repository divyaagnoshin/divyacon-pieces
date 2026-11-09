import { AppConnectionValueForAuthProperty } from "@agnocon/pieces-framework";
import { postgresAuth } from "..";
import { Client } from "pg";
export declare const pgClient: (auth: AppConnectionValueForAuthProperty<typeof postgresAuth>, query_timeout?: number, application_name?: string | undefined, connectionTimeoutMillis?: number) => Promise<Client>;
//# sourceMappingURL=common.d.ts.map