import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
type ResponseSchema = {
    data: {
        id: string;
        type: string;
        attributes: unknown;
        relationships: unknown;
    }[];
};
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
export declare class PredictLeadsClient {
    private apiKey;
    private apiToken;
    constructor(apiKey: string, apiToken: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: QueryParams, body?: any | undefined): Promise<T>;
    findCompanies(query?: QueryParams): Promise<ResponseSchema>;
    findCompanyByDomain(domain: string): Promise<ResponseSchema>;
    findCompanyJobOpenings(companyId: string, query: QueryParams): Promise<ResponseSchema>;
    getAJobOpeningById(jobOpeningId: string): Promise<ResponseSchema>;
    findJobOpenings(query?: QueryParams): Promise<ResponseSchema>;
    findTechnologies(domain: string, query?: QueryParams): Promise<ResponseSchema>;
    findCompaniesTechnologyById(technologyId: string, query?: QueryParams): Promise<ResponseSchema>;
    findNewsByDomain(domain: string, query?: QueryParams): Promise<ResponseSchema>;
    findNewsEventById(newsEventId: string): Promise<ResponseSchema>;
    findConnectionsByDomain(domain: string, query?: QueryParams): Promise<ResponseSchema>;
    findConnections(query?: QueryParams): Promise<ResponseSchema>;
}
export {};
//# sourceMappingURL=client.d.ts.map