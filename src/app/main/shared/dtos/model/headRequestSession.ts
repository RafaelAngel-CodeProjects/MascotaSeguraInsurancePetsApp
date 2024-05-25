
import { AuthRdSura } from './authRdSura';

export interface HeadRequestSession { 
    authRdSura: AuthRdSura;
    sociedad?: string;
    cdFuente: string;
    refExterna?: string;
    cdFlujo?: string;
}