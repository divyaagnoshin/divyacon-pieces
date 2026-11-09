import { ShippoConfig, Order, ShippingLabel, ApiListResponse, CreateOrderRequest } from './common';
export declare class ShippoClient {
    private config;
    private baseUrl;
    constructor(config: ShippoConfig);
    private makeRequest;
    createOrder(orderData: CreateOrderRequest): Promise<Order>;
    getOrder(orderId: string, fields?: string[]): Promise<Order>;
    listOrders(params?: {
        page?: number;
        results_per_page?: number;
        order_status?: string;
        placed_at_gt?: string;
    }): Promise<ApiListResponse<Order>>;
    updateOrder(orderId: string, orderData: Partial<Order>): Promise<Order>;
    deleteOrder(orderId: string): Promise<void>;
    getShippingLabel(labelId: string): Promise<ShippingLabel>;
    listShippingLabels(params?: {
        page?: number;
        results_per_page?: number;
    }): Promise<ApiListResponse<ShippingLabel>>;
    createShippingLabel(transactionData: {
        carrier_account: string;
        servicelevel_token: string;
        shipment: string;
        metadata?: string;
        label_file_type?: 'PDF' | 'PNG' | 'ZPL';
        async?: boolean;
    }): Promise<ShippingLabel>;
    createShipment(shipmentData: any): Promise<any>;
    getRates(shipmentId: string): Promise<any>;
    trackShippingLabel(trackingNumber: string, carrier: string): Promise<any>;
}
//# sourceMappingURL=client.d.ts.map