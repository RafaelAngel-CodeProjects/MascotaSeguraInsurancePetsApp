

import { DetailPayment } from './detailPayment';
import { HeadRequestSession } from './headRequestSession';
import { RedirectRequestSession } from './redirectRequestSession';

export interface RequestSession { 
    headRequest?: HeadRequestSession;
    redirectRequest?: RedirectRequestSession;
    detailPayment?: Array<DetailPayment>;
}