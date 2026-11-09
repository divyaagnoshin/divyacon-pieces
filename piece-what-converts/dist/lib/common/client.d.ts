import { WhatConvertsAuth } from './auth';
import { CreateLeadParams, FindLeadParams, LeadsResponse, Profile, UpdateLeadParams, Account } from './types';
export declare const whatConvertsClient: {
    getAccounts(auth: WhatConvertsAuth): Promise<Account[]>;
    getProfiles(auth: WhatConvertsAuth, accountId: number): Promise<Profile[]>;
    createLead(auth: WhatConvertsAuth, accountId: number, params: CreateLeadParams): Promise<any>;
    findLeads(auth: WhatConvertsAuth, params: FindLeadParams): Promise<LeadsResponse>;
    updateLead(auth: WhatConvertsAuth, leadId: number, params: UpdateLeadParams): Promise<any>;
};
//# sourceMappingURL=client.d.ts.map