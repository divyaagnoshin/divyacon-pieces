import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { OrderStatus } from './constants';
import { BusinessTimingInput, Category, CategoryInput, ListAPIResponse, Product, ProductDiscountInput, ProductInput } from './types';
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
export declare class QuickzuAPIClient {
    private apiToken;
    constructor(apiToken: string);
    makeRequest<T extends HttpMessageBody = any>(method: HttpMethod, resourceUri: string, query?: QueryParams, body?: any | undefined): Promise<T>;
    createCategory(categoryInput: CategoryInput): Promise<any>;
    updateCategory(categoryId: string, categoryInput: Partial<CategoryInput>): Promise<any>;
    deleteCategory(categoryId: string): Promise<any>;
    listCategories(term?: string): Promise<ListAPIResponse<Category>>;
    createProduct(productInput: ProductInput): Promise<any>;
    updateProduct(productId: string, productInput: Partial<ProductInput>): Promise<any>;
    deleteProduct(productId: string): Promise<any>;
    listProducts(term?: string, categoryId?: string): Promise<ListAPIResponse<Product>>;
    getOrderDetails(orderId: string): Promise<any>;
    updateOrderStatus(orderId: string, status: OrderStatus): Promise<any>;
    listOrders(page: number, limit: number): Promise<any>;
    listLiveOrders(limit: number): Promise<any>;
    createProductDiscount(discountInput: ProductDiscountInput): Promise<any>;
    createPromoCode(promocodeInput: ProductDiscountInput): Promise<any>;
    updateBusinessTime(timingInput: BusinessTimingInput): Promise<any>;
}
//# sourceMappingURL=client.d.ts.map