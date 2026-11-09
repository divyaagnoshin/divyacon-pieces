import { PlacidTemplate, PlacidImage, PlacidCreateImageRequest, PlacidCreatePdfRequest, PlacidCreateVideoRequest } from './index';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { placidAuth } from '../auth';
export declare class PlacidClient {
    private apiKey;
    constructor(apiKey: AppConnectionValueForAuthProperty<typeof placidAuth>);
    listTemplates(): Promise<PlacidTemplate[]>;
    getTemplate(templateId: string): Promise<PlacidTemplate>;
    createImage(request: PlacidCreateImageRequest): Promise<PlacidImage>;
    getImage(imageId: string): Promise<PlacidImage>;
    deleteImage(imageId: string): Promise<void>;
    createPdf(request: PlacidCreatePdfRequest): Promise<PlacidImage>;
    createVideo(request: PlacidCreateVideoRequest): Promise<PlacidImage>;
    pollForCompletion(id: string, type: 'image' | 'pdf' | 'video'): Promise<PlacidImage>;
    getPdf(pdfId: string): Promise<PlacidImage>;
    getVideo(videoId: string): Promise<PlacidImage>;
}
//# sourceMappingURL=client.d.ts.map