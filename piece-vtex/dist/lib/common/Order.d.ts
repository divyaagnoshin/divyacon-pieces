export declare class Order {
    private baseURL;
    private headers;
    constructor(host: string, appKey: string, appToken: string);
    getOrderById(OrderID: number): Promise<any>;
    getOrderList(from: Date, to: Date): Promise<any>;
}
//# sourceMappingURL=Order.d.ts.map