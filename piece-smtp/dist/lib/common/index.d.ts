import nodemailer from 'nodemailer';
export declare const smtpCommon: {
    constructConfig(auth: smtpAuthParams): {
        connectionTimeout: number;
        secure: boolean;
        auth?: {
            user: string | undefined;
            pass: string | undefined;
        } | undefined;
        host: string;
        port: number;
        requireTLS: boolean;
    };
    createSMTPTransport(auth: smtpAuthParams): nodemailer.Transporter<import("nodemailer/lib/smtp-transport").SentMessageInfo, import("nodemailer/lib/smtp-transport").Options>;
};
export type smtpAuthParams = {
    host: string;
    email?: string;
    password?: string;
    port: number;
    TLS: boolean;
};
//# sourceMappingURL=index.d.ts.map