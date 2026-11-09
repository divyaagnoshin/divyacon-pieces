import { KizeoFormsDataUsers, KizeoFormsExports, KizeoFormsForms, KizeoFormsList, KizeoFormsLists } from './models';
export declare const endpoint = "https://forms.kizeo.com/rest/";
export declare const kizeoFormsCommon: {
    formId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    userId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    exportId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    listId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    listProperties: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    fetchForms({ token }: {
        token: string;
    }): Promise<KizeoFormsForms[]>;
    fetchUsers({ token }: {
        token: string;
    }): Promise<KizeoFormsDataUsers>;
    fetchForm({ token, formId, }: {
        token: string;
        formId: string;
    }): Promise<KizeoFormsForms>;
    fetchExports({ token, formId, }: {
        token: string;
        formId: string;
    }): Promise<KizeoFormsExports[]>;
    fetchLists({ token }: {
        token: string;
    }): Promise<KizeoFormsLists[]>;
    fetchList({ token, listId, }: {
        token: string;
        listId: string;
    }): Promise<KizeoFormsList>;
};
//# sourceMappingURL=index.d.ts.map