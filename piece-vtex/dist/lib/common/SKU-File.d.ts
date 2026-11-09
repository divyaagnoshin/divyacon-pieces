type CreateSkuFileParams = {
    IsMain?: boolean;
    Label?: string;
    Name: string;
    Text?: string;
    Url: string;
};
type UpdateSkuFileParams = {
    Id: number;
    SkuId: number;
    FieldId: number;
    FieldValueId: number;
    Text: string;
};
export declare class SkuFile {
    private baseURL;
    private headers;
    constructor(host: string, appKey: string, appToken: string);
    getSkuFilesBySkuId(skuID: number): Promise<any>;
    createSkuFile(skuID: number, newSkuFileData: CreateSkuFileParams): Promise<any>;
    updateSkuFile(skuID: number, skuFileID: number, updatedSkuFileData: UpdateSkuFileParams): Promise<any>;
}
export {};
//# sourceMappingURL=SKU-File.d.ts.map