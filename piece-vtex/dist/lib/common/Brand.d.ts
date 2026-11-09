import { CreateBrandParams, UpdateBrandParams } from './types';
export declare class Brand {
    private baseURL;
    private headers;
    constructor(host: string, appKey: string, appToken: string);
    getBrandById(brandID: number): Promise<any>;
    getBrandList(): Promise<any>;
    createBrand(newBrandData: CreateBrandParams): Promise<any>;
    updateBrand(brandID: number, updatedBrandData: UpdateBrandParams): Promise<any>;
    deleteBrand(brandID: number): Promise<any>;
}
//# sourceMappingURL=Brand.d.ts.map