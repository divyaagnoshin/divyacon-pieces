export declare const webscrapingAiAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare const webscrapingAiCommon: {
    baseUrl: string;
    endpoints: {
        askQuestion: string;
        getPageHtml: string;
        getPageText: string;
        getStructuredData: string;
        getAccountInfo: string;
    };
    askQuestionProperties: {
        device: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        errorOn404: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        errorOnRedirect: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        headers: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
        timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
        js: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        jsTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
        waitFor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        proxy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        customProxy: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        jsScript: import("@agnocon/pieces-framework").LongTextProperty<false>;
        question: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    };
    getPageHtmlProperties: {
        returnScriptResult: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        device: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        errorOn404: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        errorOnRedirect: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        headers: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
        timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
        js: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        jsTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
        waitFor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        proxy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        customProxy: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        jsScript: import("@agnocon/pieces-framework").LongTextProperty<false>;
    };
    getPageTextProperties: {
        textFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        returnLinks: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        device: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        errorOn404: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        errorOnRedirect: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        headers: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
        timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
        js: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        jsTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
        waitFor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        proxy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        customProxy: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        jsScript: import("@agnocon/pieces-framework").LongTextProperty<false>;
    };
    getPageStructuredDataProperties: {
        device: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        errorOn404: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        errorOnRedirect: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        headers: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
        timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
        js: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        jsTimeout: import("@agnocon/pieces-framework").NumberProperty<false>;
        waitFor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        proxy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        customProxy: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        jsScript: import("@agnocon/pieces-framework").LongTextProperty<false>;
        fields: import("@agnocon/pieces-framework").ObjectProperty<true>;
    };
    askQuestion: (params: askQuestionParams) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    getPageHtml: (params: getPageHtmlParams) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    getPageText: (params: getPageTextParams) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    getPageStructuredData: (params: getPageStructuredDataParams) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    getAccountInformation: ({ apiKey }: AuthenticationRequired) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
type AuthenticationRequired = {
    apiKey: string;
};
interface baseRequestParams extends AuthenticationRequired {
    url: string;
    headers?: Array<{
        name: string;
        value: string;
    }>;
    timeout?: number;
    js?: boolean;
    jsTimeout?: number;
    waitFor?: string;
    proxy?: 'datacenter' | 'residential';
    country?: 'us' | 'gb' | 'de' | 'it' | 'fr' | 'ca' | 'es' | 'ru' | 'jp' | 'kr' | 'in';
    customProxy?: string;
    jsScript?: string;
}
interface askQuestionParams extends baseRequestParams {
    question: string;
    device?: 'desktop' | 'mobile' | 'tablet';
    errorOn404?: boolean;
    errorOnRedirect?: boolean;
    format?: 'json' | 'text';
}
interface getPageHtmlParams extends baseRequestParams {
    returnScriptResult?: boolean;
    device?: 'desktop' | 'mobile' | 'tablet';
    errorOn404?: boolean;
    errorOnRedirect?: boolean;
    format?: 'json' | 'text';
}
interface getPageTextParams extends baseRequestParams {
    textFormat?: 'plain' | 'xml' | 'json';
    returnLinks?: boolean;
    device?: 'desktop' | 'mobile' | 'tablet';
    errorOn404?: boolean;
    errorOnRedirect?: boolean;
}
interface getPageStructuredDataParams extends baseRequestParams {
    fields: Record<string, string>;
    device?: 'desktop' | 'mobile' | 'tablet';
    errorOn404?: boolean;
    errorOnRedirect?: boolean;
}
export {};
//# sourceMappingURL=index.d.ts.map