import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { Organisation } from './models/oranisation';
import { Event } from './models/event';
import { Category } from './models/category';
import { RecipientField } from './models/recipient-field';
export declare class CertopusClient {
    private token;
    constructor(token: string);
    makeRequest<T extends HttpMessageBody = any>(method: HttpMethod, url: string, query?: QueryParams, body?: object): Promise<T>;
    listOrganisations(): Promise<Organisation[]>;
    listEvents(organisationId: string): Promise<Event[]>;
    listCategories(organisationId: string, eventId: string): Promise<Category[]>;
    listRecipientFields(organisationId: string, eventId: string, categoryId: string): Promise<RecipientField[]>;
}
//# sourceMappingURL=client.d.ts.map