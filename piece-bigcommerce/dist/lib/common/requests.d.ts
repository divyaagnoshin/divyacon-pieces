import { bigCommerceAuth } from './constants';
export declare const bigCommerceApiService: {
    createWebhook({ auth, payload, }: {
        auth: bigCommerceAuth;
        payload: {
            scope: string;
            destination: string;
            is_active: boolean;
        };
    }): Promise<any>;
    createCustomer({ auth, payload, }: {
        auth: bigCommerceAuth;
        payload: unknown;
    }): Promise<any>;
    fetchCustomers({ auth, queryString, }: {
        auth: bigCommerceAuth;
        queryString?: string;
    }): Promise<any>;
    fetchCustomerAddresses({ auth, queryString, }: {
        auth: bigCommerceAuth;
        queryString?: string;
    }): Promise<any>;
    fetchProducts({ auth, queryString, }: {
        auth: bigCommerceAuth;
        queryString?: string;
    }): Promise<any>;
    createProduct({ auth, payload, }: {
        auth: bigCommerceAuth;
        payload: unknown;
    }): Promise<any>;
    updateProduct({ auth, productId, payload, }: {
        auth: bigCommerceAuth;
        productId: string | number;
        payload: unknown;
    }): Promise<any>;
    deleteProduct({ auth, productId, }: {
        auth: bigCommerceAuth;
        productId: string | number;
    }): Promise<any>;
    fetchOrders({ auth, queryString, }: {
        auth: bigCommerceAuth;
        queryString?: string;
    }): Promise<any>;
    fetchOrder({ auth, orderId, }: {
        auth: bigCommerceAuth;
        orderId: string | number;
    }): Promise<any>;
    fetchCategories({ auth, queryString, }: {
        auth: bigCommerceAuth;
        queryString?: string;
    }): Promise<any>;
    createBlogPost({ auth, payload, }: {
        auth: bigCommerceAuth;
        payload: unknown;
    }): Promise<any>;
    createCustomerAddress({ auth, payload, }: {
        auth: bigCommerceAuth;
        payload: unknown;
    }): Promise<any>;
    deleteWebhook({ auth, webhookId, }: {
        auth: bigCommerceAuth;
        webhookId: string;
    }): Promise<any>;
};
//# sourceMappingURL=requests.d.ts.map