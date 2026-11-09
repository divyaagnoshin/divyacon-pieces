import { FilesService } from '@agnocon/pieces-framework';
import { ILoveApiTool, ProcessResponse } from './types';
import { RunTaskInput, UploadInput } from './client';
export type RunAndStoreInput = Omit<RunTaskInput, 'publicKey'> & {
    auth: string;
    files: FilesService;
};
export type RunAndStoreResult = {
    output_file: string;
    download_filename: string;
    output_filenumber?: number;
    output_filesize?: number;
    output_extensions?: string[];
    status?: string;
    process: ProcessResponse;
};
export declare function runAndStoreResult({ auth, files, tool, uploads, options, output_filename, packaged_filename, perFileOverrides, extraUploads, }: RunAndStoreInput): Promise<RunAndStoreResult>;
export type ToolUploadInput = UploadInput;
export type ToolName = ILoveApiTool;
//# sourceMappingURL=runner.d.ts.map