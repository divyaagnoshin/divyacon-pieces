import { CreateSkuParams, UpdateSkuParams } from './types';
export declare class Sku {
    private baseURL;
    private headers;
    constructor(host: string, appKey: string, appToken: string);
    getSkuById(skuID: number): Promise<any>;
    getSkuListByProductId(productID: number): Promise<any>;
    createSku(newSkuData: CreateSkuParams): Promise<any>;
    updateSku(skuID: number, newSkuData: UpdateSkuParams): Promise<any>;
}
//# sourceMappingURL=SKU.d.ts.map