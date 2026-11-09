import { ImapFlow, type ListResponse } from 'imapflow';
import { type Attachment, type ParsedMail } from 'mailparser';
import { type ImapAuth } from './auth';
type Message = {
    data: ParsedMail & {
        uid: number;
    };
    epochMilliSeconds: number;
};
declare function copyEmail<T extends {
    success: boolean;
    newUid?: number;
}>({ auth, sourceMailbox, targetMailbox, uid, }: {
    auth: ImapAuth;
    sourceMailbox: string;
    targetMailbox: string;
    uid: number;
}): Promise<T>;
declare function deleteEmail<T extends {
    success: boolean;
}>({ auth, mailbox, uid, }: {
    auth: ImapAuth;
    mailbox: string;
    uid: number;
}): Promise<T>;
declare function fetchEmails<T extends Message[]>({ auth, lastPoll, mailbox, }: {
    auth: ImapAuth;
    lastPoll: number;
    mailbox: string;
}): Promise<T>;
declare function fetchMailboxes<T extends ListResponse[]>(auth: ImapAuth): Promise<T>;
declare function moveEmail<T extends {
    success: boolean;
    newUid?: number;
}>({ auth, sourceMailbox, targetMailbox, uid, }: {
    auth: ImapAuth;
    sourceMailbox: string;
    targetMailbox: string;
    uid: number;
}): Promise<T>;
declare function performImapOperation(auth: ImapAuth, callback: (imapClient: ImapFlow) => Promise<unknown>): Promise<unknown>;
declare function performMailboxOperation<T>(auth: ImapAuth, mailbox: string, callback: (imapClient: ImapFlow) => Promise<T>, options?: {
    readOnly?: boolean;
}): Promise<T>;
declare function setEmailReadStatus<T extends {
    success: true;
}>({ auth, mailbox, uid, markAsRead, }: {
    auth: ImapAuth;
    mailbox: string;
    uid: number;
    markAsRead: boolean;
}): Promise<T>;
export { type Attachment, type Message, performImapOperation, performMailboxOperation, copyEmail, deleteEmail, fetchEmails, moveEmail, setEmailReadStatus, fetchMailboxes, };
//# sourceMappingURL=imap.d.ts.map