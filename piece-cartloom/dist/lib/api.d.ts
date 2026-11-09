import { CartloomAuthType } from './auth';
type KeyValuePair = {
    [key: string]: string | boolean | number | undefined;
};
export declare function getProducts(auth: CartloomAuthType): Promise<{
    success: boolean;
    data: any[];
}>;
export declare function getAllDiscounts(auth: CartloomAuthType): Promise<{
    success: boolean;
    data: any[];
}>;
export declare function getDiscount(auth: CartloomAuthType, discountId: string): Promise<{
    success: boolean;
    data: any[];
}>;
export declare function getOrder(auth: CartloomAuthType, invoice: string): Promise<{
    success: boolean;
    data: any[];
}>;
export declare function getOrdersByDate(auth: CartloomAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    data: any[];
}>;
export declare function createDiscount(auth: CartloomAuthType, data: KeyValuePair): Promise<{
    success: boolean;
    data: any[];
}>;
export {};
//# sourceMappingURL=api.d.ts.map