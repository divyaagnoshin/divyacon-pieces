import { AbstractExecuteParams, ExecuteKwParams, GetAllCompaniesParams, GetAllContactsParams, GetCompanyParams, GetContactParams, GetRecordsParams, CreateRecordParams, UpdateRecordParams, OdooConfig, RenderReportParams, SaveCompanyParams, SaveContactParams } from "./type";
declare class Odoo {
    config: OdooConfig;
    host: string;
    port: number;
    db: string;
    username: string;
    password: string;
    secure: boolean;
    uid: number;
    constructor(config: OdooConfig);
    private getClient;
    private methodCall;
    connect(): Promise<number>;
    execute<T = any>({ client, endpoint, params }: AbstractExecuteParams): Promise<T>;
    execute_kw<T = any>({ model, method, params, }: ExecuteKwParams): Promise<T>;
    exec_workflow<T = any>({ model, method, params, }: ExecuteKwParams): Promise<T>;
    render_report<T = any>({ report, params, }: RenderReportParams): Promise<T>;
    getAllContacts<T = any>({ fields, isCompany }: GetAllContactsParams): Promise<T>;
    getAllCompanies<T = any>({ fields, }: GetAllCompaniesParams): Promise<T>;
    getContact<T = any>({ name, fields, isCompany }: GetContactParams): Promise<T>;
    getCompany<T = any>({ name, fields, }: GetCompanyParams): Promise<T>;
    getRecords<T = any>({ model, domain, fields, offset, limit }: GetRecordsParams): Promise<T>;
    createRecord<T = any>({ model, fields, }: CreateRecordParams): Promise<T>;
    updateRecord<T = any>({ model, recordId, fields, }: UpdateRecordParams): Promise<T>;
    saveContact<T = any>({ name, phone, email, company, title, company_id, address, }: SaveContactParams): Promise<T>;
    saveCompany<T = any>({ name, phone, email, address, }: SaveCompanyParams): Promise<T>;
}
export default Odoo;
//# sourceMappingURL=index.d.ts.map