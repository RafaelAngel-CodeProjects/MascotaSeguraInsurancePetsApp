import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseServiceService } from '../services/base-service.service'
import { environment } from '../../../../environments/environment.development';
import { Catalogo } from '../dtos/model/catalogo';
import { RespuestaCatalogo } from '../dtos/model/respuestaCatalogo';
import { PolizaPlanMascota, PolizaPlanMascotaDBData } from '../dtos/model/polizaPlanMascota';
import { RequestSession } from '../dtos/model/requestSession';
import { ResponseSession } from '../dtos/model/responseSession';
import { RequestConsulta } from '../dtos/model/requestConsulta';
import { ResponseConsulta } from '../dtos/model/responseConsulta';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  constructor(private base: BaseServiceService) { }

  getData(requestBody:Catalogo): Observable<RespuestaCatalogo> {
    const petBreedsResults = this.base.catalogos(requestBody,environment.apiKey,environment.apiUrlPets);
    return petBreedsResults;
  }

  createInsurance(requestBody:PolizaPlanMascota): Observable<RespuestaCatalogo> {
    const petBreedsResults = this.base.expedirPoliza(requestBody,environment.apiKey,environment.apiUrlInsurance);
    return petBreedsResults;
  }

  saveInsuranceData(requestBody:PolizaPlanMascotaDBData): Observable<boolean> {
    const petBreedsResults = this.base.saveInsuranceData(requestBody,environment.apiUrlSaveInsurance);
    return petBreedsResults;
  }

  updateInsuranceData(requestBody:PolizaPlanMascotaDBData): Observable<boolean> {
    const petBreedsResults = this.base.updateInsuranceData(requestBody.internalId,requestBody,environment.apiUrlUpdateInsurance);
    return petBreedsResults;
  }

  
  getInsuranceData(insuranceId: string): Observable<PolizaPlanMascotaDBData> {
    const petBreedsResults = this.base.getInsuranceData(environment.apiUrlGetInsurance + insuranceId);
    return petBreedsResults;
  }

  authInsurance(requestBody:RequestSession): Observable<ResponseSession> {
    const petBreedsResults = this.base.sessionUsingPOST(requestBody,environment.apiKey,environment.apiUrlAuthSession);
    return petBreedsResults;
  }

  checkInsurance(requestBody:RequestConsulta): Observable<ResponseConsulta> {
    const petBreedsResults = this.base.consultaAviso(requestBody,environment.apiKey,environment.apiUrlInsurance);
    return petBreedsResults;
  }
  
  
}
