import { Epub } from './Epub';
import { Pdf } from './Pdf';

export class AccessInfo {

    public country: String;
    public viewability: String;
    public embeddable: Boolean;
    public publicDomain: Boolean;
    public textToSpeechPermission: String;
    public epub: Epub;
    public pdf: Pdf;
    public webReaderLink: String;
    public accessViewStatus: String;
    public quoteSharingAllowed: Boolean;

    constructor() {
        this.country = '';
        this.viewability = '';
        this.embeddable = false;
        this.publicDomain = false;
        this.textToSpeechPermission = '';
        this.epub = new Epub();
        this.pdf = new Pdf();
        this.webReaderLink = '';
        this.accessViewStatus = '';
        this.quoteSharingAllowed = false;
    }
}
