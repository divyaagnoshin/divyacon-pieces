export declare const taskCompletedSample: {
    event: string;
    data: {
        task: {
            task: string;
            tool: string;
            status: string;
            process_start: string;
            timer: string;
            filesize: number;
            output_filesize: number;
            output_filenumber: number;
            output_extensions: string[];
            server: string;
            custom_int: null;
            custom_string: null;
        };
    };
};
export declare const taskFailedSample: {
    event: string;
    data: {
        task: {
            task: string;
            tool: string;
            status: string;
            process_start: string;
            message: string;
            server: string;
        };
    };
};
export declare const signatureCreatedSample: {
    event: string;
    data: {
        signature: {
            status: string;
            signature_id: string;
            brand_name: string;
            language: string;
            uuid: string;
            mode: string;
            subject_signer: string;
            message_signer: string;
            certified: boolean;
            files: {
                server_filename: string;
                filename: string;
            }[];
            signers: {
                uuid: string;
                email: string;
                name: string;
                type: string;
                status: string;
            }[];
            created: string;
        };
    };
};
export declare const signatureSentSample: {
    event: string;
    data: {
        signature: {
            status: string;
            signature_id: string;
            brand_name: string;
            language: string;
            uuid: string;
            mode: string;
            subject_signer: string;
            message_signer: string;
            certified: boolean;
            files: {
                server_filename: string;
                filename: string;
            }[];
            signers: {
                uuid: string;
                email: string;
                name: string;
                type: string;
                status: string;
            }[];
            created: string;
        };
    };
};
export declare const signatureCompletedSample: {
    event: string;
    data: {
        signature: {
            status: string;
            signature_id: string;
            brand_name: string;
            language: string;
            uuid: string;
            mode: string;
            subject_signer: string;
            message_signer: string;
            certified: boolean;
            files: {
                server_filename: string;
                filename: string;
            }[];
            signers: {
                uuid: string;
                email: string;
                name: string;
                type: string;
                status: string;
            }[];
            created: string;
        };
    };
};
export declare const signatureDeclinedSample: {
    event: string;
    data: {
        signature: {
            status: string;
            signature_id: string;
            brand_name: string;
            language: string;
            uuid: string;
            mode: string;
            subject_signer: string;
            message_signer: string;
            certified: boolean;
            files: {
                server_filename: string;
                filename: string;
            }[];
            signers: {
                uuid: string;
                email: string;
                name: string;
                type: string;
                status: string;
            }[];
            created: string;
        };
    };
};
export declare const signatureExpiredSample: {
    event: string;
    data: {
        signature: {
            status: string;
            signature_id: string;
            brand_name: string;
            language: string;
            uuid: string;
            mode: string;
            subject_signer: string;
            message_signer: string;
            certified: boolean;
            files: {
                server_filename: string;
                filename: string;
            }[];
            signers: {
                uuid: string;
                email: string;
                name: string;
                type: string;
                status: string;
            }[];
            created: string;
        };
    };
};
export declare const signatureVoidedSample: {
    event: string;
    data: {
        signature: {
            status: string;
            signature_id: string;
            brand_name: string;
            language: string;
            uuid: string;
            mode: string;
            subject_signer: string;
            message_signer: string;
            certified: boolean;
            files: {
                server_filename: string;
                filename: string;
            }[];
            signers: {
                uuid: string;
                email: string;
                name: string;
                type: string;
                status: string;
            }[];
            created: string;
        };
    };
};
export declare const signerViewedSample: {
    event: string;
    data: {
        signature: {
            signature_id: string;
            brand_name: string;
            language: string;
            status: string;
            uuid: string;
            mode: string;
            subject_signer: string;
            message_signer: string;
            certified: boolean;
            files: {
                server_filename: string;
                filename: string;
            }[];
            signers: {
                uuid: string;
                email: string;
                name: string;
                type: string;
                status: string;
            }[];
            created: string;
        };
        signer: {
            status: string;
            viewed: string;
            uuid: string;
            email: string;
            name: string;
            type: string;
        };
    };
};
export declare const signerSignedSample: {
    event: string;
    data: {
        signature: {
            signature_id: string;
            brand_name: string;
            language: string;
            status: string;
            uuid: string;
            mode: string;
            subject_signer: string;
            message_signer: string;
            certified: boolean;
            files: {
                server_filename: string;
                filename: string;
            }[];
            signers: {
                uuid: string;
                email: string;
                name: string;
                type: string;
                status: string;
            }[];
            created: string;
        };
        signer: {
            status: string;
            signed: string;
            uuid: string;
            email: string;
            name: string;
            type: string;
        };
    };
};
export declare const signerDeclinedSample: {
    event: string;
    data: {
        signature: {
            signature_id: string;
            brand_name: string;
            language: string;
            status: string;
            uuid: string;
            mode: string;
            subject_signer: string;
            message_signer: string;
            certified: boolean;
            files: {
                server_filename: string;
                filename: string;
            }[];
            signers: {
                uuid: string;
                email: string;
                name: string;
                type: string;
                status: string;
            }[];
            created: string;
        };
        signer: {
            status: string;
            declined: string;
            reason: string;
            uuid: string;
            email: string;
            name: string;
            type: string;
        };
    };
};
//# sourceMappingURL=sample-payloads.d.ts.map