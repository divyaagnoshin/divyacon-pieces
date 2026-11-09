import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
import { Client } from '@microsoft/microsoft-graph-client';
import { Contact, ContactFolder } from '@microsoft/microsoft-graph-types';
export type authProps = {
    auth: OAuth2PropertyValue;
};
type createContactProps = authProps & {
    contact: Contact;
};
type listContactProps = authProps & {
    queryParams?: Record<string, any>;
};
type updateContactProps = authProps & {
    contactId: string;
    contact: Contact;
};
type getContactProps = authProps & {
    contactId: string;
};
type deleteContactProps = getContactProps;
type createContactFolderProps = authProps & {
    contactFolder: ContactFolder;
};
type getContactFolderProps = authProps & {
    contactFolderId: string;
};
type deleteContactFolderProps = getContactFolderProps;
export declare const microsoft365PeopleCommon: {
    getClient: ({ auth }: authProps) => Client;
    getMe: ({ auth }: authProps) => Promise<any>;
    getContact: ({ auth, contactId }: getContactProps) => Promise<any>;
    listContacts: ({ auth, queryParams, }: listContactProps) => Promise<Contact[]>;
    createContact: ({ auth, contact }: createContactProps) => Promise<any>;
    updateContact: ({ auth, contactId, contact }: updateContactProps) => Promise<any>;
    deleteContact: ({ auth, contactId }: deleteContactProps) => Promise<{
        success: boolean;
    }>;
    listContactFolders: ({ auth }: authProps) => Promise<ContactFolder[]>;
    createContactFolder: ({ auth, contactFolder, }: createContactFolderProps) => Promise<any>;
    getContactFolder: ({ auth, contactFolderId, }: getContactFolderProps) => Promise<any>;
    deleteContactFolder: ({ auth, contactFolderId, }: deleteContactFolderProps) => Promise<{
        success: boolean;
    }>;
    contactDropdown: (displayName?: string, description?: string, required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string | undefined, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string | undefined, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contactFolderDropdown: (displayName?: string, description?: string, required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string | undefined, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string | undefined, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contactProperties: () => {
        displayName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        givenName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        middleName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        surname: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        emailAddresses: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
        mobilePhone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        assistantName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        birthday: import("@agnocon/pieces-framework").DateTimeProperty<false>;
        businessStreet: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        businessCity: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        businessState: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        businessPostalCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        businessCountryOrRegion: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        children: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
        companyName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        department: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        homeStreet: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        homeCity: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        homeState: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        homePostalCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        homeCountryOrRegion: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        imAddresses: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
        initials: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        jobTitle: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        manager: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        nickName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        officeLocation: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        otherStreet: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        otherCity: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        otherState: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        otherPostalCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        otherCountryOrRegion: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        parentFolder: import("@agnocon/pieces-framework").DropdownProperty<string | undefined, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string | undefined, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
        personalNotes: import("@agnocon/pieces-framework").LongTextProperty<false>;
        profession: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        spouseName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    };
    contactFolderProperties: () => {
        displayName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        parentFolder: import("@agnocon/pieces-framework").DropdownProperty<string | undefined, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string | undefined, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    };
};
export {};
//# sourceMappingURL=common.d.ts.map