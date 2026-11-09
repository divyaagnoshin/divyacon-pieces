import { CreateProductParams, UpdateProductParams, GetProductByIdResponse } from './types';
export declare class Product {
    private baseURL;
    private headers;
    constructor(host: string, appKey: string, appToken: string);
    getProductById(productID: number): Promise<GetProductByIdResponse>;
    createProduct(newProductData: CreateProductParams): Promise<any>;
    updateProduct(productID: number, updatedProductData: UpdateProductParams): Promise<any>;
}
//# sourceMappingURL=Product.d.ts.map