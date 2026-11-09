import { Account, Client, Plan, Subscription } from 'recurly';
import { RecurlyAuthType } from '../auth';
import { FlatRecord } from './utils';
export declare function createRecurlyClient(auth: RecurlyAuthType): Client;
export declare function listAccounts(auth: RecurlyAuthType): Promise<Account[]>;
export declare function listPlans(auth: RecurlyAuthType): Promise<Plan[]>;
export declare function listSubscriptions(auth: RecurlyAuthType, params: Record<string, string | number>, limit: number): Promise<Subscription[]>;
export declare function listAccountSubscriptions(auth: RecurlyAuthType, accountCode: string, params: Record<string, string | number>, limit: number): Promise<Subscription[]>;
export declare function flattenRecurlyResource(value: unknown): FlatRecord;
export declare function flattenRecurlyResourceList(values: unknown[]): FlatRecord[];
//# sourceMappingURL=client.d.ts.map