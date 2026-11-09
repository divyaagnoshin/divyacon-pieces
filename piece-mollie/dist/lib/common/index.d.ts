import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { mollieAuth } from '../auth';
export declare const mollieCommon: {
    baseUrl: string;
    makeRequest: <T = unknown>(auth: AppConnectionValueForAuthProperty<typeof mollieAuth>, method: HttpMethod, url: string, body?: unknown, testmode?: boolean) => Promise<T>;
};
export interface MollieAmount {
    currency: string;
    value: string;
}
export interface MollieAddress {
    title?: string;
    givenName: string;
    familyName: string;
    organizationName?: string;
    streetAndNumber: string;
    streetAdditional?: string;
    postalCode: string;
    email: string;
    phone?: string;
    city: string;
    region?: string;
    country: string;
}
export interface MollieOrderLine {
    type?: 'physical' | 'digital' | 'shipping_fee' | 'discount' | 'store_credit' | 'gift_card' | 'surcharge';
    name: string;
    quantity: number;
    unitPrice: MollieAmount;
    totalAmount: MollieAmount;
    vatRate?: string;
    vatAmount?: MollieAmount;
    sku?: string;
    category?: 'meal' | 'eco' | 'gift' | 'sport_culture';
    discountAmount?: MollieAmount;
    imageUrl?: string;
    productUrl?: string;
    metadata?: Record<string, unknown>;
}
export interface MollieOrder {
    resource?: string;
    id?: string;
    mode?: string;
    orderNumber: string;
    amount: MollieAmount;
    amountRefunded?: MollieAmount;
    amountCaptured?: MollieAmount;
    redirectUrl?: string;
    cancelUrl?: string;
    webhookUrl?: string;
    billingAddress: MollieAddress;
    shippingAddress?: MollieAddress;
    locale: string;
    method?: string;
    shopperCountryMustMatchBillingCountry?: boolean;
    metadata?: Record<string, unknown>;
    status?: string;
    isCancelable?: boolean;
    profileId?: string;
    createdAt?: string;
    authorizedAt?: string;
    paidAt?: string;
    canceledAt?: string;
    expiresAt?: string;
    expiredAt?: string;
    completedAt?: string;
    consumerDateOfBirth?: string;
    testmode?: boolean;
    lines: MollieOrderLine[];
    _links?: {
        self?: {
            href: string;
            type: string;
        };
        checkout?: {
            href: string;
            type: string;
        };
        dashboard?: {
            href: string;
            type: string;
        };
        documentation?: {
            href: string;
            type: string;
        };
    };
}
//# sourceMappingURL=index.d.ts.map