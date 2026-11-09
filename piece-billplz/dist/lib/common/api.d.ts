import { HttpRequest } from '@agnocon/pieces-common';
export declare const billplzApi: {
    makeRequest(auth: string, request: HttpRequest): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    getCollections(auth: string): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    createBill(auth: string, billData: Record<string, unknown>): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    getBill(auth: string, billId: string): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=api.d.ts.map