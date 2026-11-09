type Book = {
    resource_id: string;
    title: string;
    drm_type: string;
};
type Transaction = {
    id: string;
    resource_id: string;
    download_link: string | null;
    customer_email: string | null;
    order_number: string | null;
    created_at: string;
    status: string;
};
declare function listBooks({ token }: {
    token: string;
}): Promise<Book[]>;
declare function createTransaction({ token, resourceId, customerEmail, orderNumber, quantity, watermarkName, watermarkEmail, watermarkPhone, }: {
    token: string;
    resourceId: string;
    customerEmail: string;
    orderNumber: string;
    quantity: number;
    watermarkName?: string;
    watermarkEmail?: string;
    watermarkPhone?: string;
}): Promise<Transaction>;
export declare const editionguardApi: {
    listBooks: typeof listBooks;
    createTransaction: typeof createTransaction;
};
export {};
//# sourceMappingURL=api.d.ts.map