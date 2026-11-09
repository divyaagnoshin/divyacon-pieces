import { HttpMessageBody, HttpMethod, HttpResponse, QueryParams } from '@agnocon/pieces-common';
import { ShopifyAuth, ShopifyCheckout, ShopifyCollect, ShopifyCustomer, ShopifyDraftOrder, ShopifyFulfillment, ShopifyFulfillmentEvent, ShopifyImage, ShopifyOrder, ShopifyProduct, ShopifyProductVariant, ShopifyTransaction } from './types';
export declare function getBaseUrl(shopName: string): string;
export declare function sendShopifyRequest(data: {
    url: string;
    method: HttpMethod;
    body?: HttpMessageBody;
    queryParams?: QueryParams;
    auth: ShopifyAuth;
}): Promise<HttpResponse<HttpMessageBody>>;
export declare function createCustomer(customer: Partial<ShopifyCustomer>, auth: ShopifyAuth): Promise<ShopifyCustomer>;
export declare function getCustomer(id: string, auth: ShopifyAuth): Promise<ShopifyCustomer>;
export declare function getCustomers(auth: ShopifyAuth): Promise<ShopifyCustomer[]>;
export declare function updateCustomer(id: string, customer: Partial<ShopifyCustomer>, auth: ShopifyAuth): Promise<ShopifyCustomer>;
export declare function getCustomerOrders(id: string, auth: ShopifyAuth): Promise<ShopifyOrder[]>;
export declare function getProducts(auth: ShopifyAuth, search: {
    title?: string;
    createdAtMin?: string;
    updatedAtMin?: string;
}): Promise<ShopifyProduct[]>;
export declare function createProduct(product: Partial<ShopifyProduct>, auth: ShopifyAuth): Promise<ShopifyProduct>;
export declare function updateProduct(id: number, product: Partial<ShopifyProduct>, auth: ShopifyAuth): Promise<ShopifyProduct>;
export declare function createDraftOrder(draftOrder: Partial<ShopifyDraftOrder>, auth: ShopifyAuth): Promise<ShopifyDraftOrder>;
export declare function createOrder(order: Partial<ShopifyOrder>, auth: ShopifyAuth): Promise<ShopifyOrder>;
export declare function updateOrder(id: number, order: Partial<ShopifyOrder>, auth: ShopifyAuth): Promise<ShopifyOrder>;
export declare function createTransaction(orderId: number, transaction: Partial<ShopifyTransaction>, auth: ShopifyAuth): Promise<ShopifyTransaction>;
export declare function getTransaction(id: number, orderId: number, auth: ShopifyAuth): Promise<ShopifyTransaction>;
export declare function getTransactions(orderId: number, auth: ShopifyAuth): Promise<ShopifyTransaction[]>;
export declare function getFulfillments(orderId: number, auth: ShopifyAuth): Promise<ShopifyFulfillment[]>;
export declare function getFulfillment(id: number, orderId: number, auth: ShopifyAuth): Promise<ShopifyFulfillment>;
export declare function getLocations(auth: ShopifyAuth): Promise<unknown[]>;
export declare function createFulfillmentEvent(id: number, orderId: number, event: Partial<ShopifyFulfillmentEvent>, auth: ShopifyAuth): Promise<ShopifyFulfillmentEvent>;
export declare function closeOrder(id: number, auth: ShopifyAuth): Promise<ShopifyOrder>;
export declare function cancelOrder(id: number, auth: ShopifyAuth): Promise<ShopifyOrder>;
export declare function adjustInventoryLevel(id: number, locationId: number, adjustment: number, auth: ShopifyAuth): Promise<unknown>;
export declare function createCollect(collect: Partial<ShopifyCollect>, auth: ShopifyAuth): Promise<ShopifyCollect>;
export declare function getAsset(key: string, themeId: number, auth: ShopifyAuth): Promise<unknown>;
export declare function getProductVariant(id: number, auth: ShopifyAuth): Promise<ShopifyProductVariant>;
export declare function getProduct(id: number, auth: ShopifyAuth): Promise<ShopifyProduct>;
export declare function createProductImage(id: number, image: Partial<ShopifyImage>, auth: ShopifyAuth): Promise<ShopifyImage>;
export declare function getAbandonedCheckouts(auth: ShopifyAuth, search: {
    sinceId: string;
}): Promise<ShopifyCheckout[]>;
//# sourceMappingURL=index.d.ts.map