import { FilesService, TriggerStrategy } from '@agnocon/pieces-framework';
import { type Attachment } from '../common';
export declare const newEmail: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>, {
    mailbox: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>>;
    filterInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>, {
    mailbox: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>>;
    filterInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>, {
    mailbox: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>>;
    filterInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>, {
    mailbox: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>>;
    filterInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}>;
export declare function convertAttachment(attachments: Attachment[], files: FilesService): Promise<string[]>;
//# sourceMappingURL=new-email.d.ts.map