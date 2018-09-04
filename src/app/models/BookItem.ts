import { SaleInfo } from './SaleInfo';
import { VolumeInfo } from './VolumeInfo';
import { AccessInfo } from './AccessInfo';

export class BookItem {

    public kind: String;
    public id: String;
    public etag: String;
    public selfLink: String;
    public volumeInfo: VolumeInfo;
    public saleInfo: SaleInfo;
    public accessInfo: AccessInfo;
    public webReaderLink: String;
    public accessViewStatus: String;
    public quoteSharingAllowed: Boolean;

    constructor() {
        this.kind = '';
        this.id = '';
        this.etag = '';
        this.selfLink = '';
        this.volumeInfo = new VolumeInfo();
        this.saleInfo = new SaleInfo();
        this.accessInfo = new AccessInfo();
        this.webReaderLink = '';
        this.accessViewStatus = '';
        this.quoteSharingAllowed = false;
    }
}
