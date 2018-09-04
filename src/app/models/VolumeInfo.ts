import { IndustryIdentifiers } from './IndustryIdentifiers';
import { ReadingModes } from './ReadingModes';
import { PanelizationSummary } from './PanelizationSummary';
import { ImagesLinks } from './ImageLinks';

export class VolumeInfo {

    public title: String;
    public subtitle: String;
    public authors: String[];
    public publisher: String;
    public publishedDate: String;
    public description: String;
    public industryIdentifiers: IndustryIdentifiers[];
    public readingModes: ReadingModes;
    public pageCount: String;
    public printType: String;
    public categories: String[];
    public maturityRating: String;
    public allowAnonLogging: Boolean;
    public contentVersion: String;
    public panelizationSummary: PanelizationSummary;
    public imageLinks: ImagesLinks;
    public language: String;
    public previewLink: String;
    public infoLink: String;
    public canonicalVolumeLink: String;

    constructor() {
        this.title = '';
        this.publisher = '';
        this.industryIdentifiers = [new IndustryIdentifiers()];
        this.readingModes = new ReadingModes();
        this.printType = '';
        this.maturityRating = '';
        this.allowAnonLogging = false;
        this.contentVersion = '';
        this.panelizationSummary = new PanelizationSummary();
        this.imageLinks = new ImagesLinks();
        this.language = '';
        this.previewLink = '';
        this.infoLink = '';
        this.canonicalVolumeLink = '';
    }
}